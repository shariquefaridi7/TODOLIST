import { useState } from "react";
import Input from "./components/Input";
import ListItems from "./components/ListItems";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Input />
      <ListItems />
    </>
  );
}

export default App;
