"use client"

import Link from "next/link";
import { AiOutlineYoutube } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
  RiTwitterXFill,
  RiFacebookBoxFill,
  RiYoutubeFill,
  RiYoutubeLine,
  RiGithubLine,
  RiFacebookBoxLine,
  RiFacebookLine,
  RiChromeLine,
} from "react-icons/ri";

export interface SocialLinksProps {
  links: {
    twitter: string;
    instagram: string;
    facebook: string;
    github: string;
    website: string;
    youtube: string;
  };
}

export const SocialLinks = ({ links }: SocialLinksProps) => {
  const { twitter, facebook, instagram, github, website, youtube } = links;
  return (
    <div className="grid grid-cols-6 gap-2 w-max">
      {twitter && (
        <Link href={twitter} target="_blank" className="w-4 h-4 rounded-full">
          <RiTwitterXFill />
        </Link>
      )}
      {facebook && (
        <Link href={facebook} target="_blank" className="w-4 h-4 rounded-full">
          <RiFacebookLine />
        </Link>
      )}
      {instagram && (
        <Link href={instagram} target="_blank" className="w-4 h-4 rounded-full">
          <FaInstagram />
        </Link>
      )}
      {github && (
        <Link href={github} target="_blank" className="w-4 h-4 rounded-full">
          <RiGithubLine />
        </Link>
      )}
      {youtube && (
        <Link href={youtube} target="_blank" className="w-4 h-4 rounded-full">
          <RiYoutubeLine />
        </Link>
      )}
      {website && (
        <Link href={website} target="_blank" className="w-4 h-4 rounded-full">
          <RiChromeLine />
        </Link>
      )}
    </div>
  );
};
