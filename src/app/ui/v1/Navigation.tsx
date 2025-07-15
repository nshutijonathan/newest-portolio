import { useState } from "react";
import { MainProps } from "./types";
import { FaSpinner } from "react-icons/fa";
import { links } from "@/app/data/links";

export function Navigation(props: MainProps) {
  const [downloadDisabled, setDownloadDisabled] = useState(false);

  const handleDownload = () => {
    setDownloadDisabled(true);
    setTimeout(() => {
      setDownloadDisabled(false);
    }, 500);
  };

  return (
    <div
      role="navigation"
      className="flex border-y mt-[60px] pl-[70px] font-jura uppercase text-2xl ml:text-xl m:hidden bg-cream"
    >
      <button
        onClick={props.onOpenContactModal}
        className="uppercase ml-10 cursor-pointer active:bg-cream active:text-night hover:bg-white border-x px-[12px] py-[8px] font-extrabold"
      >
        Contact me
      </button>
      <button
        role="button"
        onClick={props.onOpenSkillsModal}
        className="uppercase cursor-pointer active:bg-cream active:text-night hover:bg-white border-r px-[12px] py-[8px] font-extrabold"
      >
        My skills
      </button>
      <div className="border-r flex items-center justify-center flex-col w-[12.5em]">
        {downloadDisabled ? (
          <FaSpinner size={30} className="animate-spin" />
        ) : (
          <a
            onClick={handleDownload}
            className="cursor-pointer active:bg-cream active:text-night hover:bg-white font-extrabold px-[12px] py-[8px] w-[12.5em]"
            href={links.Resume}
            rel="noopener noreferrer"
            target="_blank"
            download
          >
            Download My Resume
          </a>
        )}
      </div>
    </div>
  );
}
