import { Divider, IconButton, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import { Fragment } from "react";
import { ITodoItem } from "../../types/types";
import { deleleTodoItem } from "../../store/todos-actions";
import { useDispatch } from "react-redux";

interface ITodoListItemProps {
  todoItem: ITodoItem;
  catalogueId: string;
}

export const TodoListItem = (props: ITodoListItemProps) => {
  const dispatch = useDispatch();
  const todoItem = props.todoItem;
  
  const handleDelete = () => {
    dispatch(deleleTodoItem(props.catalogueId, todoItem.id) as any);
  }

  return (
    <>
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={todoItem.title}
          secondary={
            <Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {todoItem.content}
              </Typography>
            </Fragment>
          }
        />
        <IconButton aria-label="delte todo item" onClick={handleDelete}>
          <ClearIcon />
        </IconButton>
      </ListItem>
      <Divider />
    </>
  );
};
