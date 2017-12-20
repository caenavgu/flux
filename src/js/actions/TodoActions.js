import todoDispatcher from '../dispatchers/todoDispatcher';

export function addNewTask(task){
    
      todoDispatcher.dispatch({
        actionType: 'TODO_ADD_TASK',
        data: task
      });
    
}

export function deleteTask(taskId){
    console.log('the action was dispatch');
      todoDispatcher.dispatch({
        actionType: 'DELETE_TASK',
        data: taskId
      });
    
}

export function addTask(taskId){
    console.log('the action was dispatch');
      todoDispatcher.dispatch({
        actionType: 'ADD_TASK',
        data: taskId
      });
    
}
