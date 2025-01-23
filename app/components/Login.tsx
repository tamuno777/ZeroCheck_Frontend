"use client";

export default function LogInPage() {
  // const { setOpen } = useIDKit();

  return (
    <>
      <div className="flex h-screen overflow-y-hidden  lg:flex-row-reverse">
        {/* Right Section */}
        <div className="lg:flex hidden flex-col justify-center items-center w-full lg:w-1/2 bg-black text-white bg-[url('/images/loginFrame.png')] bg-cover bg-center bg-no-repeat">
          <div className="max-w-[500px] mt-32">
            <p className="flex items-center flex flex-col text-center justify-center text-[18px] sm:text-[16px] md:text-[18px] lg:text-[18px]">
              simplifying events participation, enabling tracking verification
              and rewarding of attendees
            </p>
          </div>
        </div>

        {/* Left Section */}
        <div className="flex flex-col justify-center items-center w-full lg:w-1/2 bg-[#F1F1F1]">
          {/* Card Container */}
          <div className="box">
            <div className="bg-[#FFFFFF] shadow-lg rounded-lg p-8 max-w-sm w-full">
              <h2 className="font-instrument-sans text-[29.88px] font-bold text-left decoration-none text-center mb-4 text-[#1D1D1D] flex items-center justify-center space-x-1">
                <span>
                  <img
                    src="/icons/logo2.svg"
                    alt="ZeroCheck Logo"
                    className="w-9 h-9"
                  />
                </span>
                <span>ZeroCheck</span>
              </h2>
              <p className="font-[Instrument Sans] text-[18.07px] font-semibold leading-[21.69px] tracking-[0.05em] text-center mb-6 text-[#1D1D1D]">
                Welcome!
              </p>

              <button className="bg-[url('/images/loginBTNbg.png')] bg-contain bg-center bg-no-repeat text-white py-2 px-6 rounded-md w-full flex items-center justify-center mb-4 hover:text-black hover:bg-[url('/images/loginBTNbg2.png')] transition">
                <div className="flex items-center text-[15px]">
                  Continue with World ID
                  <span className="ml-2"> </span>
                  <img
                    src="/images/wc_logo.png"
                    alt="World ID Logo"
                    className="w-4 h-4 mr-2"
                  />
                </div>
              </button>

              {/* Divider */}
              <div className="flex items-center justify-center w-full mb-4">
                {/* Left Line */}
                <div className="flex-grow h-px bg-gray-400"></div>

                {/* OR Text */}
                <div className="text-center mx-2 text-[#1D1D1D] text-[17px] font-bold">
                  or
                </div>

                {/* Right Line */}
                <div className="flex-grow h-px bg-gray-400"></div>
              </div>

              {/* Explore as Guest */}
              <button className="bg-[url('/images/loginBTNbg2.png')] bg-contain bg-center bg-no-repeat text-black py-2 px-6 rounded-md w-full flex items-center text-[15px] hover:text-white text-left justify-center mb-4 hover:bg-[url('/images/loginBTNbg.png')] transition">
                Explore as a Guest
              </button>

              {/* Terms and Policy */}
              <p className="text-[#2D3748] text-xs text-center mt-6">
                <small>
                  By continuing you agree to our Terms of Service and Privacy
                  Policy
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .box {
          border-radius: 10px;
          padding: 1px;
          box-shadow: -3.44px -3.44px 3.44px 0px rgba(0, 0, 0, 0.25),
            3.44px 3.44px 3.44px 0px rgba(0, 0, 0, 0.25);
          position: relative;
        }
      `}</style>
    </>
  );
}