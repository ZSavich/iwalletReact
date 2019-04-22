    export default class IWalletsService {

    data = [
        {
            id: 1,
            name: 'Семейный кошелек',
            balance: 600,
            operations: [
                {
                    type: 'incomes',
                    title: 'Депозит',
                    value: 750,
                    date: '04/11/2019',
                    rest: 2550,
                    category: 'earn',
                    comment: 'Начали вести кошелек. Первый депозит.'
                },
                {
                    type: 'costs',
                    title: 'Покупка одежды',
                    value: 550,
                    date: '04/15/2019',
                    rest: 2250,
                    category: 'clotnes',
                    comment: 'Купили несколько футболок и обувь детям.'
                },
                {
                    type: 'costs',
                    title: 'День рождения',
                    value: 150,
                    date: '04/20/2019',
                    rest: 2250,
                    category: 'food',
                    comment: 'Провели день рождение Маши в Макдональдсе.'
                },
                {
                    type: 'incomes',
                    title: 'Взнос',
                    value: 550,
                    date: '04/21/2019',
                    rest: 2550,
                    category: 'earn',
                    comment: 'Взнос в бюджет в честь получения зарплаты.'
                }
            ]
        },
        {
            id: 2,
            name: 'Личный счёт',
            balance: 1250,
            operations: [
                {
                    type: 'incomes',
                    title: 'Зарплата',
                    value: 2500,
                    date: '04/15/2019',
                    rest: 1050,
                    category: 'earn',
                    comment: 'Получил зарплату на неделю раньше. 50% на личный счёт.'
                },
                {
                    type: 'costs',
                    title: 'Заправка',
                    value: 2000,
                    date: '04/20/2019',
                    rest: 450,
                    category: 'food',
                    comment: 'Заправил свой Мерседес Е класса'
                },
                {
                    type: 'incomes',
                    title: 'Премия',
                    value: 750,
                    date: '04/21/2019',
                    rest: 1050,
                    category: 'earn',
                    comment: 'На работе дали премию.'
                }
            ]
        }
    ];

    getWallets() {
        return new Promise((resolve, reject)=> {
            setTimeout(() => {
                resolve(this.data)
            }, 500);
        })
    }
}