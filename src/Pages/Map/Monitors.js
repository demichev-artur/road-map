import React, {useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import cities from "./cities.json";
import osm from "./osm-providers";
import { useRef } from "react";
import styles from "./Map.module.css";
import "leaflet/dist/leaflet.css";

const Monitors = () => {
    const [center, setCenter] = useState({ lat: 42.90237558163906, lng: 74.61922718196361 });
    const ZOOM_LEVEL = 13;
    const mapRef = useRef();

    const markerIcon = new L.Icon({
        iconUrl: require("../../access/marker.png"),
        iconSize: [40, 40],
        iconAnchor: [17, 46], //[left/right, top/bottom]
        popupAnchor: [0, -46], //[left/right, top/bottom]
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button onClick={()=> window.open("/report")}>Авторизация</button>
            </div>
            <div className={styles.content}>
                <div className={styles.listOne}>
                    <h2>Проблемы:</h2>
                    <div className={styles.item}>
                        <div><p><b><span>Описание: </span></b>Появилась яма на новой дороге по улице Айни</p></div>
                        <div><p><b><span>Адрес: </span></b>ул.Айни</p></div>
                        <div><p><b><span>Фото: </span></b><button>Посмотреть</button></p></div>
                        <div><p><b><span>Статус: </span></b>Отправлено</p></div>
                        <div><p><b><span>Дата: </span></b>01.01.2023</p></div>
                    </div>

                    <div className={styles.item}>
                        <div><p><b><span>Описание: </span></b>Появилась яма на новой дороге по улице Айни</p></div>
                        <div><p><b><span>Адрес: </span></b>ул.Айни</p></div>
                        <div><p><b><span>Фото: </span></b><button>Посмотреть</button></p></div>
                        <div><p><b><span>Статус: </span></b>Отправлено</p></div>
                        <div><p><b><span>Дата: </span></b>01.01.2023</p></div>
                    </div>

                    <div className={styles.item}>
                        <div><p><b><span>Описание: </span></b>Появилась яма на новой дороге по улице Айни</p></div>
                        <div><p><b><span>Адрес: </span></b>ул.Айни</p></div>
                        <div><p><b><span>Фото: </span></b><button>Посмотреть</button></p></div>
                        <div><p><b><span>Статус: </span></b>Отправлено</p></div>
                        <div><p><b><span>Дата: </span></b>01.01.2023</p></div>
                    </div>

                    <div className={styles.item}>
                        <div><p><b><span>Описание: </span></b>Появилась яма на новой дороге по улице Айни</p></div>
                        <div><p><b><span>Адрес: </span></b>ул.Айни</p></div>
                        <div><p><b><span>Фото: </span></b><button>Посмотреть</button></p></div>
                        <div><p><b><span>Статус: </span></b>Отправлено</p></div>
                        <div><p><b><span>Дата: </span></b>01.01.2023</p></div>
                    </div>

                    <div className={styles.item}>
                        <div><p><b><span>Описание: </span></b>Появилась яма на новой дороге по улице Айни</p></div>
                        <div><p><b><span>Адрес: </span></b>ул.Айни</p></div>
                        <div><p><b><span>Фото: </span></b><button>Посмотреть</button></p></div>
                        <div><p><b><span>Статус: </span></b>Отправлено</p></div>
                        <div><p><b><span>Дата: </span></b>01.01.2023</p></div>
                    </div>
                </div>
                <div className={styles.map}>
                    <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
                        <TileLayer
                            url={osm.maptiler.url}
                            attribution={osm.maptiler.attribution}
                        />
                        {cities.map((city, idx) => (
                            <Marker
                                position={[city.lat, city.lng]}
                                icon={markerIcon}
                                key={idx}
                            >
                                <Popup>
                                    <b>
                                        {city.city}, {city.country}
                                    </b>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                    {/*<iframe*/}
                    {/*    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ab07c8e48cc056942cfdc04d9eb3d7ff4501a5eae02d94d83172f8fa199859487&amp;source=constructor"*/}
                    {/*    width="500" height="400" frameBorder="0"></iframe>*/}
                </div>
                <div className={styles.listTwo}>
                    <h2>Предложения:</h2>
                    <div className={styles.item}>
                        <div><p><b><span>Описание: </span></b>Нужно поставить светофор на пешеходном переходе</p></div>
                        <div><p><b><span>Адрес: </span></b>ул.Айни</p></div>
                        <div><p><b><span>Фото: </span></b><button>Посмотреть</button></p></div>
                        <div><p><b><span>Статус: </span></b>Отправлено</p></div>
                        <div><p><b><span>Дата: </span></b>01.01.2023</p></div>
                    </div>
                    <div className={styles.item}>
                        <div><p><b><span>Описание: </span></b>Нужно поставить светофор на пешеходном переходе</p></div>
                        <div><p><b><span>Адрес: </span></b>ул.Айни</p></div>
                        <div><p><b><span>Фото: </span></b><button>Посмотреть</button></p></div>
                        <div><p><b><span>Статус: </span></b>Отправлено</p></div>
                        <div><p><b><span>Дата: </span></b>01.01.2023</p></div>
                    </div>
                    <div className={styles.item}>
                        <div><p><b><span>Описание: </span></b>Нужно поставить светофор на пешеходном переходе</p></div>
                        <div><p><b><span>Адрес: </span></b>ул.Айни</p></div>
                        <div><p><b><span>Фото: </span></b><button>Посмотреть</button></p></div>
                        <div><p><b><span>Статус: </span></b>Отправлено</p></div>
                        <div><p><b><span>Дата: </span></b>01.01.2023</p></div>
                    </div>
                    <div className={styles.item}>
                        <div><p><b><span>Описание: </span></b>Нужно поставить светофор на пешеходном переходе</p></div>
                        <div><p><b><span>Адрес: </span></b>ул.Айни</p></div>
                        <div><p><b><span>Фото: </span></b><button>Посмотреть</button></p></div>
                        <div><p><b><span>Статус: </span></b>Отправлено</p></div>
                        <div><p><b><span>Дата: </span></b>01.01.2023</p></div>
                    </div>
                    <div className={styles.item}>
                        <div><p><b><span>Описание: </span></b>Нужно поставить светофор на пешеходном переходе</p></div>
                        <div><p><b><span>Адрес: </span></b>ул.Айни</p></div>
                        <div><p><b><span>Фото: </span></b><button>Посмотреть</button></p></div>
                        <div><p><b><span>Статус: </span></b>Отправлено</p></div>
                        <div><p><b><span>Дата: </span></b>01.01.2023</p></div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Monitors;