import Card from "./Card";

const RecentActivities = () => {
  const ACTIVITIES = [
    {
      actionType: "Buy",
      title: "Airdrop",
      amount: 200,
      timestamp: "2024-12-20T00:00:00.000Z",
    },
    {
      actionType: "Sell",
      title: "Airdrop",
      amount: 200,
      timestamp: "2024-12-20T00:00:00.000Z",
    },
    {
      actionType: "Buy",
      title: "Airdrop",
      amount: 200,
      timestamp: "2024-12-20T00:00:00.000Z",
    },
    {
      actionType: "Sell",
      title: "Airdrop",
      amount: 200,
      timestamp: "2024-12-20T00:00:00.000Z",
    },
  ];

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <Card>
      <div className="py-4 px-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-xl text-black">
            Recent Activities
          </h2>

          <p className="text-[#00000066] text-xs">View All</p>
        </div>

        <div className="space-y-4">
          {ACTIVITIES.map((activity, index) => (
            <div
              key={index}
              className="py-2 flex justify-between items-center text-sm font-medium"
            >
              <div className="flex gap-8 items-center">
                {activity.actionType === "Buy" ? (
                  <svg
                    className="w-7 h-7"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="15"
                      cy="15"
                      r="15"
                      transform="rotate(180 15 15)"
                      fill="#219653"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M15.3432 7.84342V21.1768M15.3432 21.1768L21.1765 15.3434M15.3432 21.1768L9.50985 15.3434"
                      stroke="#219653"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    width="30"
                    height="29"
                    viewBox="0 0 30 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="15"
                      cy="14.5"
                      rx="15"
                      ry="14.5"
                      fill="#EB5757"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M8.48193 13.25L12.2319 17L19.7319 9.5"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

                <p className="text-black">{activity.title}</p>
              </div>
              <p
                className={
                  activity.actionType === "Buy"
                    ? "text-[#219653]"
                    : "text-[#ff0000]"
                }
              >
                <span>{activity.actionType === "Buy" ? "+WRLD" : "-WRLD"}</span>{" "}
                {activity.amount}
              </p>

              <p className="text-black">{formatTime(activity.timestamp)}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default RecentActivities;
