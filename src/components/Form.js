import React, { useState } from 'react';
import vk from '../images/vk.svg'
import ok from '../images/ok.svg'
import fb from '../images/fb.svg'
import inst from '../images/inst.svg'

const Form = () => {
    let [ accept, setAccept ] = useState(false)
    let [ confirm, setConfirm ] = useState(false)

    const setAcceptHandler = () => {
        setAccept(!accept)
    }

    const setConfirmlHandler = () => {
        setConfirm(!confirm)
    }

    return (
        <div className="form">
            <h2 className="form__title">Заполните форму:</h2>
            <div className="form__wrapper">
                <div className="form__column-first">
                    <div className="form__item">
                        <label className="form__item-label" htmlFor="form-name">ФИО*</label>
                        <input className="form__item-input" type="text" name="name" id="form-name" placeholder="Фамилия Имя Отчество" />
                    </div>
                    <div className="form__item">
                        <label className="form__item-label" htmlFor="form-bday">Дата рождения</label>
                        <input className="form__item-input" type="text" name="bday" id="form-bday" placeholder="30.04.1989" />
                    </div>
                    <div className="form__item">
                        <label className="form__item-label" htmlFor="form-city">Город*</label>
                        <input className="form__item-input" type="text" name="city" id="form-city" placeholder="" />
                    </div>
                    <div className="form__item">
                        <label className="form__item-label" htmlFor="form-phone">Телефон*</label>
                        <input className="form__item-input" type="text" name="phone" id="form-phone" placeholder="+7 (XXX) XXX-XX-XX" />
                    </div>
                    <div className="form__item">
                        <label className="form__item-label" htmlFor="form-email">Email*</label>
                        <input className="form__item-input" type="email" name="email" id="form-email" placeholder="privet@ozon.ru" />
                    </div>
                    <p className="form__info">*Обязательное поле для заполнения</p>
                </div>
                <div className="form__column-second">
                    <div className="form__item">
                        <input className="form__item-input form__item-social" type="text" name="vk" placeholder="vk.com/ozon" />
                        <img className="form__item-vk" alt="vk" src={vk} />
                    </div>
                    <div className="form__item">
                        <input className="form__item-input form__item-social" type="text" name="ok" placeholder="ok.ru/ozon" />
                        <img className="form__item-ok" alt="ok" src={ok} />
                    </div>
                    <div className="form__item">
                        <input className="form__item-input form__item-social" type="text" name="fb" placeholder="facebook.com/ozon.ru" />
                        <img className="form__item-fb" alt="fb" src={fb} />
                    </div>
                    <div className="form__item">
                        <input className="form__item-input form__item-social" type="text" name="inst" placeholder="@ozonru" />
                        <img className="form__item-inst" alt="instagram" src={inst} />
                    </div>
                </div>
                <div className="form__column-third">
                    <div className="form__checkbox-item">
                        <input className="checkbox" type="checkbox" id="accept" name="accept" checked={accept} onChange={setAcceptHandler} />
                        <label htmlFor="accept">Я принимаю условия Оферты и даю своё согласие OZON на обработку моей персональной информации на условиях, определенных Политикой конфиденциальности.</label>
                    </div>
                    <div className="form__checkbox-item">
                        <input className="checkbox" type="checkbox" id="confirm" name="confirm" checked={confirm} onChange={setConfirmlHandler}/>
                        <label htmlFor="confirm">Подтверждаю, что не являюсь участником партнёрской программы OZON/ ИЛИ являюсь, но отказываюсь от участия в ней и присоединяюсь к реферальной программе в качестве Менеджера OZON.</label>
                    </div>
                    <button className="form__button">Отправить</button>
                </div>
            </div>

            <div className="form__notice">
                <div className="form__notice-title">Перед заполнением заявки убедитесь, что:</div>
                <ul className="form__notice-list">
                    <li className="form__notice-item">Вы&nbsp;вошли в&nbsp;свой личный кабинет на&nbsp;OZON;</li>
                    <li className="form__notice-item">ФИО и&nbsp;дата рождения указаны в&nbsp;соответствии с&nbsp;паспортом;</li>
                    <li className="form__notice-item">А&nbsp;также корректно указаны контактные данные.</li>
                </ul>
                <div className="form__notice-item">Ошибки в&nbsp;указанных данных могут привести к&nbsp;отключению от&nbsp;программы. Будьте внимательны.</div>
            </div>
            
            <div className="form__footer">
                <div className="form__footer-item">
                    <a className="form__footer-link" href="tel:88002346006">8 (800) 234-60-06 - круглосуточно</a>
                </div>
                <div className="form__footer-item">
                    <a className="form__footer-link" href="mailto:referral@ozon.ru">referral@ozon.ru</a>
                </div>
            </div>
        </div>
    );
}

export default Form;