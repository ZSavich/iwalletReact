import React from 'react';

const ReportBlockItem = ( {operation} ) => {
    let classList = '';
    if(operation.type==='incomes')
        classList = 'report__costs';
    else {
        classList = 'report__inCome'
    }
    return (
        <React.Fragment>
            <td className="report__table-title">Еда</td>
            <td>{operation.title}</td>
            <td className={classList}>{operation.value}$</td>
            <td className="report__balance">{operation.rest}$</td>
            <td className="report__date">{operation.date}</td>
            <td>{operation.comment}</td>
        </React.Fragment>
    )
}

export default ReportBlockItem;