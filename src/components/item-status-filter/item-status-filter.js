import React, {Component} from 'react';
import './item-status-filter.css';
export default class ItemStatusFilter extends Component {
    //для удобства вынесли "значения" кнопок
    buttons = [
        {name: 'all', label: 'Все'},
        {name: 'active', label: 'Активные'},
        {name: 'done', label: 'Готово'}
    ];
    render() {
        const {filter, onFilterChange} = this.props;
        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter === name;
            //типо class уже зарезервирован и можно писать clazz - эт такой трюк java или хз
            const clazz = isActive ? 'btn-info' : 'btn-outline-secondary status-button';
            return (
                <button type="button"
                        className={`btn ${clazz}`}
                        key={name}
                onClick={()=>onFilterChange(name)}>
                    {label}</button>
            );
        });
        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
};

