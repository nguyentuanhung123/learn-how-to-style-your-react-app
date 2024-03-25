import { useState } from "react";
import styles from '../Button.module.css';

const ButtonWithModuleCSS = () => {

    const [isClicked, setIsClicked] = useState(false);

    return (
        <button 
            className={`${styles.button} ${styles.ml_20}`} 
            onClick={() => setIsClicked(!isClicked)}>
            Click me width Module CSS
        </button>
    )
}

export default ButtonWithModuleCSS
