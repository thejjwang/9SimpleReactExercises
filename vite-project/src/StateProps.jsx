import { useState } from "react"

const StateProps = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count +1)
    }

    return (
        <div className="statePropsDiv">
            <p>Button has been clicked: {count}</p>
            <button onClick={increment}>Click Me</button>
        </div>
    )
}

export default StateProps;