import React from 'react';


import todoStore from '../stores/todoStore';
import * as TodoActions from '../actions/TodoActions.js'

export class Home extends React.Component {
    
    constructor(){
        super();
        
        this.state = { data: todoStore.getAllTasks() };
    }
    
    componentDidMount(){
        todoStore.on('change', () => {
            this.setState({ 
    		    data: todoStore.getAllTasks()
    		});
        });
    }
    
    userClickOnDelete(task){
    	console.log('the tash was click',task);
    	TodoActions.deleteTask(task.id);
    }
    
    userEnterAddTask(evt, task){
        if(evt.keyCode == '13'){
        	console.log('the task',task);
            TodoActions.addTask(task);
         }
    }
    
    
	render() {
	    
	    var tasksToRender = this.state.data.map((task) => {
	        //debugger;
	       return <li key={task.id}><input type="checkbox" /> {task.title} <a onClick={() => this.userClickOnDelete(task)} href="#">delete</a></li>
	    });
	    
		return (
			<div>
				<h1>Simple TODO App</h1>
	            <h1 className="todo-header">Add task</h1>
                <input id="addToDo" type="text" onKeyUp={(evt) => this.userEnterAddTask(evt , {title:evt.target.value})} placeholder="Add to do here"/>
				<ul>{tasksToRender}</ul>
			</div>
		)
	}
};
