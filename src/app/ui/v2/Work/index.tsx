import { Projects } from "./Projects";

export function Work() {
  return (
    <div className="w-5/12 lg:w-full flex flex-col lg:items-center min-w-[320px] my-3 lg:mt-8 mt-[2%] xs:mt-6 max-w-[800px] ml-16 lg:ml-0 overflow-auto">
      <Projects />
    </div>
  );
}
