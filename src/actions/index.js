import moment from 'moment';

const walletsLoaded = (newWallets) => {
    return {
        type: 'FETCH_WALLETS_SUCCESS',
        payload: newWallets
    }
};
const walletsRequest = () => {
    return {
        type: 'FETCH_WALLETS_REQUEST'
    }
};

const walletsError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
};

const fetchWallets = (dispatch, iWalletsService) => () => {
    dispatch(walletsRequest());
    iWalletsService.getWallets().then((data)=>dispatch(walletsLoaded(data))).catch((error)=>dispatch(walletsError(error)));
};

export const changeActiveWallet = (walletId) => {
  return {
      type: 'CHANGE_ACTIVE_WALLET',
      payload: walletId
  }
};


export const addNewWallet = () => {
    const newWallName = prompt('Введите название кошелька:');
    const newWallBalance = prompt('Баланс');

    return {
        type: 'ADD_NEW_WALLET',
        payload: {
            name: newWallName,
            balance: newWallBalance
        }
    }
};

export const editThisWallet = (walletId) => {
    return {
        type: 'EDIT_THIS_WALLET',
        payload: walletId
    }
};

export const removeThisWallet = (walletId) => {
    return {
        type: 'REMOVE_THIS_WALLET',
        payload: walletId
    }
};

export const showActiveBlock = (block) => {
    return {
        type: 'SHOW_ACTIVE_BLOCK',
        payload: block
    }
};

export const showActiveFilterType = (type) => {
    return {
        type: 'ACTIVE_FILTER_TYPE',
        payload: type
    }
};

export const showActiveFilterDate = (period) => {
    return {
        type: 'ACTIVE_FILTER_DATE',
        payload: period
    }
};

export const closeActiveBlock = () => {
    return {
        type: 'CLOSE_ACTIVE_BLOCK'
    }
}

export const addNewOperation = (wallet) => {
    const type = document.getElementById('type').value;
    const title = document.getElementById('name').value;
    const value = document.getElementById('value').value;
    const comment = document.getElementById('comment').value;
    let rest = wallet.balance;
    console.log(type);
    if(type==='costs') {
        rest = wallet.balance - value;
    }
    if (type==='incomes') {
        rest = wallet.balance + +value;
    }
    const date = moment().format('L');
    const category = document.querySelector('input[name="category"]:checked').id;
    let operation = {type,
        title,
        value,
        comment,
        date,
        rest,
        category};
    return {
        type: 'ADD_NEW_OPERATION',
        payload: operation
    }
};

export {
    fetchWallets
}