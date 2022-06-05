import React from "react"

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

type QuizProps = {}

type QuizState = {
  operation: string,
  success: boolean,
  submitted: boolean
  submittedCount: number,
  successCount: number,
  variableA: number | null,
  variableB: number | null,
  result: number | null,
  userInput: number | string
}

const styles = {
  outerBox: {
    maxWidth: 800,
    margin: '0 auto'
  },
  heading: {
    textAlign: 'center'
  },
  equationBox: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 5
  }
}

class Quiz extends React.Component<QuizProps, QuizState> {
  constructor(props: any) {
    super(props)

    this.state = {
      operation: 'add',
      success: false,
      submitted: false,
      submittedCount: 0,
      successCount: 0,
      variableA: null,
      variableB: null,
      result: null,
      userInput: ""
    }
  }

  getRandNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min)
  }

  setNewEquation() {
    const a = this.getRandNumber(100, 1000)
    const b = this.getRandNumber(100, 1000)

    this.setState({
      variableA: a,
      variableB: b,
      result: a + b,
      userInput: ''
    })
  }

  componentDidMount() {
    this.setNewEquation()
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

    this.setState({
      submitted: true,
      submittedCount: this.state.submittedCount + 1
    })

    if (this.state.userInput === this.state.result) {
      this.setState({ 
        success: true,
        successCount: this.state.successCount + 1
      })

      this.setNewEquation()
   } else {
      this.setState({ success: false })
    }
  }

  renderNotice = (): string | null => {
    if (this.state.submitted) {
      if (this.state.success) {
        return "Success"
      } else {
        return "Failure"
      }
    } 

    return null
  }

  renderStatus = (): string | null => {
    if (this.state.submittedCount > 0) {
      return `${this.state.successCount}/${this.state.submittedCount}`
    } else {
      return null
    }
  }

  render() {
    return (
      <Box sx={styles.outerBox}>
        {this.renderNotice()}

        <Typography variant="h2" sx={styles.heading}>
          {this.state.variableA} + {this.state.variableB}
        </Typography>

        <form action="get" onSubmit={this.handleFormSubmit}>
          <Box sx={styles.equationBox}>
            <TextField
              label="Result"
              variant="outlined"
              type="number"
              onChange={this.handleInputChange}
              value={this.state.userInput}/>

            <Button variant="contained" size="large" sx={{ ml: 2, px: 5 }}>Submit</Button>
          </Box>
        </form>

        {this.renderStatus()}
      </Box>
    )
  }
}

export default Quiz
