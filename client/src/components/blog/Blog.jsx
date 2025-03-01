import { useState } from "react";
import styles from "./Blog.module.css";
import Card from "./card/Card";
import { useEffect } from "react";
import axios from "axios";
import NoData from "../no-data/NoData";

export default function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get("http://localhost:3030/blog/posts", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.data;
      setData(result);
    })();
  }, []);


  return (
    <>
      <div className={styles["container"]}>
        {data.length ? (
          data.map((post) => (
            <>
              <Card key={post._id} post={post} />
            </>
          ))
        ) : (
          <NoData
            preText={"There are no posts yet 📝 !"}
            mainText={
              "Be the first to create an amazing post and share your thoughts!"
            }
          />
        )}
      </div>
    </>
  );
}
