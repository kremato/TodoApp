import {
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Checkbox,
  Typography,
  Stack,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { Fragment } from "react";
import { ITodoItem } from "../../types/types";
import { deleleTodoItem, updateTodoItem } from "../../store/todos-actions";
import { useDispatch } from "react-redux";

interface ITodoListItemProps {
  todoItem: ITodoItem;
  catalogueId: string;
}

export const TodoListItem = (props: ITodoListItemProps) => {
  const dispatch = useDispatch();
  const todoItem = props.todoItem;
  const label = { inputProps: { "aria-label": "Todo item completed" } };

  const handleDelete = () => {
    dispatch(deleleTodoItem(props.catalogueId, todoItem.id) as any);
  };

  const handleUpdate = () => {
    dispatch(
      updateTodoItem(props.catalogueId, todoItem.id, !todoItem.completed) as any
    );
  };

  return (
    <>
      <Divider />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={todoItem.title}
          secondary={
            <Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {todoItem.content}
              </Typography>
            </Fragment>
          }
        />
        <Stack direction="column">
          <IconButton aria-label="delte todo item" onClick={handleDelete}>
            <ClearIcon />
          </IconButton>
          <Checkbox
            {...label}
            checked={todoItem.completed}
            onClick={handleUpdate}
          />
        </Stack>
      </ListItem>
      <Divider />
    </>
  );
};
