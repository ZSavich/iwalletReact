import React from 'react';
import WalletsList from '../wallets-list';
import OperationsTable from '../operations-table';
import {withIWalletsService} from '../hoc';
import {connect} from 'react-redux';
import { OperationsBalance, OperationsShowBlock } from '../operations-balance';
import { showActiveBlock, showActiveFilterType, showActiveFilterDate } from '../../actions';




import CabinetNav from '../cabinet-nav/cabinet-nav';
import Purse from '../purse/purse';


const CabinetPage = ( { activeWallet, wallets, activeBlock, showActiveBlockTwo, showActiveFilterType, showActiveFilterDate, filterType, filterDate }) => {

    const SelectActiveBlock = () => {
        if (activeBlock === 'costs')
            return <OperationsShowBlock show={'costs'}/>;
        if (activeBlock === 'incomes')
            return <OperationsShowBlock show={'incomes'}/>;
        return <OperationsShowBlock show={null}/>
    };

    if(activeWallet === -1){
        return (<React.Fragment>
                    <WalletsList wallets={wallets} />
                    <h4>Выберите кошелек</h4>
                </React.Fragment>)
    }

    return (
        <React.Fragment>
            <CabinetNav />
            <Purse />
            <SelectActiveBlock />
        </React.Fragment>
    )
};

const mapStateToProps = ({activeWallet, wallets, activeBlock, filterType, filterDate}) => {
    return ({
        activeWallet,
        wallets,
        activeBlock,
        filterType,
        filterDate
    })
};

const mapDispatchToProps = (dispatch) => {
    return {
        showActiveBlockTwo: (block) => dispatch(showActiveBlock(block)),
        showActiveFilterType: (type) => dispatch(showActiveFilterType(type)),
        showActiveFilterDate: (period) => dispatch(showActiveFilterDate(period))
    }

};

export default withIWalletsService()(connect(mapStateToProps,mapDispatchToProps)(CabinetPage));