import { SpotifyData } from '@/types/types';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

if (!client_id || !client_secret || !refresh_token) {
  throw new Error('Missing Spotify API credentials');
}

const token = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;


const getAccessToken = async () => {
  const res = await axios.post<{ access_token: string }>(
    TOKEN_ENDPOINT,
    new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }).toString(),
    {
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  return res.data.access_token;
};

export const getNowPlaying = async () => {
  const access_token = await getAccessToken();

  return axios.get<SpotifyData>(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async function spotify(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const response = await getNowPlaying();
    
    // Set cache headers once
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=180, stale-while-revalidate=90'
    );

    if (
      response.status === 204 ||
      response.status > 400 ||
      !response.data ||
      response.data.currently_playing_type !== 'track'
    ) {
      return res.status(200).json({ isPlaying: false });
    }

    const { item } = response.data;
    if (!item || !item.album || !item.album.images?.[0]) {
      return res.status(200).json({ isPlaying: false });
    }

    const data = {
      isPlaying: response.data.is_playing,
      title: item.name,
      album: item.album.name,
      artist: item.album.artists
        .map((artist) => artist.name)
        .join(', '),
      albumImageUrl: item.album.images[0].url,
      songUrl: item.external_urls.spotify,
    };

    return res.status(200).json(data);
  } catch (error) {
    console.error('Spotify API error:', error);
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=60, stale-while-revalidate=30'
    );
    return res.status(500).json({
      isPlaying: false,
      error: 'Failed to fetch now playing data'
    });
  }
}