const url = "http://localhost:4000/discussions";

const getFindAll = async () => {
  const response = await fetch(`${url}/`);
  const json = await response.json();
  return json;
};

export { getFindAll };
