import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addNewTodoItem } from "../../store/todos-actions";

const today = new Date();
const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

const schema = yup.object({
  title: yup.string().required(),
  content: yup.string().required(),
  deadline: yup
    .date()
    .default(today)
    .min(yesterday, "Date for new todo cannot be in the past")
    .required(),
});

interface INewTodoItemProps {
  catalogueId: string;
}

export const AddNewTodoLItem = ({ catalogueId }: INewTodoItemProps) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | null>(today);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    dispatch(
      addNewTodoItem(
        catalogueId,
        data.title,
        data.content,
        data.deadline
      ) as any
    );
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
              label="New list title"
              type="text"
              fullWidth
              variant="standard"
              error={errors.title ? true : false}
              helperText={errors.title && `${errors.title.message?.toString()}`}
              {...register("title")}
            />
            <TextField
              margin="dense"
              label="Todo description"
              type="text"
              fullWidth
              variant="standard"
              error={errors.content ? true : false}
              helperText={
                errors.content && `${errors.content.message?.toString()}`
              }
              {...register("content")}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack mt={3}>
                <Controller
                  control={control}
                  name="deadline"
                  render={({ field: { onChange }, formState }) => (
                    <>
                      <DesktopDatePicker
                        label="Deadline"
                        inputFormat="MM/dd/yyyy"
                        value={date}
                        onChange={(newValue) => {
                          setDate(newValue);
                          return onChange(newValue);
                        }}
                        renderInput={(params) => (
                          <>
                            <TextField
                              {...params}
                              helperText={
                                errors.deadline &&
                                `${errors.deadline.message?.toString()}`
                              }
                              error={!!formState.errors?.deadline}
                            />
                          </>
                        )}
                      />
                    </>
                  )}
                />
              </Stack>
            </LocalizationProvider>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={() => handleSubmit(onSubmit)} type="submit">
              Add new todo item
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
