import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Welcome.module.css";
import workers from "../../access/17915 [преобразованный].png";
import messending from "../../access/messending.png";
import gerb from "../../access/gerb.svg.png";
import logoZakup from "../../access/logo.png";

const Welcome = () => {
    return (
        <div className={styles.container}>
            <section className={styles.header} onClick={()=> window.open("http://cbd.minjust.gov.kg/act/view/ru-ru/98583?cl=ru-ru#:~:text=%D0%9E%D0%B1%D1%89%D0%B0%D1%8F%20%D0%BF%D1%80%D0%BE%D1%82%D1%8F%D0%B6%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D1%8C%20%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%20%D0%B8,%D1%83%D0%BB%D0%B8%D1%86%D1%8B%20%D0%B8%20%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B8%20%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%B2%2C%20%D0%BD%D0%B0%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D1%85")}>
                <p>В Кыргызстане общая протяженность автомобильных дорог составляет <span>~34 тыс. км</span></p>
                <img src={workers} alt=""/>
            </section>

            <section className={styles.info}>
                <img src={messending} alt=""/>
                <div>
                    <p>Есть жалобы или предложения по улучшению дорог? </p>
                    <NavLink to="/map"><button className={styles.btn}>Оставить заявку</button></NavLink>
                </div>


            </section>

            <section className={styles.infoTwo}>
                <div onClick={()=> window.open("http://www.zakupki.gov.kg/popp/")}>
                    <p>Сайт Государственных Закупок
                        Кыргызской Республики</p>
                    <img src={logoZakup} alt=""/>
                </div>
                <div onClick={()=> window.open("https://mtd.gov.kg/")}>
                    <p>Сайт Министерства транспорта и коммуникаций Кыргызской Республики</p>
                    <img src={gerb} alt=""/>
                </div>
            </section>


        </div>
    );
};

export default Welcome;