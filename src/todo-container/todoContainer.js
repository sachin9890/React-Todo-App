import React, { Component } from 'react';
import TodoItem from '../todo-item';

class TodoContainer extends Component {
    constructor(props){
        super(props);
        this.state = {listData:[]};
        this.createTodo = this.createTodo.bind(this);
        window.id = 0;
    }

    createTodo(evt){
        if(evt.key === 'Enter'){
            var listData = this.state.listData;
            window.id += 1; 
            listData.push({id:window.id, task:evt.target.value, isActive:true});
            this.setState({listData:listData});
            evt.target.value = "";
            console.log(this.state.listData);
        }
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="todolist not-done">
                            <h1>Todos</h1>
                            <input type="text" className="form-control add-todo" placeholder="Add todo" onKeyPress={this.createTodo}/>
                            <hr/>
                            <TodoItem listData={this.state.listData}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoContainer