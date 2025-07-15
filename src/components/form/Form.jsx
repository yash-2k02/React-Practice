import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "./Form.css";

import { useState } from "react";

function Form() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const setData = (formData) => {
    setTitle(formData.get("title"));
    setDate(formData.get("date"));
  };


  const [day, month, year] = date.split(",");
  const formattedDate = new Date(`${year}-${month}-${day}`);
  
  const cardInfo = {
    title: title,
    date: formattedDate
  };

  console.log(cardInfo);
  
  return (
    <Container maxWidth="sm">
      <Box
        className="form-wrapper-container"
        sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2 }}
      >
        <Typography variant="h4" gutterBottom>
          Form
        </Typography>
        <form action={setData}>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            name="title"
            margin="normal"
            required
          />
          <LocalizationProvider fullWidth dateAdapter={AdapterDateFns}>
            <DatePicker
              className="width-full"
              name="date"
              label="Select Date"
              format="MMMM, dd, yyyy"
            />
          </LocalizationProvider>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Form;
