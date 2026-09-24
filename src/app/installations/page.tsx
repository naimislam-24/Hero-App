"use client";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";
import AppCard from "../components/shared/AppCard";
import { IApp } from "../types/apps-tyle";

const InstallaionsPage = () => {
  const { installedApps } = useContext(AppContext);

  return (
    <div>
      <div>
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold">Your Installed Apps</h2>
          <p className="mt-4 text-[#627382]">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* {installedApps.map((app: IApp, ind: number) => (
            <AppCard key={ind} app={app} />
            ))} */}

        {installedApps.length > 0 ? (
          <div className="grid gap-4 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto">
            {installedApps.map((app: IApp, ind: number) => (
              <AppCard key={ind} app={app} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center text-4xl font-bold mt-15 pb-50">
            No installed apps found.
          </p>
        )}
      </div>
    </div>
  );
};

export default InstallaionsPage;
