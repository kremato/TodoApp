import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@mui/material";

import { fetchCatalogueData } from "../../store/catalogue-actions";
import { ICatalogueState } from "../../types/types";
import { LandingList } from "./LadingList";
import { AddNewTodoList } from "./AddNewTodoList";

export const Landing = () => {
  const dispatch = useDispatch();
  const catalogue = useSelector((state: ICatalogueState) => {
    return state.catalogue;
  });

  useEffect(() => {
    dispatch(fetchCatalogueData() as any);
  }, [dispatch]);

  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        width="100%"
        height="100%"
      >
        <h1>TODO LIST CATALOGUE</h1>
        <LandingList />
        <AddNewTodoList />
      </Stack>
    </>
  );
};
