import { links } from "@/app/data/links";
import { BsDot } from "react-icons/bs";

// NOTE: &apos; is the HTML entity for an apostrophe (used below)
// NOTE: &gt; is the HTML entity for an > (used below)

type TitleProps = {
  openSkillsModal: () => void;
};

function SubTitle(props: TitleProps) {
  return (
    <div className="ml-8 m:ml-0 font-jetbrains xxxl:w-[50em] w-[43em] xl:w-[34em] ml:w-[26em] s:w-[22em] xs:w-[18em] s:ml-0">
      <div className="bg-night text-cream py-4 xs:py-2 pl-10 xl:pl-6 xxxl:text-7xl text-6xl xl:text-5xl ml:text-4xl s:text-3xl xs:text-2xl overflow-hidden text-nowrap">
        Software Engineer
      </div>
      <div className="flex justify-center items-center w-2/3 s:w-full xxxl:text-4xl text-3xl xl:text-2xl m:text-xl s:text-lg px-1 bg-lemon text-night">
        <span>FULL STACK</span>
        <BsDot />
        <span>WEB</span>
      </div>
      <div
        className="hidden m:block cursor-pointer text-xl hover:bg-black/10 active:bg-white w-1/2 xs:w-full s:text-lg"
        onClick={props.openSkillsModal}
      >
        What I do --&gt;
      </div>
    </div>
  );
}

export function Title(props: TitleProps) {
  return (
    <div className="my-20 flex flex-col justify-center ml:items-start xxl:ml-32 lg:ml-0">
      <div className="xxxl:text-7xl text-5xl mb-16 xl:text-4xl s:text-3xl xs:text-2xl">
        <span> Hi, I&apos;m </span>
        <a
          target="_blank"
          href={links.LinkedIn}
          className="ml-2 border-b hover:bg-lemon hover:text-night cursor-pointer transition-colors duration-300"
        >
          Jonathan Nshuti
        </a>
      </div>
      <SubTitle {...props} />
    </div>
  );
}
