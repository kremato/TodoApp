export interface ICatalogoueItem {
  id: string;
  name: string;
}

export interface IState {
  catalogue: { items: ICatalogoueItem[] };
}
