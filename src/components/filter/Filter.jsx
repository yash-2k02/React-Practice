import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "./Filter.css";

export default function Filter({ setYear }) {
  const years = ["2027", "2026", "2025", "2024", "2023"];

  const [filterYear, setFilteredYear] = useState("2023");

  const handleYearChange = (e) => {
    console.log("Inside filter method componnet");
    const year = e.target.value;
    console.log(e.target.value);
    setFilteredYear(year);
    setYear(year);
    console.log(filterYear);
  };

  return (
    <div className="filter-wrapper">
      <FormControl
        className="form-control"
        sx={{ m: 1, minWidth: 120 }}
        size="small"
      >
        <label htmlFor="">Filter By Year</label>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={filterYear}
          onChange={handleYearChange}
        >
          {years.map((year) => {
            if (year == "2023") {
              return (
                <MenuItem value={year} selected>
                  {year}
                </MenuItem>
              );
            }
            return <MenuItem value={year}>{year}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
}
