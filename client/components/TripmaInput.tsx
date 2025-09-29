interface TripmaInputProps {
  value?: string;
  placeholder?: string;
  helperText?: string;
  className?: string;
  type?: string;
}

export default function TripmaInput({ value, placeholder, helperText, className = "", type = "text" }: TripmaInputProps) {
  const isPlaceholder = !value && placeholder;
  
  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div className="flex p-2 items-end gap-2 w-full border border-[#A1B0CC] rounded-[4px] bg-white">
        <div className="flex h-[36px] flex-col justify-center flex-1">
          <input
            type={type}
            defaultValue={value}
            placeholder={placeholder}
            className={`text-lg font-normal border-none outline-none bg-transparent w-full ${
              isPlaceholder ? 'text-[#7C8DB0]' : 'text-[#36374A]'
            }`}
          />
        </div>
      </div>
      {helperText && (
        <div className="flex p-[2px] items-center w-full rounded-[4px]">
          <div className="text-[#7C8DB0] text-xs font-normal">{helperText}</div>
        </div>
      )}
    </div>
  );
}
