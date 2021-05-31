import Alert from 'react-bootstrap/Alert'

const Message = ({ balance }) => {
    return (
      <div>
      <Alert variant="info"> balance : {balance}</Alert>
      </div>
  )
}

export default Message
