import { useState } from "react";
import AnimalComponent from "./AnimalComponent";
const MappingCustom = () => {

    const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse']
    return (
        <div>
            <AnimalComponent animals={animals}/>
        </div>
    )
}

export default MappingCustom;