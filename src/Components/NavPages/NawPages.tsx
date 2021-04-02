import React, {useRef} from 'react';
import './NawPages.scss'
import {Link, NavLink} from 'react-router-dom'
import {
    BarChartOutlined,
    BookOutlined,
    BuildOutlined,
    HomeOutlined,
    MenuOutlined,
    ReadOutlined
} from "@ant-design/icons";

const NawPages = ({currLevel, currPage, currDictSection, currDictPage,currDictLevel}:any) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <nav className='nav-pages' ref={ref}>
            <div className='nav-pages__top'>
                <MenuOutlined onClick={() => (
                    ref.current!.classList.toggle('active')
                )} style={{fontSize: '40px'}}/>
            </div>
            <ul>
                <li>
                    <NavLink activeClassName='active' to='/home'>
                        <div className='li-item'>
                            <h2>Домой</h2>
                            <HomeOutlined style={{fontSize: '40px'}}/>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to={`/textbook/${currLevel}/${currPage}`}>
                        <div className='li-item'>
                            <h2>Учебник</h2>
                            <BookOutlined style={{fontSize: '40px'}}/>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/games'>
                        <div className='li-item'>
                            <h2>Игры</h2>
                            <BuildOutlined style={{fontSize: '40px'}}/>
                        </div>
                    </NavLink>
                </li>
                <li>

                    <NavLink activeClassName='active' to={`/dictionary/${currDictSection.section}/${currDictLevel}/${currDictPage}`}>
                        <div className='li-item'>
                            <h2>Словарь</h2>
                            <ReadOutlined style={{fontSize: '40px'}}/>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/statistic'>
                        <div className='li-item'>
                            <h2>Статистика</h2>
                            <BarChartOutlined style={{fontSize: '40px'}}/>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NawPages;
