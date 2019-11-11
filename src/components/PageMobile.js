import React, { useState, useCallback } from 'react';
import center_large from '../images/center_large.png'
import center_medium from '../images/center_medium.png'
import center_small from '../images/center_small.png'
import letter_o from '../images/letter_o.svg'
import letter_z from '../images/letter_z.svg'
import dots from '../images/dots.svg'
import zigzag from '../images/zigzag.svg'
import money from '../images/money.svg'


const PageMobile = () => {
    let [ startNext, setStartNext ] = useState(null)
    let [ startPrev, setStartPrev ] = useState(true)
    let [ stopNextSwipe, setStopNextSwipe ] = useState(false)
    let [ stopPrewSwipe, setStopPrewSwipe ] = useState(true)

    const nextSlideHandle = useCallback(event => {
        if (!stopNextSwipe && event.changedTouches[0].pageX < startNext && startNext !== null) {
            setStartPrev(null)
            setStopNextSwipe(true)
            setStopPrewSwipe(false)
            return
        } 
        setStartNext(event.changedTouches[0].pageX)
    }, [stopNextSwipe, startNext]);

    const prevSlideHandle = useCallback(event => {
        if (!stopPrewSwipe && event.changedTouches[0].pageX > startPrev && startPrev === null) {
            setStartNext(null)
            setStopNextSwipe(false)
            setStopPrewSwipe(true)
            return
        }
        setStartPrev(event.changedTouches[0].pageX)
    }, [stopPrewSwipe, startPrev]);


    return (
        <div className="page-mobile">
            <div className="page-mobile__lines">
                <span className={`page-mobile__line ${startPrev ? "page-mobile__line-active" : ""}`} />
                <span className={`page-mobile__line ${startNext ? "page-mobile__line-active" : ""}`} />
            </div>
            <div className="page-mobile__wrapper" 
                style={{ transform: `translateX(${startNext ? '-100vw' : '' || startPrev ? '0' : ''})`, transitionDuration: '300ms' }}>
                <div className="page-mobile__slide page-mobile__first-slide" onTouchMove={nextSlideHandle}>
                    <h1 className="page-mobile__title page-mobile__first-title">Начните зарабатывать c&nbsp;крупнейшим интернет-магазином!</h1>
                    <p className="page-mobile__description">Покупают ваши друзья, а&nbsp;зарабатываете&nbsp;вы!</p>
                    <img src={letter_o} className="page-mobile__letter-o" alt="буква о" />
                    <img src={dots} className="page-mobile__dots-first" alt="точки" />
                    <picture className="page-mobile__central-img">
                        <source type="image/png" srcSet={center_large} media="(max-width: 1440px)" />
                        <source type="image/png" srcSet={center_medium} media="(max-width: 1024px)" />
                        <source type="image/png" srcSet={center_small} />
                        <img src={center_large} alt="Девушка и парень" />
                    </picture>
                </div>

                <div className="page-mobile__slide page-mobile__second-slide" onTouchMove={prevSlideHandle}>
                    <h2 className="page-mobile__title page-mobile__second-title">Хотите</h2>
                    <p className="page-mobile__description">Увеличить доход и&nbsp;позволить себе&nbsp;то, о&nbsp;чём давно мечтаете?</p>
                    <img src={letter_z} className="page-mobile__letter-z" alt="буква z" />
                    <img src={dots} className="page-mobile__dots-second" alt="точки" />
                    <img src={zigzag} className="page-mobile__zigzag" alt="zigzag" />
                    <img src={money} className="page-mobile__money" alt="кошелек" />
                </div>
            </div>
            
        </div>
    );
}

export default PageMobile;