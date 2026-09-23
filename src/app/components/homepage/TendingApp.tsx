import { IApp } from "@/app/types/apps-tyle";
import AppCard from "../shared/AppCard";
import { getAllApps } from "@/app/lib/apps";
import Link from "next/link";

const TendingApp = async () => {
  const data = await getAllApps();
  console.log(data);

  return (
    <div>
      <div className="text-center mt-16">
        <h2 className="text-4xl font-bold">Tending Apps</h2>
        <p className="mt-4 text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid gap-4 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto">
        {data.slice(0, 9).map((app: IApp, ind: number) => (
          <AppCard key={ind} app={app} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link href="/apps">
          <button className="mt-12 mb-20 px-7 py-2.5 text-white font-semibold rounded-lg bg-linear-to-r from-[#6324e8] via-[#8b3ff0] to-[#b05cf0] cursor-pointer transition-all duration-300 hover:scale-105">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TendingApp;
