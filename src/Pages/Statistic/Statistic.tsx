import React, {useEffect} from 'react';
import Header from "../../Components/Header/Header";

const Statistic = ({onLoad}:any) => {
    useEffect(() => onLoad(), [onLoad])
    return <>
    </>
}

export default Statistic;
