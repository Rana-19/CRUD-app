import React, { useContext } from 'react'
import NavBar from './components/NavBar'
import Form from './components/Form'
import { Container, Paper, ThemeProvider, createTheme } from '@mui/material'
import ListGroup from './components/ListGroup'
import ThemeContext from './context/ThemeContext'



const App = () => {
  const { isDark } = useContext(ThemeContext)
  // console.log(isDark);
  const appTheme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light"
    }
  })

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Paper elevation={0}>
          <NavBar />
          <Container sx={{ padding: '30px 0px' }}>
            <Form />
            <ListGroup />
          </Container>
        </Paper>
      </ThemeProvider>
    </>
  )
}

export default App