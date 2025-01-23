import Image from "next/image";
import Card from "./Card";
import { poppins } from "@/app/layout";
import ActiveEvents from "./ActiveEvents";
import RecentActivities from "./RecentActivities";
import UpcomingEvents from "./UpcomingEvents";
import SideNavigation from "../sideNavOne";
import ExploreCategory from "@/app/components/ExploreCategory";

const Dashboard = () => {
  return (
    <div className={`flex ${poppins.className}`}>
      <SideNavigation />
      <section
        className={`bg-[#EDEDED] min-h-screen h-screen overflow-auto overscroll-none py-4 px-8 relative w-full`}
      >
        <div className="mx-auto max-w-2xl absolute left-1/2 top-0 -translate-x-1/2 z-0">
          <Image
            src="/images/background.png"
            alt="Background"
            width={960}
            height={540}
            className="w-full"
            priority
          />
        </div>
        <header className="flex justify-between items-center">
          <div className="flex gap-3">
            <div className="relative">
              <svg
                className="absolute w-4 h-4 left-6 top-1/2 -translate-y-1/2"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0002 19.0002L14.6572 14.6572M14.6572 14.6572C15.4001 13.9143 15.9894 13.0324 16.3914 12.0618C16.7935 11.0911 17.0004 10.0508 17.0004 9.00021C17.0004 7.9496 16.7935 6.90929 16.3914 5.93866C15.9894 4.96803 15.4001 4.08609 14.6572 3.34321C13.9143 2.60032 13.0324 2.01103 12.0618 1.60898C11.0911 1.20693 10.0508 1 9.00021 1C7.9496 1 6.90929 1.20693 5.93866 1.60898C4.96803 2.01103 4.08609 2.60032 3.34321 3.34321C1.84288 4.84354 1 6.87842 1 9.00021C1 11.122 1.84288 13.1569 3.34321 14.6572C4.84354 16.1575 6.87842 17.0004 9.00021 17.0004C11.122 17.0004 13.1569 16.1575 14.6572 14.6572Z"
                  stroke="black"
                  strokeOpacity="0.5"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                type="text"
                placeholder="Search Event"
                className="rounded-full py-3 pl-16 pr-10 text-sm bg-white"
              />
            </div>
            <button className="px-10 py-3 bg-black text-white rounded-full text-sm font-semibold">
              Create Event
            </button>
          </div>

          <div className="flex gap-6 items-center">
            <svg
              width="26"
              height="29"
              viewBox="0 0 26 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.707 18.293L23 15.586V12C22.9969 9.52184 22.075 7.13285 20.4126 5.29498C18.7502 3.45712 16.4654 2.30093 14 2.05V0H12V2.05C9.53457 2.30093 7.24976 3.45712 5.58737 5.29498C3.92498 7.13285 3.0031 9.52184 3 12V15.586L0.293 18.293C0.105451 18.4805 5.66374e-05 18.7348 0 19V22C0 22.2652 0.105357 22.5196 0.292893 22.7071C0.48043 22.8946 0.734784 23 1 23H8V23.777C7.97825 25.0456 8.4254 26.2777 9.25578 27.237C10.0862 28.1964 11.2414 28.8156 12.5 28.976C13.1952 29.0449 13.8971 28.9676 14.5606 28.749C15.2241 28.5304 15.8345 28.1753 16.3525 27.7066C16.8706 27.2379 17.2848 26.666 17.5685 26.0277C17.8522 25.3893 17.9992 24.6986 18 24V23H25C25.2652 23 25.5196 22.8946 25.7071 22.7071C25.8946 22.5196 26 22.2652 26 22V19C25.9999 18.7348 25.8946 18.4805 25.707 18.293ZM16 24C16 24.7956 15.6839 25.5587 15.1213 26.1213C14.5587 26.6839 13.7956 27 13 27C12.2044 27 11.4413 26.6839 10.8787 26.1213C10.3161 25.5587 10 24.7956 10 24V23H16V24ZM24 21H2V19.414L4.707 16.707C4.89455 16.5195 4.99994 16.2652 5 16V12C5 9.87827 5.84285 7.84344 7.34315 6.34315C8.84344 4.84285 10.8783 4 13 4C15.1217 4 17.1566 4.84285 18.6569 6.34315C20.1571 7.84344 21 9.87827 21 12V16C21.0001 16.2652 21.1054 16.5195 21.293 16.707L24 19.414V21Z"
                fill="#343434"
              />
              <circle cx="20.5" cy="8" r="4.5" fill="#D43791" />
            </svg>

            <Card>
              <div className="flex gap-8 items-center w-[220px]">
                <Image
                  src="/images/user.png"
                  alt="User"
                  width={40}
                  height={40}
                />

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm text-black">
                      Jane Doe
                    </h4>{" "}
                    <span className="bg-[#219653] rounded-full w-3 h-3"></span>
                  </div>
                  <p className="font-medium text-xs text-black">
                    0x1234...5678
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </header>
        <main className="relative z-10">
          <section className="py-4 mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <div className="relative p-2 flex flex-col gap-4">
                <div className="absolute top-2 right-2 w-10 h-10">
                  <svg
                    className="w-full"
                    width="45"
                    height="44"
                    viewBox="0 0 45 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="45"
                      height="43.9773"
                      rx="8"
                      fill="#2F80ED"
                      fillOpacity="0.2"
                    />
                    <path
                      d="M32.0625 16.1482V13.8119C32.0625 12.5234 30.9903 11.4756 29.6719 11.4756H14.1328C12.1558 11.4756 10.5469 13.0479 10.5469 14.98V28.9978C10.5469 31.5689 12.6913 32.5022 14.1328 32.5022H32.0625C33.3809 32.5022 34.4531 31.4544 34.4531 30.1659V18.4845C34.4531 17.196 33.3809 16.1482 32.0625 16.1482ZM29.6719 26.6615H27.2812V21.9889H29.6719V26.6615ZM14.1328 16.1482C13.825 16.1347 13.5344 16.0058 13.3215 15.7882C13.1086 15.5706 12.9898 15.2811 12.9898 14.98C12.9898 14.6789 13.1086 14.3895 13.3215 14.1719C13.5344 13.9543 13.825 13.8253 14.1328 13.8119H29.6719V16.1482H14.1328Z"
                      fill="#3380FF"
                    />
                  </svg>
                </div>
                <h5 className="font-medium text-[#202224] text-opacity-70 text-sm">
                  Reward Balance
                </h5>
                <h4 className="text-[#202224] text-2xl font-bold">
                  4,000 WRLD
                </h4>

                <div className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 18L18.29 15.71L13.41 10.83L9.41 14.83L2 7.41L3.41 6L9.41 12L13.41 8L19.71 14.29L22 12V18H16Z"
                      fill="#F93C65"
                    />
                  </svg>

                  <p className="font-semibold text-sm text-black">
                    <span className="text-[#F93C65]">-200WRLD</span> This Month
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="relative p-2 flex flex-col gap-4">
                <div className="absolute top-2 right-2 w-10 h-10">
                  <svg
                    className="w-full"
                    width="46"
                    height="45"
                    viewBox="0 0 46 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.21"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.5 22.5V27.75C0.5 37.2769 8.22309 45 17.75 45H23H28.25C37.7769 45 45.5 37.2769 45.5 27.75V22.5V17.25C45.5 7.72309 37.7769 0 28.25 0H23H17.75C8.22309 0 0.5 7.72309 0.5 17.25V22.5Z"
                      fill="#4AD991"
                    />
                    <path
                      d="M14.8333 30.6667H32.3333C32.9777 30.6667 33.5 31.189 33.5 31.8333C33.5 32.4777 32.9777 33 32.3333 33H13.6667C13.0223 33 12.5 32.4777 12.5 31.8333V13.1667C12.5 12.5223 13.0223 12 13.6667 12C14.311 12 14.8333 12.5223 14.8333 13.1667V30.6667Z"
                      fill="#4AD991"
                    />
                    <path
                      opacity="0.5"
                      d="M19.1845 25.631C18.7439 26.1011 18.0056 26.1249 17.5355 25.6842C17.0654 25.2435 17.0416 24.5052 17.4823 24.0351L21.8573 19.3685C22.2835 18.9139 22.9917 18.8744 23.4657 19.2789L26.9187 22.2255L31.4177 16.5268C31.817 16.0211 32.5506 15.9348 33.0563 16.334C33.5621 16.7333 33.6484 17.4669 33.2491 17.9726L27.9991 24.6226C27.589 25.1421 26.8295 25.2168 26.3261 24.7872L22.7981 21.7766L19.1845 25.631Z"
                      fill="#4AD991"
                    />
                  </svg>
                </div>
                <h5 className="font-medium text-[#202224] text-opacity-70 text-sm">
                  Total Events Attended
                </h5>
                <h4 className="text-[#202224] text-2xl font-bold">50</h4>

                <div className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
                      fill="#00B69B"
                    />
                  </svg>

                  <p className="font-semibold text-sm text-black">
                    <span className="text-[#00B69B]">+20</span> This Month
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="relative p-2 flex flex-col gap-4">
                <div className="absolute top-2 right-2 w-10 h-10">
                  <svg
                    className="w-full"
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.21"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 22.5V27.75C0 37.2769 7.72309 45 17.25 45H22.5H27.75C37.2769 45 45 37.2769 45 27.75V22.5V17.25C45 7.72309 37.2769 0 27.75 0H22.5H17.25C7.72309 0 0 7.72309 0 17.25V22.5Z"
                      fill="#8280FF"
                    />
                    <path
                      opacity="0.587821"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.5 17.5C15.5 19.7091 17.2909 21.5 19.5 21.5C21.7091 21.5 23.5 19.7091 23.5 17.5C23.5 15.2909 21.7091 13.5 19.5 13.5C17.2909 13.5 15.5 15.2909 15.5 17.5ZM25.5 21.5002C25.5 23.1571 26.8431 24.5002 28.5 24.5002C30.1569 24.5002 31.5 23.1571 31.5 21.5002C31.5 19.8434 30.1569 18.5002 28.5 18.5002C26.8431 18.5002 25.5 19.8434 25.5 21.5002Z"
                      fill="#8280FF"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.4833 23.5C14.7619 23.5 10.8883 25.9265 10.5007 30.6992C10.4795 30.9592 10.9767 31.5 11.2275 31.5H27.7467C28.4979 31.5 28.5096 30.8955 28.4979 30.7C28.2049 25.7932 24.2712 23.5 19.4833 23.5ZM33.9561 31.5001L30.1001 31.5001C30.1001 29.2492 29.3564 27.1719 28.1013 25.5007C31.5078 25.538 34.2893 27.2603 34.4986 30.9001C34.507 31.0467 34.4986 31.5001 33.9561 31.5001Z"
                      fill="#8280FF"
                    />
                  </svg>
                </div>
                <h5 className="font-medium text-[#202224] text-opacity-70 text-sm">
                  Upcoming Event
                </h5>
                <h4 className="text-[#202224] text-2xl font-bold">3</h4>

                <div className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 18L18.29 15.71L13.41 10.83L9.41 14.83L2 7.41L3.41 6L9.41 12L13.41 8L19.71 14.29L22 12V18H16Z"
                      fill="#F93C65"
                    />
                  </svg>

                  <p className="font-semibold text-sm text-black">
                    Next event in 20hrs
                  </p>
                </div>
              </div>
            </Card>
            <Card>
              <div className="relative p-2 flex flex-col gap-4">
                <div className="absolute top-2 right-2 w-10 h-10">
                  <svg
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.5 23V28.25C0.5 37.7769 8.22309 45.5 17.75 45.5H23H28.25C37.7769 45.5 45.5 37.7769 45.5 28.25V23V17.75C45.5 8.22309 37.7769 0.5 28.25 0.5H23H17.75C8.22309 0.5 0.5 8.22309 0.5 17.75V23Z"
                      fill="#FF9066"
                    />
                    <path
                      opacity="0.78"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.9734 18.357C21.9885 18.1616 22.1514 18.0107 22.3473 18.0107H22.6607C22.8534 18.0107 23.0147 18.1567 23.0338 18.3484L23.5001 23.0107L26.8111 24.9028C26.928 24.9695 27.0001 25.0938 27.0001 25.2284V25.5198C27.0001 25.767 26.765 25.9466 26.5264 25.8816L21.7991 24.5923C21.6255 24.545 21.51 24.3811 21.5238 24.2017L21.9734 18.357Z"
                      fill="#FF9066"
                    />
                    <path
                      opacity="0.901274"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.5413 11.7377C17.3432 11.5016 16.9608 11.592 16.8893 11.8917L15.6642 17.0279C15.6059 17.2721 15.7995 17.5035 16.0502 17.4893L21.3337 17.1898C21.6419 17.1724 21.7982 16.8109 21.5998 16.5744L20.2487 14.9643C21.1224 14.6657 22.0488 14.5098 23 14.5098C27.6944 14.5098 31.5 18.3154 31.5 23.0098C31.5 27.7042 27.6944 31.5098 23 31.5098C18.3056 31.5098 14.5 27.7042 14.5 23.0098C14.5 22.2217 14.6067 21.4499 14.8148 20.708L12.8891 20.1679C12.6356 21.0717 12.5 22.0249 12.5 23.0098C12.5 28.8088 17.201 33.5098 23 33.5098C28.799 33.5098 33.5 28.8088 33.5 23.0098C33.5 17.2108 28.799 12.5098 23 12.5098C21.5413 12.5098 20.1522 12.8072 18.8898 13.3448L17.5413 11.7377Z"
                      fill="#FF9066"
                    />
                  </svg>
                </div>
                <h5 className="font-medium text-[#202224] text-opacity-70 text-sm">
                  Hosted Event
                </h5>
                <h4 className="text-[#202224] text-2xl font-bold">300</h4>

                <div className="flex items-center">
                  <p className="font-semibold text-sm text-black">
                    Next event in 20hrs
                  </p>
                </div>
              </div>
            </Card>
          </section>

          <section className="py-4 mb-4 grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="col-span-3">
              <ActiveEvents />
            </div>
            <div className="col-span-2">
              <RecentActivities />
            </div>
          </section>

          <UpcomingEvents />

          <ExploreCategory />
        </main>{" "}
      </section>
    </div>
  );
};

export default Dashboard;
