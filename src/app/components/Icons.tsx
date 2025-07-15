import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { links } from "../data/links";
import { RiDownload2Fill } from "react-icons/ri";

type IconProps = {
  link: string;
  children: React.ReactNode;
  className?: string;
};

function Icon({ link, children }: IconProps) {
  return (
    <a
      href={link}
      target="_blank"
      className="cursor-pointer transition-all duration-150 hover:translate-y-0.5"
    >
      {children}
    </a>
  );
}

export const LinkedIn = () => (
  <Icon link={links.LinkedIn}>
    <FaLinkedin
      className="hidden xxxl:block"
      size={40}
      title="Go to my LinkedIn profile"
    />
    <FaLinkedin
      className="xs:hidden xxxl:hidden"
      size={30}
      title="Go to my LinkedIn profile"
    />
    <FaLinkedin
      className="hidden xs:block"
      size={20}
      title="Go to my LinkedIn profile"
    />
  </Icon>
);

export const GitHub = () => (
  <Icon link={links.GitHub}>
    <FaGithubAlt
      className="hidden xxxl:block"
      size={40}
      title="Go to my Github page"
    />
    <FaGithubAlt
      className="xs:hidden xxxl:hidden"
      size={30}
      title="Go to my Github page"
    />
    <FaGithubAlt
      className="hidden xs:block"
      size={20}
      title="Go to my Github page"
    />
  </Icon>
);

export const DownloadResumeIcon = () => {
  return (
    <a
      className="cursor-pointer transition-all duration-150 hover:translate-y-0.5"
      href={links.Resume}
      rel="noopener noreferrer"
      target="_blank"
      download
      title="Download my resume"
    >
      <RiDownload2Fill
        className="hidden xxxl:block"
        size={40}
        title="Download my resume"
      />
      <RiDownload2Fill
        className="xs:hidden xxxl:hidden"
        size={30}
        title="Download my resume"
      />
      <RiDownload2Fill
        className="hidden xs:block"
        size={20}
        title="Download my resume"
      />
    </a>
  );
};
