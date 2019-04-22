import React from 'react';
import {showActiveBlock, showActiveFilterDate, showActiveFilterType} from "../../actions";
import {connect} from "react-redux";
import {withIWalletsService} from "../hoc";
import WalletsList from '../wallets-list';

const CabinetNav = ({ wallets }) => {
    return (
        <section className="cabinetNav d-flex flex-column col-md-3 col-xl-2">
            <header className="cabinetNav__header">
                <h2><i className="greenColor">I</i>Wallet</h2>
                <div className="cabinetNav__profile">
                    <div className="cabinetNav__photo">
                        <img src={require("./photo.jpg")} alt="Алексей" />
                    </div>

                    <span className="cabinetNav__name">Алексей</span>
                    <a href="#" className="cabinetNav__edit">Редактировать</a>
                </div>
            </header>
            <div className="cabinetNav__purses purses">
                <h2 className="cabinetNav__title">Мои кошельки</h2>
                <WalletsList wallets={wallets} />
                <a href="#" className="cabinetNav__addWallet">+ Новый кошелёк</a>
            </div>
            <div className="cabinetNav__manage manage">
                <h2 className="cabinetNav__title">Управление кошельком</h2>
                <ul className="cabinetNav__list">
                    <li className="cabinetNav__item cabinetNav__item--active cabinetNav__item--icon cabinetNav__item--iconPurse">
                        <a className="cabinetNav__link">Мой баланс</a>
                    </li>
                    <li className="cabinetNav__item cabinetNav__item--icon cabinetNav__item--iconCosts">
                        <a href="#" className="cabinetNav__link">Мои расходы</a>
                    </li>
                    <li className="cabinetNav__item cabinetNav__item--icon cabinetNav__item--iconInCome">
                        <a href="#" className="cabinetNav__link">Мои доходы</a>
                    </li>
                </ul>
                <a href="#" className="manage__edit">Редактировать кошелек</a>
            </div>
            <a href="#" className="btn btn__goOut btn__icon btn__icon--goOut">
                <svg className="btn__goOut-icon" xmlns="http://www.w3.org/2000/svg" width="16px" height="17px"
                     viewBox="0 0 800 900">
                    <path
                        d="M357.31 754.16H148.6c-56.706-.067-102.663-46-102.747-102.716V148.557C45.936 91.85 91.894 45.907 148.6 45.84h212.107c12.658 0 22.92-10.262 22.92-22.92S373.365 0 360.707 0H148.6C66.57 0 0 66.723 0 148.557v502.886C0 733.446 66.74 800 148.6 800h208.71a22.92 22.92 0 0 0 19.976-34.425 22.92 22.92 0 0 0-19.976-11.416zM735 383.87L589.3 238.2c-8.963-8.91-23.444-8.888-32.38.047s-8.962 23.416-.055 32.38L663.5 377.25H198.355a22.92 22.92 0 0 0-19.976 34.425 22.92 22.92 0 0 0 19.976 11.416H663.5L556.854 529.71c-6.525 6.567-8.477 16.405-4.956 24.967s11.832 14.178 21.09 14.253a22.37 22.37 0 0 0 16.133-6.791l145.71-145.67a22.9 22.9 0 0 0 .171-32.598z" />
                </svg>
                Выйти
            </a>
        </section>
    )
};

const mapStateToProps = ({wallets}) => {
    return ({
        wallets
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        showActiveBlockTwo: (block) => dispatch(showActiveBlock(block)),
        showActiveFilterType: (type) => dispatch(showActiveFilterType(type)),
        showActiveFilterDate: (period) => dispatch(showActiveFilterDate(period))
    }

};

export default withIWalletsService()(connect(mapStateToProps,mapDispatchToProps)(CabinetNav));