import axios from "axios";

export const registrate = async (email, password) => {
  try {
    const response = await axios.post("https://reqres.in/api/register", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
  } catch (err) {
    console.log(err);
  }
};
