const initialState = {
    wallets: [],
    loaded: true,
    error: null,
    activeWallet: 1,
    activeBlock: null,
    filterType: 'all',
    filterDate: 'month'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_WALLETS_REQUEST':
            return {
                ...state,
                wallets: [],
                loaded: true,
                error: null,
            };

        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                wallets: [],
                loaded: false,
                error: action.payload,
            };

        case 'FETCH_WALLETS_SUCCESS':
            return {
                ...state,
                wallets: action.payload,
                loaded: false,
                error: null,
            };

        case 'CHANGE_ACTIVE_WALLET':
            return{
                ...state,
                activeWallet: action.payload
            };

        case 'ADD_NEW_WALLET':
            const newWallet = {
                ...action.payload,
                id: state.wallets.length + 1,
                operations: []
            };
            return {
                ...state,
                wallets: [
                    ...state.wallets.slice(0, newWallet.id),
                    newWallet,
                    ...state.wallets.slice(newWallet.id + 1)
                ]
            };

        case 'EDIT_THIS_WALLET':
            let editWallet = state.wallets.find((wallet)=> wallet.id === state.activeWallet);
            editWallet.name = prompt('Введите новый имя кошелька');
            return {
                ...state,
                wallets: [
                    ...state.wallets.slice(0, editWallet.id - 1),
                    editWallet,
                    ...state.wallets.slice(editWallet.id )
                ]
            };

        case 'REMOVE_THIS_WALLET':
            let removeWallet = state.wallets.find((wallet, index)=> wallet.id === state.activeWallet);
            const confirmRemove = window.confirm(`Вы точно желаете удалить кошелек ${removeWallet.name}?`);
            if(confirmRemove) {
                return {
                    ...state,
                    wallets: [
                        ...state.wallets.slice(0, removeWallet.id - 1),
                        ...state.wallets.slice(removeWallet.id)
                    ],
                    activeWallet: -1
                };
            }
            return state;

        case 'SHOW_ACTIVE_BLOCK':
            return {
                ...state,
                activeBlock: action.payload
            };

        case 'ADD_NEW_OPERATION':
            let ourWallet = state.wallets.find((wallet)=> wallet.id === state.activeWallet);
            ourWallet.operations = ourWallet.operations.concat(action.payload);
            ourWallet.balance = action.payload.rest;
            return {
                ...state,
                wallets: [
                    ...state.wallets.slice(0, ourWallet.id - 1),
                    ourWallet,
                    ...state.wallets.slice(ourWallet.id)
                ],
                activeBlock: null
            };

        case 'ACTIVE_FILTER_TYPE':
            return {
                ...state,
                filterType: action.payload
            };

        case 'ACTIVE_FILTER_DATE':
            return {
                ...state,
                filterDate: action.payload
            };

        case 'CLOSE_ACTIVE_BLOCK':
            return {
                ...state,
                activeBlock: null
            }

        default:
            return state;
    }
};

export default reducer;