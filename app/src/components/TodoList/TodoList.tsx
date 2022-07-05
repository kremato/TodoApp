import { List } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { fetchTodosData } from "../../store/todos-actions";
import { IState, Visibility } from "../../types/types";
import { AddNewTodoLItem } from "./AddNewTodoItem";
import { Filter } from "./Filter";
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  const { id } = useParams();

  if (id === undefined) {
    return <div>Could not load id</div>;
  }
  const dispatch = useDispatch();

  const visibility = useSelector((state: IState) => {
    return state.filter.visibility;
  });

  const todosList = useSelector((state: IState) => {
    const begginignOfToday = new Date().setHours(0, 0, 0, 0);
    if (visibility === Visibility.Completed) {
      return state.todos.items.filter((item) => item.completed);
    }

    if (visibility === Visibility.Active) {
      return state.todos.items.filter(
        (item) => !item.completed && item.deadline >= begginignOfToday
      );
    }

    return state.todos.items;
  });

  useEffect(() => {
    dispatch(fetchTodosData(id) as any);
  }, [dispatch]);

  return (
    <>
      <h1>TODO LIST</h1>
      <Filter />
      <List
        sx={{ width: "50%", maxHeight: "70%", overflow: "auto" }}
        aria-label="Todo list"
      >
        {todosList.map((item) => {
          return (
            <TodoListItem todoItem={item} catalogueId={id} key={uuidv4()} />
          );
        })}
      </List>
      <AddNewTodoLItem catalogueId={id} />
    </>
  );
};
