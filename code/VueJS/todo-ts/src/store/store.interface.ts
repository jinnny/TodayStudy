export interface Item {
  id: number;
  title: string;
  status: 'clear' | 'active';
}

export interface State {
  todoList: Item[];
}
