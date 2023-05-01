import axios from "axios";
import { setDataOfUsers } from "../store/store";
import { useDispatch } from "react-redux";

export const getUsersList = async () => {
  const dispatch = useDispatch();

  try {
    const response = await axios.get("https://reqres.in/api/users?page=2", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const data = response.data.data;
    data.map((item) => {
      item.like = false;
    });
    dispatch(setDataOfUsers(data));
  } catch (err) {
    throw new Error(`Данные не получены`);
  }
};
