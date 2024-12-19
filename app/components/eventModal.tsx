import Image from "next/image";
import { useState } from "react";

const EventDetails: {
  img: string;
  quantity: number;
  location: string;
  price: number;
  attendees: string;
  desc: string;
  blockAssociation: string;
  tags: string[];
  currency: string;
}[] = [
  {
    img: "",
    quantity: 2,
    location: "San Francisco",
    price: 200,
    attendees: "500 / 1000",
    desc: "Join us for the biggest blockchain event of the yeaJoin us for the biggest blockchain event of the year!Join us for th",
    blockAssociation:
      "A leading organisation in the blockchain industryA leading organization in the blockchain industry..",
    tags: ["blockchain", "defi", "hackathon", "cryptocurrency"],
    currency: "WRLD",
  },
];

// Date and time fuction
const now: Date = new Date();
const formattedDate: string = now.toISOString().split("T")[0];
const options: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
  timeZoneName: "shortOffset",
};
const formattedTime: string = new Intl.DateTimeFormat("en-US", options).format(
  now
);
const [time, timeZone] = formattedTime.split(" ");

const EventModal = () => {
  const [selectedOption, setSelectedOption] = useState(2); // Default value

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="bg-white w-[80%] lg:w-[60%] mx-auto z-50 text-background my-[3%] px-10 py-4">
      {/* title and close button */}
      <div className="flex justify-between items-center font-semibold">
        <p>Blockchain Summit 2024</p>
        <button>x</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-5">
        {/* left hand side */}
        <div className="order-2 sm:order-none flex flex-col gap-4">
          {/* evant image */}
          <Image
            className="w-full h-auto "
            src="eventDp.svg"
            alt="Dp"
            width="4"
            height="4"
            priority={true}
          />
          {/* quatity */}
          <div className="mt-2">
            <p className="font-semibold">Quantity</p>
            <select
              value={selectedOption}
              onChange={handleChange}
              className="bg-transparent px-1.5 py-1.5 w-full outline-none border border-black"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
          {/* price */}
          <div>
            <p className="text-[12px]">Total Price</p>
            {EventDetails.map((event, index) => (
              <p key={index} className="text-xl">
                {event.price * selectedOption} {event.currency}
              </p>
            ))}
          </div>

          {/* submit button */}
          <button className="bg-background w-full text-center py-1.5 text-foreground text-sm font-semibold rounded">
            Purchase Tickets
          </button>
        </div>
        {/* right hand side */}
        <div className="">
          <p className="font-semibold">Event Details</p>

          {EventDetails.map((event, index) => (
            <div key={index} className="text-sm mt-3 flex flex-col gap-2.5">
              <p>
                <span className="font-semibold">Date:</span> {formattedDate}
              </p>
              <p>
                <span className="font-semibold">Time:</span> 09:00 {timeZone}{" "}
                UTC+1
              </p>
              <p>
                <span className="font-semibold">Location:</span>{" "}
                {event.location}
              </p>
              <p>
                <span className="font-semibold">Price:</span> {event.price}{" "}
                <span className="font-semibold">{event.currency}</span>
              </p>
              <p>
                <span className="font-semibold">Attendees:</span>{" "}
                {event.attendees}
              </p>
              <p>
                <span className="font-semibold">Description:</span> <br />
                {event.desc}
              </p>
              <div>
                <div className="flex gap-1.5 items-center">
                  <Image
                    className="w-6 h-6 rounded-full "
                    src="Dp.svg"
                    alt="Dp"
                    width="4"
                    height="4"
                  />
                  <span className="font-semibold">Blockchain Association:</span>
                </div>
                <p className="mt-2">{event.blockAssociation}</p>
              </div>
              {/* tags */}
              <div className="flex gap-3">
                {event.tags.map((tag, index) => (
                  <button
                    key={index}
                    className="px-1.5 py-0.5 bg-[#979797] text-[13px] rounded"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventModal;
