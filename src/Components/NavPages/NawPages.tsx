import React, {useRef} from 'react';
import './NawPages.scss'
import {Link, NavLink} from 'react-router-dom'
import {BarChartOutlined, BookOutlined, BuildOutlined, HomeOutlined, MenuOutlined, ReadOutlined} from "@ant-design/icons";

const NawPages = () => {
    const ref = useRef<HTMLInputElement>(null);

    return(
        <nav className='nav-pages' ref={ref}>
            <div className='nav-pages__top'>
                <MenuOutlined onClick={() => (
                    ref.current!.classList.toggle('active')
                )} style={{fontSize: '40px'}}/>
            </div>
            <ul>
                <li><NavLink activeClassName='active' to='main'><HomeOutlined style={{fontSize: '40px'}}/></NavLink></li>
                <li><NavLink activeClassName='active' to='textbook'><BookOutlined style={{fontSize: '40px'}}/></NavLink></li>
                <li><NavLink activeClassName='active' to='games'><BuildOutlined style={{fontSize: '40px'}}/></NavLink></li>
                <li><NavLink activeClassName='active' to='dictionary'><ReadOutlined style={{fontSize: '40px'}} /></NavLink></li>
                <li><NavLink activeClassName='active' to='statistic'><BarChartOutlined style={{fontSize: '40px'}}/></NavLink></li>
            </ul>
        </nav>
    )
}

export default NawPages;
