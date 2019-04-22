import React from 'react';
import { connect } from 'react-redux';
import { addNewWallet, editThisWallet, removeThisWallet } from '../../actions'
import Spinner from '../spinner';

const WalletNavigation = ({wallets, onAddWallet, onChangeWallet, onRemoveWallet}) => {
    if(wallets) {
        return (
                <div className="purse__headerRight col-md-5 col-xl-5 text-right">
                    <a href="#" onClick={() => onAddWallet()} className="btn btn--add btn__icon">
                        +
                        Добавить кошелек
                    </a>
                    <a href="#" onClick={() => onChangeWallet(1)} className="btn btn--edit btn__icon">
                        <svg className="btn__icon-edit" xmlns="http://www.w3.org/2000/svg" width="17" height="18"
                             viewBox="0 0 400 600">
                            <path
                                d="M390.626 78.378a12.356 12.356 0 0 0 12.352-12.358V27.027a27.044 27.044 0 0 0-27-27.027h-261.3a12.354 12.354 0 0 0-8.734 3.62L3.618 106A12.363 12.363 0 0 0 0 114.733v370.24A27.053 27.053 0 0 0 27.013 512h348.964a27.044 27.044 0 0 0 27-27.027V296.29a12.351 12.351 0 1 0-24.7 0v188.684a2.307 2.307 0 0 1-2.3 2.311H27.014a2.313 2.313 0 0 1-2.31-2.311v-357.88h75.32a27.04 27.04 0 0 0 27-27.017v-75.36h248.95a2.306 2.306 0 0 1 2.3 2.311V66.02a12.356 12.356 0 0 0 12.351 12.358zm-288.3 21.7a2.3 2.3 0 0 1-2.3 2.3H42.178L102.324 42.2v57.88zm383.38.322l-14.534-14.543a41.829 41.829 0 0 0-59.107 0L296.7 201.28H96.6a12.358 12.358 0 0 0 0 24.72H272l-74.34 74.38H96.6a12.358 12.358 0 0 0 0 24.716h76.353l-.2.2a12.359 12.359 0 0 0-3.167 5.433L150.51 399.47H96.6a12.358 12.358 0 0 0 0 24.716h63.3l3.1-.4c.065-.017 77.957-21.642 77.957-21.642a12.347 12.347 0 0 0 5.43-3.169l239.32-239.435a41.879 41.879 0 0 0-.001-59.13zM177.644 394.073l10.082-36.326 26.227 26.24zm60.015-21.32l-38.7-38.72L396.5 136.383l38.7 38.72zm230.578-230.7l-15.563 15.57-38.7-38.722 15.563-15.57a17.1 17.1 0 0 1 24.168 0l14.534 14.54a17.125 17.125 0 0 1-.002 24.183z"
                            />
                        </svg>
                        Редактировать
                    </a>
                    <a href="#" onClick={() => onRemoveWallet(1)} className="btn btn--remove btn__icon">
                        <svg className="btn__icon-remove" xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                             viewBox="0 0 700 700">
                            <path
                                d="M394.027 315.78a13.507 13.507 0 0 1 0-19.562l209.59-209.59A30.188 30.188 0 0 0 612 67.069a30.188 30.188 0 0 0-8.384-19.562L564.493 8.384A30.186 30.186 0 0 0 544.931 0c-8.383 0-13.972 2.794-19.56 8.384l-209.59 209.59a13.507 13.507 0 0 1-19.562 0L86.63 8.384A30.187 30.187 0 0 0 67.069 0a30.187 30.187 0 0 0-19.562 8.384L8.384 47.507A30.188 30.188 0 0 0 0 67.069 30.188 30.188 0 0 0 8.384 86.63l209.59 209.59a13.507 13.507 0 0 1 0 19.562L8.384 525.37a27.013 27.013 0 0 0 0 39.123l39.123 39.123A30.188 30.188 0 0 0 67.069 612a30.188 30.188 0 0 0 19.562-8.384l209.588-209.59a13.507 13.507 0 0 1 19.562 0l209.59 209.59a27.012 27.012 0 0 0 39.123 0l39.123-39.123a27.012 27.012 0 0 0 0-39.123z"
                            />
                        </svg>
                        Удалить кошелёк
                    </a>
                </div>

        )
    }
    return <Spinner />;
};

const mapStateToProps = ({ wallets }) => {
    return{
        wallets
    }
};

const mapDispatchToProps = {
    onAddWallet: addNewWallet,
    onChangeWallet: editThisWallet,
    onRemoveWallet: removeThisWallet
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletNavigation);