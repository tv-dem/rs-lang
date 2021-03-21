import React from 'react';
import './NawPages.scss'
import {Link, NavLink} from 'react-router-dom'

const NawPages = () => {
    return(
        <nav className='nav-pages'>
            <ul>
                <li><NavLink activeClassName='active' to='main'>На главную</NavLink></li>
                <li><NavLink activeClassName='active' to='dictionary'>Учебник</NavLink></li>
                <li><NavLink activeClassName='active' to='games'>Игры</NavLink></li>
                <li><NavLink activeClassName='active' to='statistic'>Статистика</NavLink></li>
            </ul>
        </nav>
    )
}

export default NawPages;
