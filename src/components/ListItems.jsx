import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  selectTodos,
  deleteItem,
  toggleCompletion,
} from "../redux/Slice/toDoListSlice";
import {
  Box,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";

const ListItems = () => {
  const todos = useSelector(selectTodos); // Selecting todos from Redux store
  const dispatch = useDispatch(); // Initializing dispatch function

  // Function to handle deletion of an item
  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id)); // Dispatching deleteItem action
  };

  // Function to handle toggling completion status of an item
  const handleToggleCompletion = (id) => {
    dispatch(toggleCompletion(id)); // Dispatching toggleCompletion action
  };

  return (
    <Grid container justifyContent="center" style={{ marginTop: "2rem" }}>
      <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
        {/* Container for the list */}
        <Box
          border="2px solid black"
          borderRadius="8px"
          boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
          p={3}
          bgcolor="purple" // Background color of the container
        >
          {/* Rendering the list */}
          {todos.length !== 0 ? (
            <List>
              {todos.map(({ id, text, completed }) => (
                <ListItem
                  key={id}
                  sx={{
                    backgroundColor: completed ? "#e0f2f1" : "#fff",
                    borderRadius: "8px",
                    marginBottom: "8px",
                    "&:hover": {
                      backgroundColor: completed ? "#b2dfdb" : "#f0f0f0",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => handleToggleCompletion(id)} // Toggling completion status on click
                >
                  {/* Icon for completion status */}
                  <ListItemIcon>
                    <IconButton edge="start" aria-label="complete">
                      {completed ? (
                        <CheckCircleIcon color="primary" />
                      ) : (
                        <CheckCircleIcon color="action" />
                      )}
                    </IconButton>
                  </ListItemIcon>
                  {/* Text for todo item */}
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          color: completed ? "#388e3c" : "#000",
                          textDecoration: completed ? "line-through" : "none",
                        }}
                      >
                        {text}
                      </Typography>
                    }
                  />
                  {/* Icon for deletion */}
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleDeleteItem(id)} // Deleting item on click
                    >
                      <DeleteIcon style={{ color: "#f44336" }} />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          ) : (
            // Message for empty list
            <Typography variant="h6" align="center">
              List is Empty
            </Typography>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default ListItems;
