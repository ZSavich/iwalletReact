import React from 'react';
import Spinner from '../spinner';
import ReportBlockItem from "../report-block-item/report-block-item";
import moment from 'moment';

import './report-block.css';

const renderReportBlocks = (operation, type, index) => {
    document.querySelectorAll('.report__filterItem').forEach((item)=>{item.classList.remove('report__filterItem--active')});
    document.getElementById(type).classList.add('report__filterItem--active');
    if(type==='all') {
        return (
            <tr key={index}>
                <ReportBlockItem operation={operation} type={type} />
            </tr>
        )
    } else if (type === operation.type) {
        return (
            <tr key={index}>
                <ReportBlockItem operation={operation} type={type} />
            </tr>
        )
    }
    return '';
};

const ReportBlock = ( { wallet , type, period } ) => {
    if(wallet) {
        const {operations} = wallet;
        const perOneDay = moment().subtract(1, 'day').unix();
        const perOneWeek = moment().subtract(1, 'week',).unix();
        const perOneMonth = moment().subtract(1, 'months',).unix();

        return (
            <React.Fragment>
                {
                    operations.map((item, index)=>{
                        document.querySelectorAll('.report__periodItem').forEach((item)=>{item.classList.remove('report__periodItem--active')});
                        document.getElementById(period).classList.add('report__periodItem--active');
                        switch(period) {
                            case 'day':{
                                if(moment(item.date, "MM/DD/YYYY").unix() >= perOneDay) {
                                    return renderReportBlocks(item, type, index);
                                }
                                break;
                            }

                            case 'week':{
                                if(moment(item.date, "MM/DD/YYYY").unix() >= perOneWeek) {
                                    return renderReportBlocks(item, type, index);
                                }
                                break;
                            }

                            case 'month':{
                                if(moment(item.date, "MM/DD/YYYY").unix() >= perOneMonth) {
                                    return renderReportBlocks(item, type, index);
                                }
                                break;
                            }
                            default:
                                return renderReportBlocks(item, type, index);
                        }
                    })
                }
            </React.Fragment>
        )
    }
    return <Spinner/>;
};

export default ReportBlock;