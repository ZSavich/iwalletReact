import React from 'react';
import {addNewOperation, closeActiveBlock} from "../../actions";
import {withIWalletsService} from "../hoc";
import {connect} from "react-redux";

const OperationsShowBlock = ({ show, wallets, activeWallet, addNewOperation, closeActiveBlock }) => {
    const wallet = wallets.find((wallet)=>wallet.id===activeWallet);
    if(show === 'costs')
        return (
            <div className="show-operation">
                <span onClick={()=>closeActiveBlock()} className="show-operation__close">X</span>
                <h5>COSTS ADD</h5>
                    <input type="hidden" id="type" value="costs"/>
                    <input type="text" id="name" placeholder={'Введите название'}/>
                    <input type="number" id="value" placeholder={'Введите сумму'}/>
                    <input type="text" id="comment" placeholder={'Введите комментарий'}/>
                    <label><input type="radio" name="category" id="eat" defaultChecked  />Еда</label>
                    <label><input type="radio" name="category" id="transport"/>Транспорт</label>
                    <label><input type="radio" name="category" id="pet"/>Питомец</label>
                    <button onClick={()=>{addNewOperation(wallet)}}>Добавить</button>
            </div>
        );
    if(show === 'incomes')
        return (
            <div className="show-operation">
                <span onClick={()=>closeActiveBlock()} className="show-operation__close">X</span>
                <h5>INCOMES ADD</h5>
                    <input type="hidden" id="type" value="incomes"/>
                    <input type="text" id="name" placeholder={'Введите название'}/>
                    <input type="number" id="value" placeholder={'Введите сумму'}/>
                    <input type="text" id="comment" placeholder={'Введите комментарий'}/>
                    <label><input type="radio" name="category" id="earn" defaultChecked  />Зарплата</label>
                    <label><input type="radio" name="category" id="credit"/>Кредит</label>
                    <button onClick={()=>{ addNewOperation(wallet)}}>Добавить</button>
            </div>
        );

    return '';
};

const mapStateToProps = ( { wallets, activeWallet }) => {
    return ( { wallets, activeWallet } );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addNewOperation: (wallet) => dispatch(addNewOperation(wallet)),
        closeActiveBlock: () => dispatch(closeActiveBlock())
    }

};
export default withIWalletsService()(connect(mapStateToProps,mapDispatchToProps)(OperationsShowBlock));