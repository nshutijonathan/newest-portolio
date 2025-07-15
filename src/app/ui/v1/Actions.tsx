import { DownloadResumeIcon, GitHub, LinkedIn } from "../../components";

export function Actions() {
  return (
    <div className="flex flex-col mb-16">
      <div className="xxxl:text-4xl text-3xl m:text-2xl xs:text-xl font-extrabold">
        I love working with amazing <br /> people to build intuitive <br />
        products
      </div>
      <div className="flex flex-row xxxl:w-[300px] w-[200px] xs:w-[160px] justify-between mt-8">
        <LinkedIn />
        <GitHub />
        <DownloadResumeIcon />
      </div>
    </div>
  );
}
