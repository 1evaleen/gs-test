import React from 'react'
import style from './index.scss'

export default (props) => <span className={`icon icon--${props.name}${props.size === 'large' ? ' icon--large' : ''}`}></span>