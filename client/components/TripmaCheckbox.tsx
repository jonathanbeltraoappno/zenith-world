interface TripmaCheckboxProps {
  checked?: boolean;
  label: string;
  onChange?: (checked: boolean) => void;
}

export default function TripmaCheckbox({ checked = false, label, onChange }: TripmaCheckboxProps) {
  return (
    <div className="inline-flex py-1 items-center gap-2">
      <div 
        className="flex w-[18px] h-[18px] justify-center items-center cursor-pointer"
        onClick={() => onChange?.(!checked)}
      >
        <div className="w-[18px] h-[18px] flex-shrink-0 border border-[#6E7491] relative">
          {checked && (
            <div className="w-[9px] h-[9px] flex-shrink-0 rounded-[1px] bg-[#605DEC] absolute left-1 top-1"></div>
          )}
        </div>
      </div>
      <div className="text-[#6E7491] text-base font-normal">{label}</div>
    </div>
  );
}
