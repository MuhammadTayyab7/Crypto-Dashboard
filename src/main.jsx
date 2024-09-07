import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

//import Chakra UI
import { ChakraProvider } from "@chakra-ui/react";
//import Ubantu font
import "@fontsource/ubuntu"; // Defaults to weight 400
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";
//import Custom theme
import { theme } from "./theme/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
