import Homepage from "@/pages/Home";
import { theme } from "@/config/theme";
import { ThemeProvider } from "styled-components";
import GlobalFonts from "./global/globalFonts";
import GlobalStyles from "./global/globalStyles";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Coming from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <GlobalStyles />
      {/* <Navbar />
      <Homepage />
      <Footer /> */}
      <Coming />
    </ThemeProvider>
  );
}

export default App;
