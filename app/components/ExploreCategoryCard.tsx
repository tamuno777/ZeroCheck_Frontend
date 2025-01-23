"use client";
import Image from "next/image";

interface ExploreCategoryCardProps {
  title: string;
  event_count: number;
  image: string;
}

const ExploreCategoryCard: React.FC<ExploreCategoryCardProps> = ({
  title,
  event_count,
  image,
}) => {
  return (
    <div
      onClick={() => console.log(`${title} clicked`)}
      className="border rounded bg-[#EDEDED] flex flex-col md:flex-row text-black justify-between items-center py-10 p-4 gap-4 cursor-pointer hover:shadow-lg transition duration-200"
    >
      {/* Text content */}
      <div className="flex flex-col content-center items-center md:items-start text-center md:text-left  md:justify-center flex-grow">
        <h3 className="font-bold capitalize ">{title}</h3>
        <p className="text-gray-400 text-sm">{event_count} Events</p>
      </div>

      {/* Image content */}
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={`${title} category`}
          width={50}
          height={50}
          objectFit="contain"
          className="rounded"
        />
      </div>
    </div>
  );
};

export default ExploreCategoryCard;
