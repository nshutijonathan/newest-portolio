type ContactButtonProps = {
  onClick: () => void;
};

export function ContactButton(props: ContactButtonProps) {
  return (
    <div className="hidden h-1/12 m:flex bottom-24 text-4xl xl:text-3xl xs:text-2xl justify-center my-4 min-w-[200px]">
      <button
        className="z-10 absolute border-2 border-black p-4 bg-white min-w-[200px] hover:bg-cream transition-all duration-300 active:ml-2.5 active:mt-2.5"
        onClick={props.onClick}
      >
        CONTACT ME
      </button>
      <div className="absolute border-2 border-black p-4 ml-4 mt-2.5 bg-lemon min-w-[200px]">
        <span className="text-lemon">CONTACT ME</span>
      </div>
    </div>
  );
}
