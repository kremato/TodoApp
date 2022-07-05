import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { searchActions } from "../../store/search-slice";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  search: yup.string(),
});

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = (data: any) => {
    dispatch(searchActions.replaceSearchString({ search: data.search }) as any);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="search"
        label="Search for todos"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton
                aria-label="search"
                type="submit"
                onClick={() => handleSubmit(onSubmit)}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        variant="outlined"
        {...register("search")}
      />
    </form>
  );
};
