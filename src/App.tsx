import Homepage from "@/pages/Home";
import { theme } from "@/config/theme";
import { ThemeProvider } from "styled-components";
import GlobalFonts from "./global/globalFonts";
import GlobalStyles from "./global/globalStyles";
import Footer from "@/components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyles />
      <Homepage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
