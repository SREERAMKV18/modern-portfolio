import Link from "next/link";

import {
  RiLinkedinLine,
  RiGithubLine,
  RiTwitterXLine,
  RiTwitterLine,
  RiMailLine,
} from "react-icons/ri";

import { SiOrcid } from "react-icons/si";

export const socialData = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sreeram-k-v-7a069925b",
    Icon: RiLinkedinLine,
    color: "hover:text-[#0077b5]",
  },
  {
    name: "GitHub",
    link: "https://github.com/SREERAMKV18",
    Icon: RiGithubLine,
    color: "hover:text-[#f0f6fc]",
  },
  {
    name: "ORCID",
    link: "https://orcid.org/0009-0005-2217-4532",
    Icon: SiOrcid,
    color: "hover:text-[#A6CE39]",
  },
  {
    name: "Twitter/X",
    link: "https://x.com/sreeramkv18_",
    Icon: RiTwitterXLine,
    color: "hover:text-[#000000]",
  },
  {
    name: "Email",
    link: "mailto:sreeramkunnavu@gmail.com",
    Icon: RiMailLine,
    color: "hover:text-[#EA4335]",
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-3 md:gap-x-5 text-base md:text-lg -mt-4 xl:-mt-10">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${social.color} transition-all duration-300 hover:scale-110`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;