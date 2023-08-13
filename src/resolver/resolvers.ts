import { todos } from "../todo";


export const resolvers = {
  Query: {
    todos: () => todos,
    todo: (parent: any, args: any, ctx: any, info: any) => {
      const todo = todos.find((todo) => todo.id === Number(args.id));
      return todo;
    },
    todoNotCompleted: () => {
      const todoNotCompleted = todos.filter((todo) => todo.completed === false);
      return todoNotCompleted;
    }
  },
  Mutation: {
    addTodo: (parent: any, args: any, ctx: any, info: any) => {
      const newTodo = {
        id: todos.length + 1,
        title: args.title,
        task: args.task,
        completed: args.completed,
      };
      todos.push(newTodo);
      return newTodo;
    },
    updateTodo: (parent: any, args: any, ctx: any, info: any) => {
      const todo = todos.find((todo) => todo.id === Number(args.id));
      if (todo) {
        todo.title = args.title;
        todo.task = args.task;
        todo.completed = args.completed;
      }
      return todo;
    },
    deleteTodo: (parent: any, args: any, ctx: any, info: any) => {
      const todo = todos.find((todo) => todo.id === Number(args.id));
      if (todo) {
        todos.splice(todos.indexOf(todo), 1);
      }
      return todo;
    }
  }
};