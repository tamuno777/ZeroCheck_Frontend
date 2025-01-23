"use client";
import { useState, useEffect, useCallback } from "react";
import { QRCodeSVG } from "qrcode.react";

interface CheckInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function CheckInModal({ isOpen, onClose }: CheckInModalProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 50,
    total: 2 * 3600 + 30 * 60 + 50,
  });

  const [qrValue, setQrValue] = useState("");

  // Format time values to display with leading zeros
  const formatTimeValue = useCallback((value: number) => {
    return value.toString().padStart(2, "0");
  }, []);

  // Format the complete time string
  const formatTimeString = useCallback(
    (time: typeof timeLeft) => {
      return `${formatTimeValue(time.hours)}:${formatTimeValue(
        time.minutes
      )}:${formatTimeValue(time.seconds)}`;
    },
    [formatTimeValue]
  );

  // Generate new QR code value
  const generateQRValue = useCallback((timestamp: number) => {
    const random = Math.floor(Math.random() * 1000);
    return `https://blockchain-summit-2023.com/check-in/${timestamp}-${random}`;
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    // Initialize QR code
    setQrValue(generateQRValue(Date.now()));

    // Set up countdown timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        // Calculate new total seconds
        const newTotal = prev.total - 1;

        if (newTotal <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0, total: 0 };
        }

        // Calculate new hours, minutes, seconds
        const hours = Math.floor(newTotal / 3600);
        const minutes = Math.floor((newTotal % 3600) / 60);
        const seconds = newTotal % 60;

        // Update QR code every 30 seconds
        if (newTotal % 30 === 0) {
          setQrValue(generateQRValue(Date.now()));
        }

        return { hours, minutes, seconds, total: newTotal };
      });
    }, 1000);

    // Cleanup timer on unmount or when modal closes
    return () => {
      clearInterval(timer);
      // Reset timer when modal closes
      setTimeLeft({
        hours: 2,
        minutes: 30,
        seconds: 50,
        total: 2 * 3600 + 30 * 60 + 50,
      });
    };
  }, [isOpen, generateQRValue]);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 text-black bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-[550px] relative">
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">
              Check In to Blockchain Summit 2023
            </h2>
            <button
              onClick={onClose}
              className="hover:bg-gray-100 p-2 rounded-full transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-5">
              <svg
                width="19"
                height="21"
                viewBox="0 0 19 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.28 12.672C4.9808 12.672 4.73018 12.5706 4.52813 12.3679C4.32608 12.1651 4.2247 11.9145 4.224 11.616C4.2233 11.3175 4.32467 11.0669 4.52813 10.8641C4.73158 10.6614 4.98221 10.56 5.28 10.56C5.57779 10.56 5.82877 10.6614 6.03293 10.8641C6.23709 11.0669 6.33811 11.3175 6.336 11.616C6.33389 11.9145 6.23251 12.1655 6.03187 12.3689C5.83123 12.5724 5.58061 12.6734 5.28 12.672ZM9.504 12.672C9.2048 12.672 8.95418 12.5706 8.75213 12.3679C8.55008 12.1651 8.4487 11.9145 8.448 11.616C8.4473 11.3175 8.54867 11.0669 8.75213 10.8641C8.95559 10.6614 9.20621 10.56 9.504 10.56C9.80179 10.56 10.0528 10.6614 10.2569 10.8641C10.4611 11.0669 10.5621 11.3175 10.56 11.616C10.5579 11.9145 10.4565 12.1655 10.2559 12.3689C10.0552 12.5724 9.80461 12.6734 9.504 12.672ZM13.728 12.672C13.4288 12.672 13.1782 12.5706 12.9761 12.3679C12.7741 12.1651 12.6727 11.9145 12.672 11.616C12.6713 11.3175 12.7727 11.0669 12.9761 10.8641C13.1796 10.6614 13.4302 10.56 13.728 10.56C14.0258 10.56 14.2768 10.6614 14.4809 10.8641C14.6851 11.0669 14.7861 11.3175 14.784 11.616C14.7819 11.9145 14.6805 12.1655 14.4799 12.3689C14.2792 12.5724 14.0286 12.6734 13.728 12.672ZM2.112 21.12C1.5312 21.12 1.03418 20.9134 0.620928 20.5001C0.20768 20.0869 0.000704 19.5895 0 19.008V4.224C0 3.6432 0.206976 3.14618 0.620928 2.73293C1.03488 2.31968 1.5319 2.1127 2.112 2.112H3.168V0H5.28V2.112H13.728V0H15.84V2.112H16.896C17.4768 2.112 17.9742 2.31898 18.3881 2.73293C18.8021 3.14688 19.0087 3.6439 19.008 4.224V19.008C19.008 19.5888 18.8014 20.0862 18.3881 20.5001C17.9749 20.9141 17.4775 21.1207 16.896 21.12H2.112ZM2.112 19.008H16.896V8.448H2.112V19.008ZM2.112 6.336H16.896V4.224H2.112V6.336Z"
                  fill="black"
                />
              </svg>

              <span>2023-08-10 - 2023-08-15</span>
            </div>

            <div className="flex items-center gap-5">
              <svg
                width="19"
                height="21"
                viewBox="0 0 26 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.9817 4.74835C20.8234 6.94453 19.1943 8.63635 17.4177 8.63635C15.6411 8.63635 14.0092 6.94507 13.8537 4.74835C13.6917 2.46361 15.2776 0.860352 17.4177 0.860352C19.5577 0.860352 21.1437 2.50519 20.9817 4.74835Z"
                  stroke="black"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.4164 12.0928C13.8972 12.0928 10.5131 13.8408 9.66525 17.2449C9.55293 17.6953 9.83535 18.1408 10.2981 18.1408H24.5352C24.998 18.1408 25.2788 17.6953 25.1681 17.2449C24.3203 13.7862 20.9361 12.0928 17.4164 12.0928Z"
                  stroke="black"
                  stroke-width="1.6"
                  stroke-miterlimit="10"
                />
                <path
                  d="M10.0718 5.71665C9.94546 7.47057 8.62894 8.85189 7.20982 8.85189C5.7907 8.85189 4.47202 7.47111 4.34782 5.71665C4.21876 3.89199 5.50018 2.58789 7.20982 2.58789C8.91946 2.58789 10.2009 3.92547 10.0718 5.71665Z"
                  stroke="black"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.3965 12.2003C9.42183 11.7538 8.34831 11.582 7.21053 11.582C4.40253 11.582 1.69713 12.9779 1.01943 15.6968C0.930328 16.0565 1.15605 16.4123 1.52541 16.4123H7.58853"
                  stroke="black"
                  stroke-width="1.6"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
              </svg>
              <span>San Francisco Convention Center</span>
            </div>

            <div className="flex items-center gap-5">
              <svg
                width="19"
                height="21"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.4 10.3C8.72548 10.3 9.8 9.22548 9.8 7.9C9.8 6.57452 8.72548 5.5 7.4 5.5C6.07452 5.5 5 6.57452 5 7.9C5 9.22548 6.07452 10.3 7.4 10.3Z"
                  stroke="black"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.4 1.5C5.70261 1.5 4.07475 2.17428 2.87452 3.37452C1.67428 4.57475 1 6.20261 1 7.9C1 9.4136 1.3216 10.404 2.2 11.5L7.4 17.5L12.6 11.5C13.4784 10.404 13.8 9.4136 13.8 7.9C13.8 6.20261 13.1257 4.57475 11.9255 3.37452C10.7253 2.17428 9.09739 1.5 7.4 1.5Z"
                  stroke="black"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Capacity: 1000</span>
            </div>

            <div className="flex items-center gap-5">
              <svg
                width="19"
                height="21"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.2 4.5H8.8V6.1H7.2V4.5ZM7.2 7.7H8.8V12.5H7.2V7.7ZM8 0.5C3.584 0.5 0 4.084 0 8.5C0 12.916 3.584 16.5 8 16.5C12.416 16.5 16 12.916 16 8.5C16 4.084 12.416 0.5 8 0.5ZM8 14.9C4.472 14.9 1.6 12.028 1.6 8.5C1.6 4.972 4.472 2.1 8 2.1C11.528 2.1 14.4 4.972 14.4 8.5C14.4 12.028 11.528 14.9 8 14.9Z"
                  fill="black"
                />
              </svg>
              <span>Join us for the biggest blockchain event of the year!</span>
            </div>
          </div>

          <div className="space-y-4 text-center">
            <h3 className="text-xl">Time Left</h3>
            <div className="text-4xl font-mono tabular-nums">
              {formatTimeString(timeLeft)}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <QRCodeSVG
                value={qrValue}
                size={200}
                level="L"
                className="border-8 border-white"
              />
              {/* Add a subtle animation when QR code updates */}
              <div
                className="absolute inset-0 bg-white/30 animate-pulse"
                style={{ animationDuration: "0.5s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckInModal;
