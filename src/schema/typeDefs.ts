

export const typeDefs = `#graphql
  
type Todo {
  id: ID!
  title: String!
  task: String!
  completed: Boolean!
}

type Query {
  todos : [Todo]
  todo (id : ID!) : Todo
  todoNotCompleted : [Todo]
}

type Mutation {
  addTodo (title : String!, task : String!, completed : Boolean!) : Todo
  updateTodo (id : ID!, title : String!, task : String!, completed : Boolean!) : Todo
  deleteTodo (id : ID!) : Todo
}
`;