export interface TodosType {
    id: number;
    title: string;
    task: string;
    completed: boolean;
}

export const todos : TodosType[] = [
    {
      id:1,
      title: 'games',
      task: 'play football',
      completed: false,
    },
    {
      id:2,
      title: 'grocery',
      task: 'get milk',
      completed: true,
    },
    {
      id:3,
      title: 'games',
      task: 'get narnia game',
      completed: false,
    },
    {
      id:4,
      title: 'grocery',
      task: 'get eggs',
      completed: false,
    },
    {
      id:5,
      title: 'grocery',
      task: 'get water',
      completed: true,
    },
  ];