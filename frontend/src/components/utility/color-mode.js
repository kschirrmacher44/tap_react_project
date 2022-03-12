import { createContext } from "react";

export const ColorMode = createContext({
  isAltColorMode: false,
  switchMode: () => {},
});
