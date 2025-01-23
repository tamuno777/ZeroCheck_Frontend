import Image from "next/image";

interface EventCardProps {
  title: string;
  time: string;
  date: string;
  location: string;
  platform: string;
  price: string;
  currency: string;
  imageUrl: string;
}

export default function EventCard({
  title,
  time,
  date,
  location,
  platform,
  price,
  currency,
  imageUrl,
}: EventCardProps) {
  return (
    <div className="bg-[#EDEDED] p-5 rounded-md">
      <div className="">
        <Image
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
          width={400}
          height={600}
        />
      </div>
      <div className="mt-3 space-y-4 text-black">
        <div className="space-y-1 text-black">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-xs text-black">{time}</p>
          <p className="text-xs">{date}</p>
          <p className="text-xs italic font-semibold">
            {location} | {platform}
          </p>
          <p className="text-xs font-black">
            {price} {currency}
          </p>
        </div>
        <button className="rounded-lg bg-black px-4 py-2 text-xs font-medium text-white hover:bg-gray-800">
          View Event
        </button>
      </div>
    </div>
  );
}
