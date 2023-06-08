import axios from "axios";

export async function fetchData(url, commit) {
  try {
    const response = await axios.get(url);
    commit("set_category", response.data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createData(url, data, commit, mutation) {
  try {
    const response = await axios.post(url, data);
    commit(mutation, response.data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateData(url, id, data, commit, mutation) {
  try {
    const response = await axios.post(`${url}/${id}`, data);
    commit(mutation, response.data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteData(url, id, commit, mutation) {
  try {
    await axios.delete(`${url}/${id}`);
    commit(mutation, id);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
