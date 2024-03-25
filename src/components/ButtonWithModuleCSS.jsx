import { useState } from "react";
import styles from '../Button.module.css';

const ButtonWithModuleCSS = () => {

    const [isClicked, setIsClicked] = useState(false);

    const [additionalClass, setAdditionalClass] = useState('');

    const handleClick = () => {
        setIsClicked(!isClicked);
        setAdditionalClass(isClicked ? '' : styles.ml_20);
    };

    return (
        <button 
            className={`${styles.button} ${additionalClass}`} 
            onClick={handleClick}>
            {isClicked ? 'Clicked!' : 'Click me with Module CSS'}
        </button>
    )
}

export default ButtonWithModuleCSS
