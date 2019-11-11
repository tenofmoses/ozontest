import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = (props) => {
    const { location } = props
    
    return (
        <nav className="header">
            <ul className="header__list">
                <li className={`header__item ${location.pathname === '/' ? 'header__item-active' : '' }`}>
                    <a href="/">О программе</a>
                </li>
                <li className="header__item">Спланировать доход</li>
                <li className="header__item">Привилегии</li>
                <li className="header__item">Поддержка</li>
                <li className={`header__item ${location.pathname === '/form' ? 'header__item-active' : '' }`}>
                    <a href="/form">Стать Менеджером</a>
                </li>
                <li className="header__item">Бизнес Кабинет</li>
            </ul>
        </nav>
    );
}

export default withRouter(Header);
