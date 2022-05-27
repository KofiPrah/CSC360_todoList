function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
      case "REGISTER":
        return action.username;
      case "LOGOUT":
        return "";
      default:
        return state;
      }
    }
    
    function todoReducer(state, action) {
      switch (action.type) {
      case "CREATE_TODO":
      const newTodo = {
        title: action.title,
        content: action.content,
        dateCreated: action.dateCreated, 
        dateCompleted: action.dateCompleted, 
        complete:action.complete,
        id:action.id        
      };
      return [newTodo, ...state];

      case "TOGGLE_TODO":
        return action.updatedTodos

      case "DELETE_TODO":
        return action.updatedTodos
      default:
        return state; 
      }
    }

export default function appReducer(state,action){
    return{
        user:userReducer(state.user,action),
        todos:todoReducer(state.todos,action)
    }
}