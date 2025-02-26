import { RouterProvider } from "react-router-dom"
import router from "./constants/routes"
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#7AA899',
    },
    secondary: {
      main: '#27263D',
    },
    error: {
      main: '#8B7AA8',
    },
    info: {
      main: '#3B3A3D',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
      </RouterProvider>
    </ThemeProvider>
  )
}

export default App