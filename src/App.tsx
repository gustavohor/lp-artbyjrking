import Homepage from "@/pages/Home";
import { theme } from "@/config/theme";
import { ThemeProvider } from "styled-components";
import GlobalFonts from "./global/globalFonts";
import GlobalStyles from "./global/globalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyles />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
