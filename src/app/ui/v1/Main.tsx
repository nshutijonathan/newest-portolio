import { ContactButton } from "../../components";
import { Title } from "./Title";
import { Actions } from "./Actions";
import { MainProps } from "./types";

export function Main(props: MainProps) {
  return (
    <div className="z-10 flex flex-col font-jura h-full items-center w-4/5 lg:w-full">
      <Title openSkillsModal={props.onOpenSkillsModal} />
      <Actions />
      <ContactButton onClick={props.onOpenContactModal} />
    </div>
  );
}
