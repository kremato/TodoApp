import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { updateCatalogueData } from "../../store/catalogue-actions";
import { useDispatch } from "react-redux";

const schema = yup.object({
  title: yup.string().required(),
});

export const AddNewTodoList = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    dispatch(updateCatalogueData(data.title) as any);
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        aria-label="add new todo list"
        size="large"
        onClick={handleClickOpen}
      >
        <AddCircleIcon fontSize="inherit" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogTitle>Add new TODO list</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add new todo list, please enter list title here.
            </DialogContentText>
            <TextField
              margin="dense"
              id="title"
              label="New list title"
              type="text"
              fullWidth
              variant="standard"
              error={errors.title ? true : false}
              helperText={errors.title && `${errors.title.message?.toString()}`}
              {...register("title")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => handleSubmit(onSubmit)} type="submit">
              Add new list
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};
