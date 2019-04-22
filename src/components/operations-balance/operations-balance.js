import React, { Component } from 'react';
import Spinner from '../spinner';

import './operations-balance.css';

export default class OperationsBalance extends Component{
    render() {
        const findCosts = (type) => {
            let counter = 0;
            this.props.wallet.operations.map((item)=>{if(item.type===type) { counter = counter + +item.value }});
            return counter;
        };

        if(this.props.wallet) {
            return (
                <div className="purse__info info">
                    <ul className="info__list row">
                        <li className="info__item info__item--balance col-xl-3">
                            <div className="info__border">
                                <i>Баланс</i>
                                <b>{this.props.wallet.balance}$</b>
                            </div>
                        </li>
                        <li className="info__item col-xl-3">
                            <div className="info__border info__border--costs">
                                <i>Всего расходов</i>
                                <b>{findCosts('costs')}$</b>
                            </div>
                            <a href="#" onClick={() => {
                                this.props.updateActiveBlock('costs')
                            }} className="btn btn--addCosts">Добавить расходы</a>
                        </li>
                        <li className="info__item col-xl-3">
                            <div className="info__border info__border--inCome">
                                <i>Всего доходов</i>
                                <b>{findCosts('incomes')}$</b>
                            </div>
                            <a href="#" onClick={() => {
                                this.props.updateActiveBlock('incomes')
                            }} className="btn btn--addInCome">Добавить доходы</a>
                        </li>
                    </ul>
                </div>
            )
        }
    return <Spinner />
    }

};