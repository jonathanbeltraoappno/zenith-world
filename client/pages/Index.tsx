import Header from "../components/Header";
import Footer from "../components/Footer";
import PassengerForm from "../components/PassengerForm";
import FlightCart from "../components/FlightCart";
import LuggageIllustration from "../components/LuggageIllustration";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="relative">
        {/* Desktop Layout */}
        <div className="hidden lg:flex min-h-screen">
          {/* Left Side - Form Content */}
          <div className="flex-1 px-[107px] py-[60px] max-w-[900px]">
            <PassengerForm />
          </div>

          {/* Right Side - Sticky Cart Container */}
          <div className="w-[500px] relative">
            <div className="sticky top-[120px] px-[44px]">
              {/* Flight Cart */}
              <div className="mb-8">
                <FlightCart />
              </div>

              {/* Luggage Illustration - Only show when not at bottom */}
              <div className="mt-16">
                <LuggageIllustration />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="px-4 py-[60px]">
            <PassengerForm />
          </div>
          <div className="px-4 py-8">
            <FlightCart />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
