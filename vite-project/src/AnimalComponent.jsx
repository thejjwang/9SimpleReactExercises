
const AnimalComponent = ({animals}) => {

    return (
        <div className="animalContainer">
            {animals.map((animal, i) => <p className='animal' key={i}>{animal}</p>)}
        </div>
    )
}

export default AnimalComponent;