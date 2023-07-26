import { useState } from "react"

const BuildingForm = () => {
    const [firstNameInput, setFirstNameInput] = useState('');
    const [lastNameInput, setLastNameInput] = useState('');

    const greet = () => {
        alert('Hello ' + firstNameInput + ' ' + lastNameInput + '!');  
    }

    return (
        <div className="formDiv">
            <form className="formContainer">
                <input type="text" placeholder="First name" value={firstNameInput} onChange={(e) => setFirstNameInput(e.target.value)}></input>
                <input type="text" placeholder="Last name" value={lastNameInput} onChange={(e) => setLastNameInput(e.target.value)}></input>
                <button onClick={greet} className="greetBtn">GREET ME</button>
            </form>
        </div>
    )
}

export default BuildingForm;