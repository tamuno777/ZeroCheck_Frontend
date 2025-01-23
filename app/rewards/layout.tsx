import SideNavigation from "../components/sideNavOne";

export default function RewardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[300px_1fr] gap-6 min-h-screen">
      <div className="">
        <SideNavigation />
      </div>
      {children}
    </div>
  );
}
