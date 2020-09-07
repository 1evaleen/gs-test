import React from 'react'
import style from './index.scss'
import Icon from '../icon/index'

const SpecialButton = (props) => {
    // to do something with the props.link in production
    return (
    <button className="special-button">{props.children} <Icon name="right-arrow" /></button>
    )
}

export default SpecialButton;