import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filter-slice";
import { Visibility } from "../../types/types";

export const Filter = () => {
  const dispatch = useDispatch();

  const visibility = useSelector((state: any) => {
    return state.filter.visibility;
  });

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(
      filterActions.changeVisibility({
        visibility: event.target.value as string,
      })
    );
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-visibility">Show</InputLabel>
        <Select
          labelId="select-visibility"
          id="select-visibility"
          value={visibility}
          label="Visibility"
          onChange={handleChange}
        >
          <MenuItem value={Visibility.All}>{Visibility.All}</MenuItem>
          <MenuItem value={Visibility.Active}>{Visibility.Active}</MenuItem>
          <MenuItem value={Visibility.Completed}>
            {Visibility.Completed}
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
