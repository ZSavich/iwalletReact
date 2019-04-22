import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withIWalletsService } from '../hoc';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import WalletListItem from '../wallets-list-item';
import { fetchWallets, changeActiveWallet } from "../../actions";

const WalletsList = ( { wallets, activeWallet, changeActive }) => {
    return (
        <ul className="cabinetNav__list">
            {
                wallets.map((wallet,index)=>{
                    let classList = 'cabinetNav__item';
                    if (wallet.id === activeWallet) {
                        classList = classList + ' cabinetNav__item--active';
                    }
                    return (<li key={index} className={classList} ><WalletListItem changeActive={()=>{changeActive(wallet.id)}} wallet={wallet} /></li>)
                })
            }
        </ul>
    )
};

class IWalletListContainer extends Component {

    componentDidMount() {
        this.props.fetchWallets();
    }

    render() {
        const { wallets, loaded, error, changeActive, activeWallet} = this.props;
        if(loaded) {
            return <Spinner />
        }

        if(error) {
            return <ErrorIndicator />
        }

        return <WalletsList changeActive={changeActive} activeWallet={activeWallet} wallets={wallets}/>
    }
}

const mapStateToProps = ( { wallets, activeWallet }) => {
    return ( { wallets, activeWallet } );
};

const mapDispatchToProps = (dispatch, { iWalletsService }) => {
    return {
        fetchWallets: fetchWallets(dispatch, iWalletsService),
        changeActive: (id) => dispatch(changeActiveWallet(id))
    }

};
export default withIWalletsService()(connect(mapStateToProps,mapDispatchToProps)(IWalletListContainer));