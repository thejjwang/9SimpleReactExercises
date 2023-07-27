import { useState } from "react";
import AnimalComponent from "./AnimalComponent";
import { FaDog, FaCat, FaBong} from "react-icons/fa";
import {GiChicken} from "react-icons/gi";
const MappingCustom = () => {

    const animals = [{icon: <FaDog />, animal: 'dog'}, {icon: <FaCat />, animal: 'cat'}, {icon: <GiChicken />, animal: 'chicken'}, {icon: <FaBong />, animal: 'cow'}, {animal: 'sheep'}, {animal: 'horse'}]
    return (
        <div>
            <AnimalComponent animals={animals} />
        </div>
    )
}

export default MappingCustom;