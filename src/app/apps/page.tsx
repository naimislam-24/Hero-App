import AppCard from "../components/shared/AppCard";
import { getAllApps } from "../lib/apps";
import { IApp } from "../types/apps-tyle";

const AppsPage = async () => {
  const data = await getAllApps();

  return (
    <div>
      <div>
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold">Our All Applications</h2>
          <p className="mt-4 text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="grid gap-4 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto">
          {data.map((app: IApp, ind: number) => (
            <AppCard key={ind} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppsPage;
