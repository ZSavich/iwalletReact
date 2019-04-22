import React from 'react';

import './wallets-list-item.css';

const WalletListItem = ({ wallet, changeActive }) => {
    const { name, balance } = wallet;

    let classList = 'purses__balance ';

    if(wallet.balance < 1000)
        classList = classList + 'purses__balance--red';
    else
        classList = classList + 'purses__balance--green';
    return (
        <React.Fragment>
            <a onClick={changeActive} className="cabinetNav__link">{name}</a>
            <b className={classList}>${balance}</b>
        </React.Fragment>
    )
};

export default WalletListItem;