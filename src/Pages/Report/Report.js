import React from 'react';
import styles from "./Report.module.css";

const Report = () => {
    return (
        <div className={styles.container}>
            <div className={styles.modal_content}>
                <h2>Создайте репорт</h2>
                <form action="javascript:void(0)">
                    <div>
                        <label htmlFor="name">Ваше имя</label>
                        <input required type="text" name="name"/>
                    </div>

                    <div>
                        <label htmlFor="img_url">Ваш телефон</label>
                        <input required type="text" name="img_url"/>
                    </div>

                    <div >
                        <label htmlFor="category">Категория</label>
                        <div className={styles.btns}>
                            <button>Жалоба</button>
                            <button>Предложение</button>
                        </div>

                    </div>

                    <div>
                        <label htmlFor="desc">Описание</label>
                        <textarea required name="desc"/>
                    </div>


                    <button>Отправить репорт</button>
                </form>
            </div>
        </div>
    );
};

export default Report;