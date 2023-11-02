import { useState } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../slice/userSlice'

const ImageContainer = styled.img`
  object-fit: cover;
`;

function Main() {


    const [toggle, setToggle] = useState(true);
    const [buttonText, setButtonText] = useState("광고보기");

    const toggleAd = () => {
        if(toggle === false) {
            setButtonText("광고보기")
        } else {
            setButtonText("광고안보기")
        }

        setToggle(!toggle)
    }

    return (
        <div>
            {
                toggle && (
                    <div>aaaaaa</div>
                )
            }
  
            <button onClick={toggleAd}>{buttonText}</button>
        </div>
    )
}

export default Main