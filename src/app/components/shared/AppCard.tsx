import { IApp } from "@/app/types/apps-tyle";
import Image from "next/image";
import Link from "next/link";

interface TAppProps {
  app: IApp;
}

const AppCard = ({ app }: TAppProps) => {
  return (
    <>
      <div className="card bg-base-100 shadow-md border border-gray-200 hover:shadow-xl transition duration-300">
        <figure className="px-5 pt-5">
          <Image
            src={app.image}
            alt={app.title}
            width={120}
            height={120}
            className="w-28 h-28 rounded-2xl object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold"> {app.title} </h2>{" "}
          <p className="text-gray-500 text-sm"> {app.companyName} </p>{" "}
          <p className="text-gray-600 text-sm line-clamp-2 mt-2">
            {app.description}
          </p>
          <div className="grid grid-cols-3 gap-3 mt-4 text-center">
            <div>
              <p className="text-lg font-bold text-green-600">
                {app.ratingAvg}
              </p>
              <p className="text-xs text-gray-500">Rating</p>{" "}
            </div>
            <div>
              <p className="text-lg font-bold text-blue-600">{app.downloads}</p>
              <p className="text-xs text-gray-500">Downloads</p>{" "}
            </div>
            <div>
              <p className="text-lg font-bold text-purple-600">{app.reviews}</p>
              <p className="text-xs text-gray-500">Reviews</p>{" "}
            </div>
          </div>
          <div className="card-actions mt-5">
            <Link href={`/apps/${app.id}`}>
              <button className="btn btn-primary w-full">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppCard;
