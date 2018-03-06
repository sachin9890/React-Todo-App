import React from 'react';

const TodoItem = (props) =>(
    <ul className="list-unstyled">
    {props.listData.map(item => {
        return <li className="ui-state-default" key={item.id}>
                  <div className="checkbox">
                    <label>
                        <input type="checkbox" value="" />{item.task}
                    </label>
                </div>
            </li>
        })}
        
    </ul>
    
)

export default TodoItem;