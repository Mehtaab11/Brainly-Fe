import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";

const useContent = () => {
  const [content, setContent] = useState<any[]>([]);

  const refreshContent = async () => {
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
  };

  useEffect(() => {
    refreshContent();
    // Refresh content every 10 seconds
    const interval = setInterval(() => {
      refreshContent();
    }, 5 * 1000);
    return () => clearInterval(interval);
  }, []);

  return content;
};

export default useContent;
