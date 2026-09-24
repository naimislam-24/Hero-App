import InstallAppButton from "@/app/components/Apps/InstallAppButton";
import { getAllApps } from "@/app/lib/apps";
import { IApp } from "@/app/types/apps-tyle";
import Image from "next/image";

interface TAppDetailsProps {
  params: {
    appId: string;
  };
}

// *****************************************************
export async function generateStaticParams() {
  const allApps = await getAllApps();
  const appIds = allApps.map((app: IApp) => {
    return { appId: app.id.toString() };
  });
  return appIds;
}

const AppDetails = async ({ params }: TAppDetailsProps) => {
  const { appId } = await params;
  const allApps = await getAllApps();
  const app = allApps.find((app: IApp) => String(app.id) === appId);

  // console.log(allApps);

  // console.log(app, "app details");

  return (
    <>
      <div className="min-h-screen bg-[#f5f6f7] py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 border-b border-gray-300 pb-6">
            <div className="shrink-0">
              <div className="bg-white p-5 shadow-sm">
                <Image
                  src={app.image}
                  alt={app.title}
                  width={160}
                  height={160}
                  className="w-36 h-36 md:w-40 md:h-40 object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-[#0f2438]">{app.title}</h1>
              <p className="mt-1 text-sm text-gray-500">
                Developed by{" "}
                <span className="text-purple-600 font-medium">
                  {app.companyName}
                </span>
              </p>
              <div className="divider my-3"></div>
              <div className="flex flex-wrap gap-10">
                <div>
                  <div className="text-2xl text-green-500 mb-1" />
                  <p className="text-xs text-gray-500">Downloads</p>
                  <p className="text-xl font-bold text-[#0f2438]">
                    {app.downloads}
                  </p>
                </div>
                <div>
                  <div className="text-2xl text-orange-400 mb-1" />
                  <p className="text-xs text-gray-500">Average Ratings</p>
                  <p className="text-xl font-bold text-[#0f2438]">
                    {app.ratingAvg}
                  </p>
                </div>
                <div>
                  <div className="text-2xl text-purple-500 mb-1" />
                  <p className="text-xs text-gray-500">Total Reviews</p>
                  <p className="text-xl font-bold text-[#0f2438]">
                    {app.reviews}
                  </p>
                </div>
              </div>
              <InstallAppButton app={app} />
            </div>
          </div>
          <div className="border-b border-gray-300 py-5">
            <h2 className="font-bold text-[#0f2438] mb-4">Ratings</h2>
            <div className="space-y-3">
              {app.ratings
                .slice()
                .reverse()
                .map((rating: any) => {
                  return (
                    <div key={rating.name} className="flex items-center gap-3">
                      <span className="text-xs text-gray-500 w-8">
                        {rating.name}
                      </span>
                      <div className="flex-1 bg-gray-200 h-3 rounded-sm overflow-hidden">
                        <div
                          className="h-full bg-orange-500"
                          style={
                            {
                              // width: `${percentage}%`,
                            }
                          }
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500 w-20 text-right">
                        {rating.count.toLocaleString()}
                      </span>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="py-6">
            <h2 className="font-bold text-[#0f2438] mb-4">Description</h2>
            <p className="text-sm leading-6 text-gray-500">{app.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDetails;
