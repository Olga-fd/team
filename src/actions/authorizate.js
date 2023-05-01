import axios from "axios";

export const authorizate = async (email, password) => {
  try {
    const response = await axios.post("https://reqres.in/api/login", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
  } catch (err) {
    alert("Авторизация невозможна. Пользователь не найден");
    throw new Error(
      `Статус ${err.response.status}: Авторизация невозможна. Пользователь не найден`
    );
  }
};
