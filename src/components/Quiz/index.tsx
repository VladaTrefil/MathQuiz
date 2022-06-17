import React from 'react'

import QuizForm from './QuizForm'
import QuizNotice from './QuizNotice'

import { newEquation, Equation } from '../../utils/equation'

import Box from '@mui/material/Box'

export type Status = {
  success: boolean
  submitted: boolean
  new: boolean
}

type QuizProps = {}

type QuizState = {
  status: Status
  submittedCount: number
  successCount: number
  equation: Equation | null
  noticeMessage: string | null
}

const styles = {
  outerBox: {
    maxWidth: 800,
    margin: '0 auto',
  },
}

class Quiz extends React.Component<QuizProps, QuizState> {
  constructor(props: any) {
    super(props)

    this.state = {
      status: {
        submitted: false,
        success: false,
        new: true,
      },
      submittedCount: 0,
      successCount: 0,
      equation: null,
      noticeMessage: null
    }
  }

  componentDidMount = () => {
    this.newEquation()
  }

  newEquation = () => {
    this.setState({
      equation: newEquation(1, 10, 'add'),
      status: {
        submitted: false,
        success: false,
        new: true,
      },
    })
  }

  renderStatus = (): string | null => {
    if (this.state.submittedCount > 0) {
      return `${this.state.successCount}/${this.state.submittedCount}`
    } else {
      return null
    }
  }

  onFormSubmit = (success: boolean) => {
    if (this.state.status.new) {
      this.setState({ submittedCount: this.state.submittedCount + 1 })

      if (success) {
        this.setState({ successCount: this.state.successCount + 1 })
      }
    }

    this.setState({
      status: {
        submitted: true,
        success: success,
        new: false,
      },
    })

    if (success) {
      this.newEquation()
      this.setState({ noticeMessage: 'Success' })
    } else {
      this.setState({ noticeMessage: 'Failure' })
    }
  }

  render() {
    return (
      <Box sx={styles.outerBox}>
        <QuizNotice message={this.state.noticeMessage} />

        <QuizForm equation={this.state.equation} onSubmit={this.onFormSubmit} />

        {this.renderStatus()}
      </Box>
    )
  }
}

export default Quiz
