import React from 'react';

const TodoFooter = (props) =>(
    <div className="todo-footer">
        <div className="row">
            <div className="col-md-5">{props.count} Items Left</div>
            <div className="col-md-2 sort-btn">All</div>
            <div className="col-md-2">Active</div>
            <div className="col-md-2">Completed</div>
        </div>
    </div>
)

export default TodoFooter;
