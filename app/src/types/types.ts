export interface ICatalogoueItem {
  id: string;
  name: string;
}

export interface ITodoItem {
  id: string;
  catalogueId: string;
  createdAt: Date;
  content: string;
  title: string;
  deadline: Date;
}

export interface ICatalogueState {
  catalogue: { items: ICatalogoueItem[] };
}

export interface ITodosState {
  todos: { items: ITodoItem[] };
}
