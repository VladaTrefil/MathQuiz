import React from 'react'
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
    py: 4,
    px: 8,
    boxShadow: '0 5px 15px rgba(0,0,0,.1)'
  }
}

function AppBody() {
  return (
    <Box sx={styles.backgroundBox}>
      <Container>
        <Box sx={styles.innerBox}>
          App
        </Box>
      </Container>
    </Box>
  )
}

export default AppBody
