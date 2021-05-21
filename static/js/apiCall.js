export const fetchFilesytem = async () => {
  const response = await fetch("../filesystem.json");

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Unable to fetch data");
  }
};
