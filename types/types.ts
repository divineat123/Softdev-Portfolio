import { StaticImageData } from "next/image";

export interface LogoData {
  alt: string;
  src: string | StaticImageData;
}



export type Project = {
  id: string;
  projectName: string;
  projectImage: string | StaticImageData;
  projectDescription: string;
  demoLink: string;
  githubLink?: string;
  tools: string[];
};