import Modal from "components/Modal";

interface AddModalProps {
  isOpen: boolean;
  onDismiss: () => void;
}

export default function AddModal({
  isOpen,
  onDismiss,
}: AddModalProps): JSX.Element {
  return (
    <div>
      <Modal
        label="Add Asset Modal"
        className="w-full max-w-md"
        isOpen={isOpen}
        onDismiss={onDismiss}
      >
        <p>Hello there. I am a dialog</p>
      </Modal>
    </div>
  );
}
