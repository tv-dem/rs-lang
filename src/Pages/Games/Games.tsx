import React, {useEffect} from 'react';
import NawPages from "../../Components/NavPages/NawPages";
import Header from "../../Components/Header/Header";
import {NavLink} from "react-router-dom";
import {HomeOutlined} from "@ant-design/icons";

const Games = ({onLoad}:any) => {
    useEffect(() => onLoad(), [onLoad])
    return <>

    </>
}

export default Games;
