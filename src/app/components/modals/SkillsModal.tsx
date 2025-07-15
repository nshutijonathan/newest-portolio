import { skills } from "@/app/data/skills";
import { Modal, ModalProps } from "./Modal";

export function SkillsModal(props: ModalProps) {
  return (
    <Modal {...props}>
      {skills.map((skill) => (
        <>
          <div className="my-3 font-jura">
            <p className="text-2xl m:text-xl font-bold underline">{skill.skill} </p>
            <span className="text-xl m:text-lg capitalize">
              {skill.skillSet.join(", ")}
            </span>
          </div>
        </>
      ))}
    </Modal>
  );
}
