import * as ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import { DragDropList } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ChakraProvider>
    <DragDropList />
  </ChakraProvider>
);
