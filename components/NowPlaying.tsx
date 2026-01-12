//@ts-nocheck
"use client";
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { SiSpotify } from "react-icons/si";

interface SpotifyData {
  songUrl: string;
  title: string;
  artist: string;
}
const fetcher = (url) => fetch(url).then((r) => r.json());

const NowPlaying = () => {
  const { data } = useSWR("/api/spotify", fetcher, {
    refreshInterval: 5000,
    revalidateOnFocus: true,
  });

  return (
    <div className="w-full bg-slate-900 overflow-hidden z-50 flex fixed h-6 pb-1 justify-center items-center">
      <h4 className="text-white flex w-full text-xs space-x-1 text-center items-center marquee md:text-xs ">
        <SiSpotify size={12} color={"#26a551"} className="mr-1" />
        Currently Listening to:{" "}
        {data?.isPlaying ? (
          <>
            <a
              className="hover:underline underline-offset-1 text-green-300"
              target="_blank"
              href={data.songUrl}
            >
              {data.title}
            </a>
            <span className="">by {data?.artist} 🔥</span>
          </>
        ) : (
          <span>nothing 😴</span>
        )}
      </h4>
    </div>
  );
};
export default NowPlaying;
