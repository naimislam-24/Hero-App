export const getAllApps = async () => {
  const res = await fetch("http://localhost:4000/apps");
  const data = await res.json();
  return data;
};
