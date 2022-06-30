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
  Typography,
} from "@mui/material";

const schema = yup
  .object({
    title: yup.string().required(),
  })
  .required();

export const AddNewTodoList = () => {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {console.log('form data'); console.log(data)};

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (addNew = false) => {
    if (addNew) {
      console.log('add new')
      return handleSubmit(onSubmit);
    }
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
      <Dialog open={open} onClose={() => handleClose()}>
        <DialogTitle>Add new TODO list</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add new todo list, please enter list title here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New list title"
            type="text"
            fullWidth
            variant="standard"
            {...register("title")}
            error={errors.title ? true : false}
            helperText="Incorrect entry."
          />
          {errors.title && <p>{errors.title.message}</p>}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose()}>Cancel</Button>
          <Button onClick={() => handleClose(true)}>Add new list</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
