import { Dialog } from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import CloseIcon from "components/icons/Close";
import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onDismiss: () => void;
  children: ReactNode;
  className?: string;
}

export default function Modal({
  isOpen,
  onDismiss,
  children,
  className = "",
}: ModalProps): JSX.Element {
  return (
    <div>
      <Dialog
        className={`relative rounded-2xl card paragraph ${className}`}
        isOpen={isOpen}
        onDismiss={onDismiss}
      >
        <button onClick={onDismiss} className="absolute p-2 top-2 right-2">
          <VisuallyHidden>Close</VisuallyHidden>
          <CloseIcon className="w-4" />
        </button>
        {children}
      </Dialog>
    </div>
  );
}
