import React, { useState } from 'react';
import mouse from '../images/mouse.svg'
import center_large from '../images/center_large.png'
import center_medium from '../images/center_medium.png'
import center_small from '../images/center_small.png'
import letter_o from '../images/letter_o.svg'
import letter_z from '../images/letter_z.svg'
import letter_n from '../images/letter_n.svg'
import aim from '../images/aim.svg'
import deal from '../images/deal.svg'
import money from '../images/money.svg'
import time from '../images/time.svg'

const Page = () => {
    let [ animationStart, setAnimationStart ] = useState(false)

    const mouseMoveHandler = () => {
        if (!animationStart) {
            setAnimationStart(true)
        }
    }

    return (
        <div className="page" onMouseMove={mouseMoveHandler} onAnimationEnd={() => setAnimationStart(false)}>
            <div className="page__left">
                <h1 className="page__title">Начните зарабатывать c&nbsp;крупнейшим <nobr>интернет-магазином!</nobr></h1>
                <p className="page__description">Покупают ваши друзья, а&nbsp;зарабатываете&nbsp;вы!</p>
                <a href="/form" className="page__button">Стать Менеджером OZON</a>
                <img src={mouse} className="page__mouse" alt="мышка" />
            </div>

            <div className="page__right">
                <picture className="page__central-img">
                    <source type="image/png" srcSet={center_large} media="(max-width: 1440px)" />
                    <source type="image/png" srcSet={center_medium} media="(max-width: 1024px)" />
                    <source type="image/png" srcSet={center_small} />
                    <img src={center_large} alt="Девушка и парень" />
                </picture>
                
                <img src={letter_o} className="page__letter page__letter-o" alt="буква о" />
                <img src={money} className="page__stuff page__money" alt="кошелек" style={{ animation: `${animationStart ? "moveImage 1s" : ''}` }}  />

                <img src={letter_z} className="page__letter page__letter-z" alt="буква z" />
                <img src={time} className="page__stuff page__time" alt="часы" style={{ animation: `${animationStart ? "moveImage 1s" : ''}` }}  />

                <img src={letter_n} className="page__letter page__letter-n" alt="буква n" />
                <img src={aim} className="page__stuff page__aim" alt="цель" style={{ animation: `${animationStart ? "moveImage 1s" : ''}` }}  />

                <img src={letter_o} className="page__letter page__letter-second-o" alt="буква o" />
                <img src={deal} className="page__stuff page__deal" alt="сделка" style={{ animation: `${animationStart ? "moveImage 1s" : ''}` }}  />
            </div>
        </div>
    );
}

export default Page;