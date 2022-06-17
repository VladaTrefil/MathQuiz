import React from 'react'

import { Status } from './index'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

type QuizNoticeProps = {
  message: string | null
}

type QuizNoticeState = {
  message: string | null
  visible: boolean
  visibleInterval: number
}

const styles = {
  container: {
    width: '100%',
    m: '15px 0',
  },
  hidden: {
    display: 'none',
  },
  innerBox: {
    p: '15px 20px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, .1)',
  },
}

class QuizNotice extends React.Component<QuizNoticeProps, QuizNoticeState> {
  state = {
    message: null,
    visible: false,
    visibleInterval: 1500,
  }

  noticeTimeout: any = null

  setHideNoticeTimeout = () => {
    this.noticeTimeout = setTimeout(() => {
      this.setState({
        visible: false,
      })
    }, this.state.visibleInterval)
  }

  renderMessage = (): string | null => {
    if (this.props.message) {
      if (!this.state.visible) {
        this.setState({ visible: true })
        this.setHideNoticeTimeout()
      }

      return this.props.message
    }

    this.setState({ visible: false })
    return null
  }

  render = () => (
    <Box style={{...styles.container, ...styles.hidden }}>
      <Box style={styles.innerBox}>
        <Typography variant="h3">{this.renderMessage()}</Typography>
      </Box>
    </Box>
  )
}

export default QuizNotice
