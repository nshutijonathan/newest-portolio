import { links } from "@/app/data/links";

const projects = [
  {
    index: "project-0",
    title: "AccurKardia",
    description: "Contributed to AccurECG Analysis System development for healthcare platform",
    link: "https://www.accurkardia.com/",
    stack: "Node/Express, Docker, TypeScript, PostgreSQL",
  },
  {
    index: "project-1",
    title: "GoVolunteer",
    description: "Germany's biggest online community for volunteering",
    link: "https://govolunteer.com/",
    stack: "Python(Django), GraphQL, React.js, Next.js",
  },
  {
    index: "project-2",
    title: "Video Game Discovery",
    description: "A video game discovery platform",
    link: "https://github.com/nshutijonathan/video-game-discovery",
    stack: "React, Node.js",
  },
  {
    index: "project-3",
    title: "M-Dashboard",
    description: "Real-time website monitoring with automated status checking",
    link: "https://github.com/nshutijonathan/web-monitoring",
    stack: "React, Node/Express, PostgreSQL",
  },
];

export function Projects() {
  return (
    <div className="font-jetbrains lg:w-11/12 flex flex-col lg:items-center">
      <h2 className="text-black1 text-2xl font-light dark:text-gray1">
        PROJECTS
      </h2>
      <div className="flex flex-wrap mt-2 lg:justify-center max-w-[650px] mb-8">
        {projects.map((project) => (
          <a key={project.index} href={project.link} target="_blank">
            <div className="w-[160px] xs:w-[320px] xs2:w-[290px] mx-auto h-[165px] xs:h-[100px] bg-purple1/10 dark:bg-black2 hover:bg-gray1 hover:dark:bg-orange1/70 transition-all duration-200 xs:mr-0 mr-3 mb-3 px-3 py-2 xs:py-1 flex flex-col justify-between xs:justify-evenly">
              <h3 className="text-base text-black1 dark:text-gray2">
                {project.title}
              </h3>
              <p className="text-black2 text-xs xs:text-[11px] my-2 xs:my-0 dark:text-gray1 xs:truncate">
                {project.description}
              </p>
              <p className="text-black2 text-[10px] my-2 xs:my-0 dark:text-gray1 break-words leading-tight">
                {project.stack}
              </p>
            </div>
          </a>
        ))}
      </div>
      <a
        className="text-lg text-orange2 dark:text-orange1 hover:text-purple1 hover:dark:text-gray1 hover:underline transition-all duration-200 mt-4"
        href={links.GitHub}
        target="_blank"
      >
        MORE ON GITHUB --&gt;
      </a>
    </div>
  );
}
