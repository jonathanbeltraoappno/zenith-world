import { useState } from "react";
import TripmaInput from "./TripmaInput";
import TripmaCheckbox from "./TripmaCheckbox";

export default function PassengerForm() {
  const [checkedBags, setCheckedBags] = useState(1);
  const [sameAsPassenger1, setSameAsPassenger1] = useState(true);

  const incrementBags = () => setCheckedBags(prev => prev + 1);
  const decrementBags = () => setCheckedBags(prev => Math.max(0, prev - 1));

  return (
    <div className="w-full max-w-[757px]">
      {/* Header */}
      <h1 className="text-[#605DEC] text-[27px] font-bold mb-6">Passenger information</h1>
      
      {/* Description */}
      <p className="text-[#7C8DB0] text-xl font-normal mb-12 leading-normal">
        Enter the required information for each traveler and be sure that it exactly matches the government-issued ID presented at the airport.
      </p>

      {/* Passenger 1 Section */}
      <div className="mb-8">
        <h2 className="text-[#6E7491] text-xl font-bold mb-6">Passenger 1 (Adult)</h2>
        
        {/* Name Fields Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <TripmaInput placeholder="First name" className="w-full" />
          <TripmaInput placeholder="Middle" className="w-full" />
          <TripmaInput placeholder="Last name" className="w-full" />
        </div>

        {/* Date of Birth and Suffix Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <TripmaInput placeholder="Date of birth" helperText="MM/DD/YY" className="w-full" />
          <TripmaInput placeholder="Suffix" className="w-full" />
        </div>

        {/* Email and Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <TripmaInput placeholder="Email address" className="w-full" />
          <TripmaInput placeholder="Phone number" className="w-full" />
        </div>

        {/* Redress Number Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <TripmaInput placeholder="Redress number" className="w-full" />
          <TripmaInput placeholder="Known traveler number" className="w-full" />
        </div>
      </div>

      {/* Emergency Contact Section */}
      <div className="mb-8">
        <h2 className="text-[#6E7491] text-xl font-bold mb-6">Emergency contact information</h2>
        
        <div className="mb-4">
          <TripmaCheckbox 
            checked={sameAsPassenger1} 
            label="Same as Passenger 1"
            onChange={setSameAsPassenger1}
          />
        </div>

        {/* Emergency Contact Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <TripmaInput placeholder="First name" className="w-full" />
          <TripmaInput placeholder="Last name" className="w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <TripmaInput placeholder="Email address*" className="w-full" />
          <TripmaInput placeholder="Phone number" className="w-full" />
        </div>
      </div>

      {/* Bag Information Section */}
      <div className="mb-8">
        <h2 className="text-[#6E7491] text-xl font-bold mb-6">Bag information</h2>
        
        <p className="text-[#7C8DB0] text-xl font-normal mb-8 leading-normal">
          Each passenger is allowed one free carry-on bag and one personal item. First checked bag for each passenger is also free. Second bag check fees are waived for loyalty program members. See the{' '}
          <span className="text-[#605DEC]">full bag policy</span>.
        </p>

        {/* Bag Selection */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-[#7C8DB0] text-xl font-bold mb-2">Passenger 1</h3>
            <div className="text-[#6E7491] text-xl font-bold">Name will appear here</div>
          </div>
          
          <div className="flex items-center">
            <h3 className="text-[#7C8DB0] text-xl font-bold mr-8">Checked bags</h3>
            <div className="flex items-center gap-4">
              <button 
                onClick={decrementBags}
                className="flex w-[36px] h-[36px] justify-center items-center flex-shrink-0 rounded-[4px] bg-[#FAFAFA]"
              >
                <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.4002 17.2178H25.9364C26.5492 17.2178 27.0461 17.7146 27.0461 18.3275C27.0461 18.9404 26.5492 19.4372 25.9364 19.4372L10.4002 19.4372C9.78737 19.4372 9.29053 18.9404 9.29053 18.3275C9.29053 17.7146 9.78737 17.2178 10.4002 17.2178Z" fill="#605DEC"/>
                </svg>
              </button>
              
              <div className="flex w-[28px] h-[40px] flex-col justify-center flex-shrink-0 text-[#6E7491] text-center text-xl font-normal">
                {checkedBags}
              </div>
              
              <button 
                onClick={incrementBags}
                className="flex w-[36px] h-[36px] justify-center items-center flex-shrink-0 rounded-[4px] bg-[#FAFAFA]"
              >
                <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.8242 17.2178V10.5594C16.8242 9.94655 17.321 9.44971 17.9339 9.44971C18.5468 9.44971 19.0437 9.94655 19.0437 10.5594V17.2178L25.702 17.2178C26.3149 17.2178 26.8117 17.7146 26.8117 18.3275C26.8117 18.9404 26.3149 19.4372 25.702 19.4372L19.0437 19.4372V26.0955C19.0437 26.7084 18.5468 27.2053 17.9339 27.2053C17.321 27.2053 16.8242 26.7084 16.8242 26.0955V19.4372H10.1659C9.55299 19.4372 9.05615 18.9404 9.05615 18.3275C9.05615 17.7146 9.55299 17.2178 10.1659 17.2178H16.8242Z" fill="#605DEC"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="inline-flex items-start gap-7">
        <button className="flex h-[53px] px-6 py-3 items-center gap-2 rounded-[4px] border border-[#605DEC] text-[#605DEC] text-lg font-normal">
          Save and close
        </button>
        <button className="flex h-[53px] px-6 py-3 items-center gap-2 rounded-[4px] bg-[#605DEC] text-white text-lg font-normal">
          Select seats
        </button>
      </div>
    </div>
  );
}
