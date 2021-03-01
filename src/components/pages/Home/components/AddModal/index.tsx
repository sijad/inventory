import Modal from "components/Modal";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { useCoins } from "inventory/coingecko";
import { useMemo, useState } from "react";

interface AddModalProps {
  isOpen: boolean;
  onDismiss: () => void;
}

export default function AddModal({
  isOpen,
  onDismiss,
}: AddModalProps): JSX.Element {
  const [term, setTerm] = useState("");
  const { data } = useCoins();
  const coins = data?.coins;
  const results = useMemo(() => {
    const _coins = [];
    for (const c of coins || []) {
      if (!term || c.id.includes(term)) {
        _coins.push(c);
        if (_coins.length == 5) {
          break;
        }
      }
    }
    return _coins;
  }, [term, coins]);

  return (
    <div>
      <Modal
        label="Add Asset Modal"
        className="w-full max-w-md"
        isOpen={isOpen}
        onDismiss={onDismiss}
      >
        <p>Hello there. I am a dialog</p>
        <Combobox
          openOnFocus
          aria-label="custom option demo"
          onSelect={(value) => {
            console.log(value);
          }}
        >
          <ComboboxInput
            placeholder="Custom Option Rendering"
            style={{ width: 300 }}
            onChange={(e) => setTerm(e.target.value)}
          />
          <ComboboxPopover>
            <ComboboxList>
              {results.map(({ id, name, large }) =>
                id ? (
                  <ComboboxOption key={id} value={id}>
                    <img className="w-8" src={large} alt={`${name} logo`} />
                    {name}
                  </ComboboxOption>
                ) : null,
              )}
            </ComboboxList>
          </ComboboxPopover>
        </Combobox>
      </Modal>
    </div>
  );
}
