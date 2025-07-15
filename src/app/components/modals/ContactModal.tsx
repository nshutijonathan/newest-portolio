import { BsSendFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { IoCopyOutline } from "react-icons/io5";

import { links } from "@/app/data/links";
import { useState } from "react";
import { Modal, ModalProps } from "./Modal";

export function ContactModal(props: ModalProps) {
  const [copied, setCopied] = useState(false);

  const handleSendEmail = () => {
    setTimeout(() => props.onClose(), 100);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(links.Email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <Modal {...props}>
      <div className="flex flex-col justify-between font-jura">
        <div>
          <div className="font-bold lg:text-3xl m:text-2xl s:text-xl xs:text-lg">
            Hello there,
          </div>
          <div className="text-3xl lg:text-2xl my-8 w-4/5 m:w-full">
            Wanna connect? Please send me an email, I&apos;ll get back to you
            ASAP.
          </div>
          <div className="text-2xl lg:text-xl m:text-lg xs:text-base flex items-center my-2">
            <span className="mr-2">{links.Email}</span>
            {copied ? (
              <>
                <FaCheck className="lg:hidden" size={20} />
                <FaCheck className="hidden lg:block" size={20} />
              </>
            ) : (
              <button onClick={handleCopyEmail} className="hover:text-black/60">
                <IoCopyOutline className="lg:hidden" size={20} />
                <IoCopyOutline className="hidden lg:block" size={15} />
              </button>
            )}
          </div>
        </div>
        <div className="mt-10">
          <a
            className="absolute flex bg-white border-2 items-center justify-center w-[150px] h-[50px] hover:bg-cream transition-all duration-300 active:ml-2 active:mt-2"
            onClick={handleSendEmail}
            href={`mailto:${links.Email}?subject=RE: Jonathan's Portfolio&body=Hi Jonathan, `}
          >
            <BsSendFill className="s:hidden" size={30} />
            <BsSendFill className="hidden s:block" size={25} />
          </a>
          <div className="border-2 border-black ml-2 mt-2 bg-lemon w-[150px] h-[50px]"></div>
        </div>
      </div>
    </Modal>
  );
}
