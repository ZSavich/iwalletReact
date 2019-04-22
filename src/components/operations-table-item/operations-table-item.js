import React from 'react';

const OperationsTableItem = ( {operation} ) => {
    let classList = '';
    if(operation.type==='costs') {
        classList = 'summary__costs';
    }  else {
        classList = 'summary__inCome'
    }
    return (
        <React.Fragment>
            <p className="summary__title">{operation.title}</p>
            <i className={classList}>{operation.value}$</i><span className="summary__date">{operation.date}</span>
        </React.Fragment>
    )
}

export default OperationsTableItem;