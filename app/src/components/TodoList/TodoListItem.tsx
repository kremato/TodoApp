import {
  Divider,
  IconButton,
  ListItem,
  Checkbox,
  Typography,
  Stack,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { ITodoItem } from "../../types/types";
import { deleleTodoItem, updateTodoItem } from "../../store/todos-actions";
import { useDispatch } from "react-redux";
import { format } from "date-fns";

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
      <ListItem className="list-item">
        <Stack sx={{ width: "90%" }}>
          <Typography>{props.todoItem.title}</Typography>
          <Typography variant="poster">
            {format(new Date(props.todoItem.deadline), "dd/MM/yyyy h:mm p")} (deadline)
          </Typography>
          <Typography>{props.todoItem.content}</Typography>
        </Stack>
        <Stack>
          <IconButton aria-label="delete todo item" onClick={handleDelete}>
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
