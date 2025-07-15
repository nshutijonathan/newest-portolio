import { IoCloseSharp } from "react-icons/io5";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
};

type InnerModalProps = {
  children: React.ReactNode;
} & ModalProps;

export function Modal(props: InnerModalProps) {
  if (!props.open) {
    return null;
  }

  return (
    <div className="fixed h-full w-full flex items-center justify-center z-20">
      <div
        className="absolute bg-black opacity-70 h-full w-full flex items-center justify-center"
        onClick={props.onClose}
      ></div>
      <div className="absolute text-4xl bg-white py-6 px-12 m:px-8 xs:px-6 w-3/5 xl:w-4/5 s:w-11/12 s:m-4">
        <div className="w-full flex justify-between">
          <div className="">.....</div>
          <button onClick={props.onClose}>
            <IoCloseSharp className="s:hidden" size={30} />
            <IoCloseSharp className="hidden s:block" size={25} />
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
}
