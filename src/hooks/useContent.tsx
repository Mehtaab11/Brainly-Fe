import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

const useContent = () => {
  const [content, setContent] = useState<any[]>([]);

  useEffect(() => {
    try {
      axios
        .get(BACKEND_URL + "/api/v1/content", {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setContent(response.data.content);
        });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return content;
};

export default useContent;
