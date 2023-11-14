export const base_url = "http://localhost:8000/api/";

export const config = {
  headers: {
    Authorization: `Bearer ${
      localStorage.getItem("token") !== null ? localStorage.getItem("token") : ""
    }`,
    Accept: "application/json",
  },
};
