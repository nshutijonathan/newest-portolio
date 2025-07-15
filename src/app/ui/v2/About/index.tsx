import { Bio } from "./Bio";
import { Skills } from "./Skills";

export function About() {
  return (
    <div className="w-7/12 lg:w-full min-w-[320px] flex flex-col items-center mt-[3%]">
      <Bio />
      <Skills />
    </div>
  );
}
