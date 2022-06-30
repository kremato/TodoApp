import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTodosData } from "../../store/todos-actions";
import { ITodosState } from "../../types/types";

export const TodoList = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const todos = useSelector((state: ITodosState) => {
    console.log(state.todos)
    return state.todos;
  });

  useEffect(() => {
    if (!id) {
      console.log('Nenasiel som id')
      id = "1";
    }
    dispatch(fetchTodosData(id) as any);
  }, [dispatch]);

  return (
    <>
      {todos.items.map((item) => {
        return (
          <div>{item.content}</div>
        );
      })}
    </>
  )
};
