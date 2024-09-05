import React from 'react';
import styles from './StartPage.module.css'; // Подключаем стили
import logo from './ico.png';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router-dom';

const GlowingEffect = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    };
    return (
        <div className={styles.container} onClick={handleClick}>
            <div className={styles.glow}>
                <img src={logo} alt="logo" />
            </div>
        </div>
    );
};

export default GlowingEffect;
