import React, {Component} from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (event) => {
        this.setState({
            //тут так же можно описать форматирование
            label: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className="item-add-form d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="Введите новое дело"
                       value={this.state.label}/>
                <button className="btn btn-outline-secondary add-button"
                        disabled={this.state.label === ""}>
                    Добавить
                </button>
            </form>
        )
    }
}