import { Header } from "./components/Header";
import { NavBar } from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation";
import { ReduxProvider } from "./providers/ReduxProvider";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/theme";

function App() {
  return (
    <ReduxProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="app">
            <NavBar />
            <div className="app-container">
              <Header />
              <Navigation />
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
