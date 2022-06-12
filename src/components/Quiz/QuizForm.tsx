import React from 'react'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type Props = {
  equation: any
  onSubmit: Function
}

type State = {
  userInput: number | string
}

const styles = {
  heading: {
    textAlign: 'center',
  },
  equationBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 5,
  },
}

class QuizForm extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)

    this.state = {
      userInput: '',
    }
  }

  handleInputChange = (e: any) => {
    e.preventDefault()

    if (e.target.value !== '') {
      this.setState({ userInput: parseInt(e.target.value) })
    } else {
      this.setState({ userInput: '' })
    }
  }

  handleFormSubmit = (e: any) => {
    e.preventDefault()
    if (!this.props.equation) return

    this.setState({ userInput: '' })

    const success = this.props.equation.result === this.state.userInput
    this.props.onSubmit(success)
  }

  render = () => this.props.equation ? (
    <form action="get" onSubmit={this.handleFormSubmit}>
      <Typography variant="h2" sx={styles.heading}>
        {this.props.equation.text}
      </Typography>

      <Box sx={styles.equationBox}>
        <TextField
          label="Result"
          variant="outlined"
          type="number"
          onChange={this.handleInputChange}
          value={this.state.userInput}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ ml: 2, px: 5 }}
        >
          Submit
        </Button>
      </Box>
    </form>
  ):null
}

export default QuizForm
