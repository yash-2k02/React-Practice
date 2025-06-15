import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./Form.css";
import { useState } from "react";
import heroImg from "../../assets/world-hero.webp";

function Form({ getFormDetails }) {
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState(null);
  // const [imgFile, setImgFile] = useState("");
  // const [category, setCategory] = useState("");

  const [formInput, setFormInput] = useState({
    title: "",
    date: null,
    imgFile: null,
    category: "",
  });

  const handleInputChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (newDate) => {
    setFormInput({
      ...formInput,
      date: newDate,
    });
  };

  const handleFileChange = (e) => {
    setFormInput({
      ...formInput,
      imgFile: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const imgUrl = URL.createObjectURL(formInput.imgFile);
    const cardInfo = {
      date: formInput.date,
      title: formInput.title,
      category: formInput.category,
      img: imgUrl,
    };
    getFormDetails(cardInfo);

    // Reset form after submission
    setFormInput({
      title: "",
      date: "",
      imgFile: "",
      category: "",
    });
  };

  return (
    <div className="form-main-container">
      <div className="form-left-section">
        <img className="hero-img" src={heroImg} alt="" />
        <p className="tag-line">Because Every Day Matters!</p>
      </div>
      <div className="form-right-section">
        <Paper elevation={5} className="form-wrapper-container">
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            sx={{ fontWeight: "bold", color: "#4CAF50" }}
          >
            Add New Global Event
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              name="title"
              label="Event Title"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              value={formInput.title}
              onChange={handleInputChange}
            />
            <TextField
              name="category"
              label="Category (e.g., Health, Environment)"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formInput.category}
              onChange={handleInputChange}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Select Event Date"
                value={formInput.date}
                onChange={handleDateChange}
                renderInput={(params) => (
                  <TextField {...params} fullWidth margin="normal" required />
                )}
              />
            </LocalizationProvider>
            <Button
              component="label"
              variant="outlined"
              sx={{ mt: 2, width: "100%" }}
            >
              Upload Event Image
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                required
              />
            </Button>
            <Button
              variant="contained"
              color="success"
              type="submit"
              sx={{ mt: 3, width: "100%", fontWeight: "bold" }}
            >
              Add Event
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
}

export default Form;
