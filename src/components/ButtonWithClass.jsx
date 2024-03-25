import { useState } from 'react'


const ButtonWithClass = () => {

    const [toggle, setToggle] = useState(false);

    const handleToggleChange = () => {
      setToggle(!toggle);
    }
  
    const buttonClass = toggle ? 'bg-red' : 'bg-blue'

    return (
        <button className={`${buttonClass}`} onClick={handleToggleChange}>
            Click me with CSS class
        </button>
    )
}

export default ButtonWithClass;
