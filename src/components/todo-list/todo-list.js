import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';
import './todo-list.css';
//Функция - Список дел
const TodoList =({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
//массив элементов
// ... передает каждое свойство объекта
    const elements =  todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
                <li key={id} className="list-group-item">
                    <TodoListItem
                        {...itemProps }
                        onDeleted={() => onDeleted(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleDone={() => onToggleDone(id)}
                        />
                </li>);
    });
    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
};
export default TodoList;