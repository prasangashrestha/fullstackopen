import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

//get
const getAll = () => {
  const request = axios.get(baseUrl).catch((error) => {
    console.log("fail");
  });
  return request.then((response) => response.data);
};

//post
const createPerson = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

//update
const updatePerson = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

//delete
const deletePerson = (personName) => {
  const request = axios.delete(`${baseUrl}/${personName.id}`);
};

export default {
  getAll,
  createPerson,
  deletePerson,
  updatePerson,
};
