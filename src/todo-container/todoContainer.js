import React, { Component } from 'react';
import TodoItem from '../todo-item';
import TodoFooter from '../todo-footer';

class TodoContainer extends Component {

    constructor(props){
        super(props);
        window.id = 0;
        this.state = {listData:[],showAll:true, showCompleted:false, showActive:false, leftItems:0};
        this.createTodo = this.createTodo.bind(this);
        this.completeTask = this.completeTask.bind(this);
    }

    componentDidUpdate(){

        var listData = this.state.listData;
        var stateCount = this.state.leftItems;

        var leftItemsCount = this.getleftItems(listData).length;
        
        if(leftItemsCount !== stateCount){
            this.setState({leftItems:leftItemsCount});
        }
        
    }

    createTodo(evt){
        if(evt.key === 'Enter' && evt.target.value){
            var listData = this.state.listData;
            window.id += 1; 
            listData.push({id:window.id, task:evt.target.value, isCompleted:false});
            this.setState({listData:listData});
            evt.target.value = "";
        }
    }

    completeTask(evt){
        var listData = this.state.listData;
        this.updateTaskStatus(evt.target.id, evt.target.checked, listData);
    }

    updateTaskStatus(taskId, status, listData){
          taskId = parseInt(taskId,10);
          listData.map(function(ele, index){
            if(ele.id === taskId){
                ele.isCompleted = status;
            }
          });

          this.setState({listData:listData});
    }

    getleftItems(listData){
        return listData.filter(function(ele, index){
            return !ele.isCompleted;
          });
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
                            <TodoItem listData={this.state.listData} completeTask={this.completeTask}/>
                            <TodoFooter count={this.state.leftItems}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoContainer