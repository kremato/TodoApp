import { List } from "@mui/material";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { ICatalogueState } from "../../types/types";
import { LandingListItem } from "./LandingListItem";

export const LandingList = () => {
  const todoLists = useSelector(
    (state: ICatalogueState) => state.catalogue.items
  );

  return (
    <List sx={{ width: "50%" }} aria-label="Todo lists catalogue">
      {todoLists.map((item) => {
        return <LandingListItem key={uuidv4()} {...item} />;
      })}
    </List>
  );
};
