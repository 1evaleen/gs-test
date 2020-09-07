import React from 'react'
import style from './index.scss'
import Icon from '../icon/index'

const WalletInfo = (props) => {
    const walletValue = parseFloat(props.value).toFixed(2);
    const targetValue = props.target;
    const splitValue = walletValue.split('.')

    return (
        <div className="wallet">
            <div className="wallet__body">
                <Icon size="large" name="wallet" />
                <div className="wallet__value">£{splitValue[0]}<span className="wallet__decimals">.{splitValue[1]}</span></div>
                <div className="wallet__target">Goal: £{targetValue}</div>
            </div>
        </div>
    )
}

export default WalletInfo;