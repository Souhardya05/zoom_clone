import React from "react";
import { cn } from "@/lib/utils";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface MeetingModalProp {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  children?: React.ReactNode;
  handleClick?: () => void;
  buttonText?: string;
  image?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  children,
  handleClick,
  buttonText,
  image,
  buttonIcon,
}: MeetingModalProp) => {
  return (
    <section>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="flex flex-col w-full max-w-[520px] border-none bg-[#1C1F2E] px-6 py-9 text-white gap-6">
          <div className="flex flex-col gap-6">
            {image && (
              <div className="flex justify-center">
                <img src={image} alt="Meeting" className="w-72 h-72" />
              </div>
            )}

            <DialogHeader>
              <DialogTitle className={cn("text-3xl font-bold leading-[42px]", className)}>
                {title}
              </DialogTitle>
            </DialogHeader>

            {children}

            <Button
              className="bg-blue-500 hover:bg-blue-600 focus-visible:ring-0 focus-visible:ring-offset-0 text-white w-full"
              onClick={handleClick}
            >
              {buttonIcon && (
                <img
                  src={buttonIcon}
                  alt="icon"
                  width={13}
                  height={13}
                  className="mr-2 inline-block"
                />
              )}
              {buttonText || "Schedule Meeting"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MeetingModal;
