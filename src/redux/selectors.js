import { createSelector } from "reselect";

// export const todoListSelector =(state)=>
// {
//     const todoRemaining =state.todoList.filter((todo)=>{
//         console.log("eqweqw");
//         return todo.name.includes(state.filter.search)
//     });
//     return  todoRemaining;
// }
export const searchTextSelector = (state) => state.filter.search;
export const todoListSelector = (state) => state.todoList;

export const todoRemainingSelector = createSelector(
  searchTextSelector,
  todoListSelector,
  (text, todo) => {
    const todoRemaining = todo.filter((todo) => {
      return todo.name.includes(text);
    });
    return todoRemaining;
  }
);
// install npm add reselect
