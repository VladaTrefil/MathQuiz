import React from 'react'
import Quiz from '../Quiz'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const styles = {
  backgroundBox: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerBox: {
    padding: 8,
    paddingBottom: 10,
    boxShadow: '0 5px 15px rgba(0,0,0,.1)'
  }
}

function AppBody() {
  return (
    <Box sx={styles.backgroundBox}>
      <Container>
        <Box sx={styles.innerBox}>
          <Quiz/>
        </Box>
      </Container>
    </Box>
  )
}

export default AppBody
