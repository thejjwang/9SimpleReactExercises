import { useState, useEffect } from "react";

const WorkingWithApi = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://random-data-api.com/api/users/random_user?size=10",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <button className="fetchRandomBtn">Fetch Random</button>
      {/* <div className="cardContainer">
        {things.map((thing, i) => (
          <div className="card" key={i}>
            <h3>{thing.setup}</h3>
            <p>{thing.punchline}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default WorkingWithApi;
