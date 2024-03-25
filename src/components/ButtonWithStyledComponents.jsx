

import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color:  ${(props) => props.isClicked ? 'red' : 'yellow'};
  border: none;
  margin-left: 10px;
`;

const ButtonWithStyledComponents = () => {

    const [isClicked, setIsClicked] = useState(false);

    return (
        <Button 
            isClicked={isClicked} 
            onClick={() => setIsClicked(!isClicked)}>
                Click me width Styled Components
        </Button>
    )
}

export default ButtonWithStyledComponents
