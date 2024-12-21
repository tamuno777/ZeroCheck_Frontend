import Card from "./dashboard/Card";
import ExploreCategoryCard from "./ExploreCategoryCard";
const exploreData = [
  {
    title: "arts & culture",
    event_count: 10,
    image: "/icons/theater_1544843.png",
  },
  {
    title: "trading",
    event_count: 10,
    image: "/icons/stock-market_2979900.png",
  },
  {
    title: "fashion & design",
    event_count: 10,
    image: "/icons/spanish-woman_5866183.png",
  },
  {
    title: "music",
    event_count: 10,
    image: "/icons/music_2753286.png",
  },
  {
    title: "blockchain",
    event_count: 10,
    image: "/icons/bitcoin_1876985.png",
  },
  {
    title: "government",
    event_count: 10,
    image: "/icons/leader_1470875.png",
  },
  {
    title: "investment",
    event_count: 10,
    image: "/icons/revenue_2654565.png",
  },
  {
    title: "community",
    event_count: 10,
    image: "/icons/group_4632621.png",
  },
  {
    title: "school & education",
    event_count: 10,
    image: "/icons/book_6551068.png",
  },
  {
    title: "banking and finance",
    event_count: 10,
    image: "/icons/law_3206857.png",
  },
  {
    title: "fitness & sports",
    event_count: 10,
    image: "/icons/exercise_2860928.png",
  },
  {
    title: "tech & science",
    event_count: 10,
    image: "/icons/technology_3715280.png",
  },
];
const ExploreCategory = () => {
  return (
    <Card>
      <div className="py-4 px-6 space-y-4">
        <h3 className="text-xl text-black font-bold capitalize ">
          {" "}
          Explore categories
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
          {exploreData.map((data, index) => {
            return (
              <ExploreCategoryCard
                key={index}
                title={data.title}
                event_count={data.event_count}
                image={data.image}
              />
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default ExploreCategory;
