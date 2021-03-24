import React from 'react';
import NawPages from "../../Components/NavPages/NawPages";
import Header from "../../Components/Header/Header";
import {NavLink} from "react-router-dom";
import {HomeOutlined} from "@ant-design/icons";

const Games = () => {
    return <>
        <li><NavLink activeClassName='active' to='/games/split'><HomeOutlined style={{fontSize: '40px'}}/></NavLink></li>
    </>
}

export default Games;
