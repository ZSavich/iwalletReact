import React, {Component} from 'react';

import './filter-for-date.css';

export default class FilterForDate extends Component {
    render () {

        return(
            <ul className="report__periodList">
                <li id="day" onClick={()=>{this.props.activeFilterDate('day')}} className="report__periodItem">день</li>
                <li id="week" onClick={()=>{this.props.activeFilterDate('week')}} className="report__periodItem">неделю</li>
                <li id="month" onClick={()=>{this.props.activeFilterDate('month')}} className="report__periodItem">месяц</li>
            </ul>
        )
    }
};