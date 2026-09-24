export const getAllApps = async () => {
  const res = await fetch("http://localhost:4000/apps", {
    // cache: "force-cache",
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
};
