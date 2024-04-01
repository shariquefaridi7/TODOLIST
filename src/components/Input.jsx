import React, { useState } from "react";
import { Box, TextField, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/Slice/toDoListSlice"; // Importing addItem action from Redux slice
import Fab from "@mui/material/Fab";

import AddIcon from "@mui/icons-material/Add";
import { toast } from "react-toastify";

const Input = () => {
  const [item, setItem] = useState(""); // State to store input value
  const dispatch = useDispatch(); // Dispatch function for Redux actions

  // Function to handle adding a new item
  const handleAddItem = (e) => {
    e.preventDefault(); // Preventing default form submission behavior

    if (item == "") {
      toast("Please enter item.."); // pop up  message to fill the input field
      return;
    }
    dispatch(addItem(item)); // Dispatching addItem action with the input value

    setItem(""); // Clearing the input field after adding the item
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="5rem"
      >
        <Stack spacing={2} direction="row">
          {/* Text field for entering the item */}
          <TextField
            label="Enter Items"
            variant="outlined"
            onChange={(e) => setItem(e.target.value)} // Updating the item state as the user types
            value={item} // Binding the value of the input field to the item state
            size="medium"
          />
          {/* Button to add the item */}
          <Fab
            color="success"
            aria-label="add"
            size="medium"
            onClick={handleAddItem} // Calling handleAddItem function when clicked
          >
            <AddIcon /> {/* Icon for the add button */}
          </Fab>
        </Stack>
      </Box>
    </>
  );
};

export default Input;
