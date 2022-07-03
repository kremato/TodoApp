import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchCatalogueData } from "../../store/catalogue-actions";
import { todosActions } from "../../store/todos-slice";
import { LandingList } from "./LadingList";
import { AddNewTodoList } from "./AddNewTodoList";

export const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalogueData() as any);
    dispatch(todosActions.replaceTodos({ items: [] }) as any);
  }, [dispatch]);

  return (
    <>
      <h1>TODO LIST CATALOGUE</h1>
      <LandingList />
      <AddNewTodoList />
    </>
  );
};
