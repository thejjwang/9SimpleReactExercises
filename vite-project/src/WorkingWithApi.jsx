import { useState, useEffect } from "react";
import CardComponent from "./CardComponent";

const WorkingWithApi = () => {
  const [avatar, setAvatar] = useState([]);


    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://random-data-api.com/api/users/random_user?size=10",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setAvatar(data);
      } catch (error) {
        console.log(error);
      }
    };

  
  return (
    <div>
      <button onClick={fetchData} className="fetchRandomBtn">Fetch Random</button>
      <CardComponent avatar={avatar}/>
    </div>
  );
};

export default WorkingWithApi;
