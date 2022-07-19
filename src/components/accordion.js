import React,{useState} from "react";
import { Icon } from 'react-icons-kit'
import {chevronUp} from 'react-icons-kit/feather/chevronUp'

export default function Accordion(props){
    let [accordion,setAccordion]=useState(false);
    let  accordionMenu=()=>{
        setAccordion(!accordion)
      }
    return(
        <li onClick={accordionMenu} className={accordion ? 'get-room__item get-room__item--active':'get-room__item'}>
        <div className='get-room__item-wrapper'>
        <span className='get-room__item-number'>{props.data.title}</span>
          <span className={accordion ? 'circle circle-active':'circle'}>
            <Icon icon={chevronUp} size={32}/>
          </span>
        </div>
          <p className='get-room__text'>
          {props.data.text}
          </p>
        </li>
    )
}