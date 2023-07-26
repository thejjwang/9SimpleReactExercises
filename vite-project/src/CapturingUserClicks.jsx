
const CapturingUserClicks = () => {

    const messageAlert = () => {
        alert("Clicked!");
    }
    return (
        <div className="messageAlert">
            <button onClick={messageAlert}>Click Me</button>
        </div>
    )
}

export default CapturingUserClicks;