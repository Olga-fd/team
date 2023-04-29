import axios from "axios";

export const authorizate = async (email, password) => {
  try {
    const response = await axios.post("https://reqres.in/api/login", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
  } catch (err) {
    console.log(err);
  }
};
