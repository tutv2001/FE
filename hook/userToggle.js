import React from 'react'
import { useState } from 'react';
import {
    faEyeSlash,
    faEye
    } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const userToggle = () => {
    const [visible, setVisiblity] = useState(false);
    const Icon = (
        <FontAwesomeIcon icon={faEye}
        onClick={()=> setVisiblity(visibility => !visibility)}
        />
    )
    const InputType = visible ? "text" : "password";
  return [InputType, Icon]
}
export default userToggle;