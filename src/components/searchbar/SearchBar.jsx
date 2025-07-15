import React from "react";
import { InputBase, Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

class SearchBar extends React.Component {
  state = { input: "" };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.input.trim());
  };

  render() {
    return (
      <Paper
        component="form"
        onSubmit={this.handleSearch}
        elevation={3}
        sx={{
          p: "4px 12px",
          maxWidth: 500,
          mb: 4,
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
          placeholder="Search for a stock (e.g., TCS, Infosys...)"
          value={this.state.input}
          onChange={this.handleChange}
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
}

export default SearchBar;
