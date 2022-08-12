import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { App } from "./App";
import "./App.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { apiSlice } from "./features/api/apiSlice";

// eslint-disable-next-line no-unused-vars
const colors = {
  brand: {
    900: "#4A5568",
    800: "#2D3748",
    700: "#1A202C",
  },
};

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#1A202C",
        color: "white",
      },
      // styles for the `a`
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </Provider>
    </ApiProvider>
  </React.StrictMode>
);
