import { useEffect, useState } from "react";

export function useToken() {
  const [token, setToken] = useState("");
  useEffect(() => {
    if (localStorage.token) {
      setToken(localStorage.token);
    }
  }, []);

  return [token];
}
