import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDataOfUsers } from "../store/store";

export function useDataOfUsers() {
  const [users, setUsers] = useState([]);
  //const dispatch = useDispatch();
  //const token = useContext(tokenContext)

  useEffect(() => {
    fetch("https://reqres.in/api/users?page=2")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => dispatch(setDataOfUsers(users.data)))
      .catch((error) => console.log(error.message));
  }, []);
  // dispatch(setDataOfUsers(users.data));
  // console.log([users]);
  //return [users];
}
