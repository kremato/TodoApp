import { List } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import { ICatalogoueItem } from "../../types/types";
import { LandingListItem } from "./LandingListItem";

export const LandingList = (props: { items: ICatalogoueItem[] }) => {
  return (
    <List sx={{ width: "50%" }} aria-label="Todo lists catalogue">
      {props.items.map((item) => {
        return <LandingListItem key={uuidv4()} {...item} />;
      })}
    </List>
  );
};
