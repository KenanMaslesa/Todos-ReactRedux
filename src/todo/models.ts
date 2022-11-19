export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type DispatchType<PayloadType> = {
  payload?: PayloadType;
  type: string;
};
