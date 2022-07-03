import { Divider, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ICatalogoueItem } from "../../types/types";

export const LandingListItem = ({ id, name }: ICatalogoueItem) => {
  return (
    <>
      <Divider />
      <Link to={`/catalogue/${id}`} key={uuidv4()}>
        <ListItem button>
          <ListItemText primary={name} />
        </ListItem>
      </Link>
      <Divider />
    </>
  );
};
