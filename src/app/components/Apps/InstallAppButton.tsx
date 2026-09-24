"use client";
import { AppContext } from "@/app/context/AppProvider";
import { IApp } from "@/app/types/apps-tyle";
import { useContext } from "react";
import { toast } from "react-toastify";

const InstallAppButton = ({ app }: { app: IApp }) => {
  const { installedApps, setInstalledApps } = useContext(AppContext);

  console.log(installedApps, setInstalledApps, "Hi");

  const handleInstall = () => {
    console.log("Button triger", app);
    setInstalledApps([...installedApps, app]);
    toast.success(`${app.title} installed successfully`);
  };

  return (
    <div>
      <button
        onClick={() => {
          handleInstall();
        }}
        className="btn btn-success text-white mt-4"
      >
        Install Now ({app.size} MB)
        {/* Install Now */}
      </button>
    </div>
  );
};

export default InstallAppButton;
