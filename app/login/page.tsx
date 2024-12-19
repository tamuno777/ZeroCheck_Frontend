
'use client';


export default function LoginPage() {
  // const { setOpen } = useIDKit();

  return (
    <div className="flex h-screen overflow-y-hidden">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-black text-white">
         <img src="/images/frame.png" alt="" />
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center w-1/2 bg-gray-50">
        {/* Card Container */}
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
          <h2 className="text-2xl font-semibold text-center mb-6 text-[#1D1D1D]">ZeroCheck</h2>
          <p className="text-gray-600 text-center mb-6 text-[#1D1D1D]">Welcome to ZeroCheck</p>

              <button

                className="bg-black text-white py-2 px-6 rounded-md w-full flex items-center justify-center mb-4 hover:bg-gray-800 transition"
              >
                <div className="flex items-center">
                  Continue with World ID
                  <span className="ml-2"> </span>
                  <img src="/images/wc_logo.png" alt="World ID Logo" className="w-4 h-4 mr-2" />
                </div>
              </button>
            
         

          {/* Divider */}
            <div className="flex items-center justify-center w-full mb-4">
            {/* Left Line */}
            <div className="flex-grow h-px bg-gray-400"></div>
            
            {/* OR Text */}
            <div className=" text-center mx-2 text-[#1D1D1D]">OR</div>
            
            {/* Right Line */}
            <div className="flex-grow h-px bg-gray-400"></div>
          </div>

          
          
          {/* Explore as Guest */}
          <button className="text-black border border-black py-2 px-6 rounded-md w-full hover:bg-black hover:text-white transition">
            Explore as a Guest
          </button>

          {/* Terms and Policy */}
          <p className="text-[#2D3748] text-xs text-center mt-6">
            By continuing you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
