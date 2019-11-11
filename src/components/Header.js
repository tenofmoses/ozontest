import React from 'react';
import { withRouter } from 'react-router-dom';

const Header = (props) => {
    const { location } = props
    
    return (
        <nav className="header">
            <ul className="header__list">
                <li className={`header__item ${location.pathname === '/' ? 'header__item-active' : '' }`}>
                    <a href="/" className="header__item-link">О программе</a>
                </li>
                <li className="header__item">
                    <a href="#" className="header__item-link">Спланировать доход</a>
                </li>
                <li className="header__item">
                    <a href="#" className="header__item-link">Привилегии</a>
                </li>
                <li className="header__item">
                    <a href="#" className="header__item-link">Поддержка</a>
                </li>
                <li className={`header__item ${location.pathname === '/form' ? 'header__item-active' : '' }`}>
                    <a href="/form" className="header__item-link">Стать Менеджером</a>
                </li>
                <li className="header__item">
                    <a href="#" className="header__item-link">Бизнес Кабинет</a>
                </li>
            </ul>
        </nav>
    );
}

export default withRouter(Header);
