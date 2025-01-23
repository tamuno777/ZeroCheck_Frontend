"use client";

import { useState } from "react";
import Card from "./Card";
import CheckInModal from "../Check-In";

type ActiveEvent = {
  title: string;
  description: string;
  end: string;
  location: string;
};

const ActiveEvents = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const ACTIVE_EVENTS = [
    {
      title: "Blockchain Summit 2023",
      description:
        "The Blockchain Innovation Summit is a platform for blockchain enthusiasts and experts to meet and discuss the latest trends in the blockchain industry.",
      end: "2024-12-20T00:00:00.000Z",
      location: "Washington D.C.",
    },
    {
      title: "Web3 Developer Conference",
      description:
        "Annual conference bringing together developers, designers, and innovators in the Web3 ecosystem.",
      end: "2024-11-15T00:00:00.000Z",
      location: "San Francisco, CA",
    },
    {
      title: "DeFi Summit 2024",
      description:
        "Exploring the future of decentralized finance with industry leaders and pioneers.",
      end: "2024-10-30T00:00:00.000Z",
      location: "Miami, FL",
    },
    {
      title: "Crypto Security Forum",
      description:
        "Focus on blockchain security, best practices, and emerging threats in the cryptocurrency space.",
      end: "2024-09-25T00:00:00.000Z",
      location: "London, UK",
    },
  ];

  const handleCheckIn = (event: ActiveEvent) => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <Card>
        <div className="py-4 px-6 w-full">
          <h2 className="font-semibold text-xl mb-4 text-black">
            My Active Events
          </h2>

          <div className="space-y-4">
            {ACTIVE_EVENTS.map((event) => (
              <div
                key={event.title}
                className="py-2 flex justify-between items-center text-sm"
              >
                <div>
                  <h4 className="font-medium text-sm text-black">
                    {event.title}
                  </h4>
                  <p className="font-medium text-[#666666]">
                    Ends: {new Date(event.end).toDateString()}
                  </p>
                </div>
                <p className="text-black font-medium">{event.location}</p>

                <button
                  className="bg-[#EDEDED] p-3 text-black font-medium hover:bg-gray-200 transition-colors"
                  onClick={() => handleCheckIn(event)}
                >
                  Check In
                </button>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <CheckInModal
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default ActiveEvents;
