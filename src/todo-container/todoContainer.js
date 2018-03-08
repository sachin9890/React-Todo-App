import React, { Component } from 'react';
import TodoItem from '../todo-item';
import TodoFooter from '../todo-footer';

class TodoContainer extends Component {

    constructor(props){
        super(props);
        window.id = 0;
        this.state = {listData:[], leftItems:0, searchKey:'All'};
        this.createTodo = this.createTodo.bind(this);
        this.completeTask = this.completeTask.bind(this);
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
          var data = listData.map(function(ele, index){
            if(ele.id === taskId){
                ele.isCompleted = status;
            }
          });
          console.log(data);
          this.setState({listData:listData});
    }

    getleftItems(){
        var leftItems = this.getListItem('Active');
        return leftItems.length;
    }

    updateSearchKey(key){
        this.setState({searchKey:key});
    }

    getListItem(searchKey){
        switch(searchKey){
            case 'All':
                return this.state.listData;
            case 'Active':
                return this.state.listData.filter(function(ele){
                            return !ele.isCompleted;
                        });
            case 'Completed':
                return this.state.listData.filter(function(ele){
                            return ele.isCompleted;
                        });
            default : 
                break;                  
        }
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 margin-auto">
                        <div className="todolist not-done">
                            <h1>Todos</h1>
                            <input type="text" className="form-control add-todo" placeholder="Add todo" onKeyPress={this.createTodo}/>
                            <hr/>
                            <TodoItem listData={this.getListItem(this.state.searchKey)} completeTask={this.completeTask}/>
                            <TodoFooter updateSearchKey={this.updateSearchKey.bind(this)} count={this.getleftItems()} active={this.state.searchKey}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoContainer