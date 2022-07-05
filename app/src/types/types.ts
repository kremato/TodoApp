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

export interface IState {
  catalogue: { items: ICatalogoueItem[] };
  todos: { items: ITodoItem[] };
  filter: { visibility: Visibility };
  search: { search: string };
}

export enum Visibility {
  All = "All",
  Active = "Active",
  Completed = "Completed",
}
