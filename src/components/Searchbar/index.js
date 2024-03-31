import React from "react";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";

const useStyles = makeStyles((theme) => ({
  textField: {
    borderRadius: "4px",
    "& .MuiOutlinedInput-root": {
      borderRadius: "20px",
    },
    "& .MuiIconButton-edgeStart": {
      marginLeft: "-5px !important",
    },
    "& .MuiInputBase-inputTypeSearch": {
      padding: "2.5px 4px 2.5px 4px !important",
    },
    width: "200px",
  },
}));

const top100Films = [];

const Search = () => {
  const classes = useStyles();

  return (
    <>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        size="small"
        className={classes.textField}
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search..."
            InputProps={{
              ...params.InputProps,
              type: "search",
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton edge="start">
                    <SearchIcon className={classes.searchIcon} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </>
  );
};

export default Search;
