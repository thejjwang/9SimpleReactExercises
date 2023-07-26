
const CustomComponent = () => {
    
    const alertMessage = (buttonText) => {
        alert('You clicked on button ' + buttonText)
    }

    return (
        <div className="customComponentDiv">
            <button onClick={() => alertMessage('Button 1')}>Button 1</button>
            <button onClick={() => alertMessage('Button 2')}>Button 2</button>
            <button onClick={() => alertMessage('Button 3')}>Button 3</button>
        </div>
    )
}

export default CustomComponent;