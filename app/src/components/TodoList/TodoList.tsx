import { List } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTodosData } from "../../store/todos-actions";
import { ITodosState } from "../../types/types";
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const todosList = useSelector((state: ITodosState) => {
    return state.todos.items;
  });

  useEffect(() => {
    if (!id) {
      console.log("Could find id");
      id = "1";
    }
    dispatch(fetchTodosData(id) as any);
  }, [dispatch]);

  return (
    <>
      <h1>TODO LIST</h1>
      <List sx={{ width: "50%" }} aria-label="Todo lists catalogue">
        {todosList.map((item) => {
          return <TodoListItem todoItem={item} catalogueId={id || '1'}/>;
        })}
      </List>
    </>
  );
};
