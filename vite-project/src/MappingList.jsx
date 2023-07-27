
const MappingList = () => {

    const arr = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']

    return (
        <div>
            <ul>
                {arr.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </div>
    )
}

export default MappingList;