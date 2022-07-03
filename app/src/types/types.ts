export interface ICatalogoueItem {
  id: string;
  name: string;
}

export interface ITodoItem {
  id: string;
  catalogueId: string;
  createdAt: number;
  content: string;
  title: string;
  deadline: number;
  completed: boolean;
}

export interface ICatalogueState {
  catalogue: { items: ICatalogoueItem[] };
}

export interface ITodosState {
  todos: { items: ITodoItem[] };
}
