import { useState, useEffect } from "react";

const RenderJson = () => {
    const [things, setThings] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try { 
                const response = await fetch('http://localhost:3000/data', {
                    method: 'GET',
                });
                const data = await response.json();
                setThings(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className="cardContainer">
            {things.map((thing, i) => (
            <div className="card" key={i}>
                <h3>{thing.setup}</h3>
                <p>{thing.punchline}</p>
            </div>))}
        </div>
        
    )
}

export default RenderJson;