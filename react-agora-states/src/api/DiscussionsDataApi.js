const url = "http://localhost:4000/discussions";

const getFindAll = async () => {
  let response = await fetch(`${url}/`);
  let json = await response.json();
  return json;
};
