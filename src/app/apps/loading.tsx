import React from "react";

const loading = () => {
  return (
    <div>
      <div>
        {/* Heading Skeleton */}
        <div className="text-center mt-16">
          <div className="skeleton h-10 w-80 mx-auto"></div>
          <div className="skeleton h-5 w-96 max-w-full mx-auto mt-4"></div>
        </div>

        {/* Apps Skeleton */}
        <div className="grid gap-4 mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container mx-auto">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-sm border border-base-200"
            >
              {/* Image */}
              <div className="skeleton h-48 w-full"></div>

              <div className="card-body">
                {/* Title */}
                <div className="skeleton h-6 w-3/4"></div>

                {/* Description */}
                <div className="skeleton h-4 w-full mt-2"></div>
                <div className="skeleton h-4 w-5/6 mt-2"></div>

                {/* Button */}
                <div className="card-actions justify-end mt-4">
                  <div className="skeleton h-9 w-24"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default loading;
