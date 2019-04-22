import React from 'react';
import Spinner from '../spinner';
import OperationsTableItem from '../operations-table-item';

import './operations-table.css';

const OperationsTable = ( {wallet, type} ) => {
    if(wallet) {
        const {operations} = wallet;

        return (
            <ul className="summary__list">
                {
                    operations.map((item, index)=>{
                        if(item.type===type) {
                            return (
                                <li key={index} className="summary__item summary__icon summary__icon--food">
                                    <OperationsTableItem operation={item} />
                                </li>
                            )
                        }
                        return '';
                    })
                }
            </ul>
        )
    }

    return <Spinner />
};

export default OperationsTable;