import React, {useEffect} from 'react';
import NawPages from "../../Components/NavPages/NawPages";
import Header from "../../Components/Header/Header";

const Dictionary = ({onLoad}:any) => {
    useEffect(() => onLoad(), [onLoad])
    return <>
    </>
}

export default Dictionary;
