import React from 'react';
import './todoFooter.css';

const TodoFooter = (props) =>(
    <div className="todo-footer">
        <div className="row">
            <div className="col-md-4">{props.count} Items Left</div>
            <div className={"col-md-2 sort-btn " + (props.active === 'All' ? 'active' : '')} onClick={() => props.updateSearchKey('All')}>All</div>
            <div className={"col-md-2 sort-btn " + (props.active === 'Active' ? 'active' : '')} onClick={() => props.updateSearchKey('Active')}>Active</div>
            <div className={"col-md-3 sort-btn " + (props.active === 'Completed' ? 'active' : '')} onClick={() => props.updateSearchKey('Completed')}>Completed</div>
        </div>
    </div>
)

export default TodoFooter;
