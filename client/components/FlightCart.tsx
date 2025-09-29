export default function FlightCart() {
  return (
    <div className="inline-flex flex-col items-end w-[444px] h-[386px]">
      {/* Flight Details Card */}
      <div className="flex flex-col items-start gap-2 p-4 border border-[#E9E8FC] rounded-[13px] bg-white">
        {/* First Flight */}
        <div className="flex w-[408px] p-2 items-start gap-2">
          {/* Hawaiian Airlines Logo */}
          <div className="flex w-[44px] h-[44px] justify-center items-center flex-shrink-0">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/a07a341bf612ef18ff07c4174045d6f54e48f8dc?width=89" 
              alt="Hawaiian Airlines" 
              className="w-[44px] h-[44px] flex-shrink-0"
            />
          </div>
          {/* Airline Details */}
          <div className="flex flex-col items-start gap-1 flex-1">
            <div className="text-[#27273F] text-base font-normal">Hawaiian Airlines</div>
            <div className="text-[#7C8DB0] text-base font-normal">FIG4312</div>
          </div>
          {/* Flight Details */}
          <div className="flex flex-col items-start gap-1 flex-1">
            <div className="text-[#27273F] text-base font-normal text-right w-full">16h 45m (+1d)</div>
            <div className="text-[#27273F] text-base font-normal text-right w-full">7:00 AM - 4:15 PM</div>
            <div className="text-[#7C8DB0] text-base font-normal text-right w-full">2h 45m in HNL</div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex w-[408px] p-1 flex-col items-center gap-3 bg-white">
          <div className="h-[1px] w-full bg-[#E9E8FC]"></div>
        </div>

        {/* Second Flight */}
        <div className="flex w-[408px] p-2 items-start gap-2">
          {/* Hawaiian Airlines Logo */}
          <div className="flex w-[44px] h-[44px] justify-center items-center flex-shrink-0">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/96e92aaf3867cc2cced9ae05424ce9efff484478?width=89" 
              alt="Hawaiian Airlines" 
              className="w-[44px] h-[44px] flex-shrink-0"
            />
          </div>
          {/* Airline Details */}
          <div className="flex flex-col items-start gap-1 flex-1">
            <div className="text-[#27273F] text-base font-normal">Hawaiian Airlines</div>
            <div className="text-[#7C8DB0] text-base font-normal">FIG4312</div>
          </div>
          {/* Flight Details */}
          <div className="flex flex-col items-start gap-1 flex-1">
            <div className="text-[#27273F] text-base font-normal text-right w-full">16h 45m (+1d)</div>
            <div className="text-[#27273F] text-base font-normal text-right w-full">7:00 AM - 4:15 PM</div>
            <div className="text-[#7C8DB0] text-base font-normal text-right w-full">2h 45m in HNL</div>
          </div>
        </div>
      </div>

      {/* Price Summary */}
      <div className="flex p-4 justify-end items-start gap-11">
        <div className="flex flex-col items-start gap-2">
          <div className="w-[133px] text-[#27273F] text-right text-base font-bold">Subtotal</div>
          <div className="w-[133px] text-[#27273F] text-right text-base font-bold">Taxes and Fees</div>
          <div className="w-[133px] text-[#27273F] text-right text-base font-bold">Total</div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="text-[#27273F] text-right text-base font-bold">$503</div>
          <div className="text-[#27273F] text-right text-base font-bold">$121</div>
          <div className="text-[#27273F] text-right text-base font-bold">$624</div>
        </div>
      </div>

      {/* Select Seats Button */}
      <button className="inline-flex h-[53px] px-6 py-3 items-center gap-2 flex-shrink-0 rounded-[4px] bg-[#605DEC] text-white text-lg font-normal mt-4">
        Select seats
      </button>
    </div>
  );
}
