import React, { Component } from 'react';

export default class FilterForReport extends Component {
    render () {
        return(
            <ul className="report__filterList col-xl-6">
                <li id="all" onClick={()=>{this.props.activeFilterType('all')}} className="report__filterItem">Все</li>
                <li id="costs" onClick={()=>{this.props.activeFilterType('costs')}} className="report__filterItem">Расходы</li>
                <li id="incomes" onClick={()=>{this.props.activeFilterType('incomes')}} className="report__filterItem">Доходы</li>
            </ul>
        )
    }
};