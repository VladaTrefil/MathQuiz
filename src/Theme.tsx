import { ThemeProvider, createTheme } from '@mui/material';
import App from './App';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import 'normalize.css';

const theme = createTheme({
  palette: {},
  typography: {}
})

function Theme() {
  return (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  )
}

export default Theme
