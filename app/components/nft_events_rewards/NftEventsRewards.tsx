"use client";

import { useState } from "react";
import Image from "next/image";
import { formatDate } from "@/utils/format-date";
import { Events, NFTCertification, Reward } from "@/@types/NftEventsRewards";

interface NFTDashboardProps {
  events: Events[];
  rewards: Reward[];
  certifications: NFTCertification[];
}

export default function NftEventsRewards({
  events,
  rewards,
  certifications,
}: NFTDashboardProps) {
  const [activeTab, setActiveTab] = useState("Token Rewards");

  const tabs = ["Token Rewards", "NFT Certificatons", "Event Badges"];

  return (
    <div className="max-w-5xl rounded-lg p-4 bg-gray-300">
      <div className="flex mb-4 gap-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab ? "font-semibold" : "font-normal"
            } text-black`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-2">
        {activeTab === "Token Rewards" && (
          <div className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Rewards
            </h2>
            {rewards.length > 0 ? (
              <div className="space-y-4">
                {rewards.map((reward, index) => (
                  <div
                    key={`${reward.type}-${index}`}
                    className="grid grid-cols-3 gap-4 items-center hover:bg-gray-100"
                  >
                    <div className="space-y-1">
                      <p className="font-medium text-gray-900">{reward.type}</p>
                      <p className="text-sm text-gray-500">
                        {formatDate(reward.date)}
                      </p>
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900">
                        {reward.eventName}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-black">
                        +{reward.amount} {reward.currency}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">No rewards</p>
            )}
          </div>
        )}

        {activeTab === "NFT Certificatons" && (
          <div className="space-y-6 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900">
              NFT Certifications
            </h2>
            {certifications.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex flex-col items-center">
                    <Image
                      src={cert.image}
                      alt={cert.id}
                      width={180}
                      height={180}
                    />
                    <h3 className="mt-4 font-medium text-gray-900">
                      {cert.title}
                    </h3>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">No certifications</p>
            )}
          </div>
        )}

        {activeTab === "Event Badges" && (
          <div className="space-y-6 rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900">NFT Events</h2>
            {events.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="group bg-gray-100 rounded-lg overflow-hidden p-3 cursor-pointer"
                  >
                    <div className="relative rounded-lg overflow-hidden p-1">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={300}
                        height={300}
                        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-2">
                      <h3 className="font-medium text-gray-900">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {formatDate(event.date)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">No badges</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
