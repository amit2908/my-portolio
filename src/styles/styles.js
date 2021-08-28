import styled from 'styled-components';
import res from '../res';

import color from '../res/color';

const Overlay = styled.div` 
    width: 100%;
    height: 100%;
    color: white;
    z-index: 1000;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background-color: rgba(25,25,25,0.5);
`

const Alert = styled.div`
    width: 300px;
    height: 150px;
    background-color: #ffffff;
    border-radius: 10px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const AlertButton = styled.div`
    width: 60px;
    height: 44px;
    background-color: ${color.AppButtonBlue};
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ArrangeChildrenHorizontally = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: ${ props => (props.justifyContent || 'center') };
    align-items: 'center';
`

const ArrangeChildrenVertically = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export {
    Overlay,
    Alert,
    AlertButton,
    ArrangeChildrenHorizontally,
    ArrangeChildrenVertically
}