import { useState } from "react";
import { InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    onSearch(value.trim());
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSearch}
      elevation={3}
      sx={{
        p: "4px 12px",
        margin:'auto',
        maxWidth: 500,
        my: 4,
        borderRadius: "16px",
        display: "flex",
        alignItems: "center",
        width: "100%",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, fontSize: "1rem" }}
        placeholder="Search by country or continent..."
        value={input}
        onChange={handleChange}
      />
      <IconButton
        type="submit"
        sx={{
          p: "8px",
          "&:focus": {
            outline: "none",
          },
          "&:focus-visible": {
            outline: "none",
            boxShadow: "none",
          },
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
