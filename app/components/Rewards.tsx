import { EVENTS, REWARD_DATA, CERTIFICATIONS } from "@/constants/constants";
import NFTDashboard from "../components/nft_events_rewards/NftEventsRewards";

const MarketPlace: {
  title: string;
  desc: string;
  price: number;
  currency: string;
  buttonText: string;
}[] = [
  {
    title: "VIP Event Access",
    desc: "Get VIP access to exclusive blockchain events",
    price: 200,
    currency: "wrld",
    buttonText: "Redeem",
  },
  {
    title: "VIP Event Access",
    desc: "Get VIP access to exclusive blockchain events",
    price: 200,
    currency: "wrld",
    buttonText: "Redeem",
  },
  {
    title: "VIP Event Access",
    desc: "Get VIP access to exclusive blockchain events",
    price: 200,
    currency: "wrld",
    buttonText: "Redeem",
  },
  {
    title: "VIP Event Access",
    desc: "Get VIP access to exclusive blockchain events",
    price: 200,
    currency: "wrld",
    buttonText: "Redeem",
  },
  {
    title: "VIP Event Access",
    desc: "Get VIP access to exclusive blockchain events",
    price: 200,
    currency: "wrld",
    buttonText: "Redeem",
  },
  {
    title: "VIP Event Access",
    desc: "Get VIP access to exclusive blockchain events",
    price: 200,
    currency: "wrld",
    buttonText: "Redeem",
  },
  {
    title: "VIP Event Access",
    desc: "Get VIP access to exclusive blockchain events",
    price: 200,
    currency: "wrld",
    buttonText: "Redeem",
  },
  {
    title: "VIP Event Access",
    desc: "Get VIP access to exclusive blockchain events",
    price: 200,
    currency: "wrld",
    buttonText: "Redeem",
  },
];

function Rewards() {
  return (
    <div className="flex flex-col gap-4 my-3 pr-6">
      <p>Rewards</p>
      <div className="bg-white flex flex-col gap-2 rounded-xl px-5 py-3 text-black font-semibold ">
        <p>Token Balance</p>
        <h2 className="text-4xl uppercase ">4,000 Wrld</h2>
        <p className="text-xs font-light">≈ $125.00 USD</p>
      </div>
      {/* nft reward/ events */}
      <NFTDashboard
        events={EVENTS}
        rewards={REWARD_DATA}
        certifications={CERTIFICATIONS}
      />
      {/* Reward Marketplace */}
      <div className="bg-white rounded-xl px-5 py-5 text-black ">
        <p className="font-semibold text-lg">Reward Marketplace</p>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {MarketPlace.map((market, index) => (
            <div
              key={index}
              className="text-center rounded-md bg-[#EDEDED] px-3 py-5 flex flex-col gap-3 items-center"
            >
              <p className="font-semibold text-xl">{market.title}</p>
              <p className="text-sm">{market.desc}</p>
              <p className="mt-1 uppercase font-bold">
                {market.price} {market.currency}
              </p>
              <button className="mt-1 px-3 py-1.5 rounded-xl bg-black text-white text-sm font-light">
                {market.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rewards;
