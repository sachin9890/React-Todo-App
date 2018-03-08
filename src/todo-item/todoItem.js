import React from 'react';
import './todoItem.css';

const TodoItem = (props) =>(
    <ul className="list-unstyled">
    { props.listData.map(item => {
        return <li className="ui-state-default" key={item.id}>
                  <div className="checkbox">
                    <label>
                        <input className="zoom" type="checkbox" defaultChecked={item.isCompleted} id={item.id} onChange={props.completeTask}/>
                        <span className={"task " + (item.isCompleted ? 'complete' : '')}>{item.task}</span>               
                    </label>
                </div>
            </li>
        })}
    </ul>
)

export default TodoItem;