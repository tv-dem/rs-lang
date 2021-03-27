import React, {useEffect} from 'react';
import NawPages from "../../Components/NavPages/NawPages";
import Header from "../../Components/Header/Header";

const MainPage = ({onLoad}: any) => {
    useEffect(()=> onLoad(), [onLoad]);
    return <>
    </>
}

export default MainPage;
