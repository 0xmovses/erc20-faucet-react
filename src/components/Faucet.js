import { useState } from 'react';
import { ethers } from 'ethers'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Message from './Message'

const tokenAddress = "0xA4eE602c16C448Dc0D1fc38E6FC12f0d6C672Cbe"

const Faucet = (props) => {

  const [userAccount, setUserAccount] = useState();
  const [balance, setBalance] = useState()
  const [showBalance, setShowBalance] = useState(false)


  async function getBalance() {
    if (typeof window.ethereum !== 'undefined') {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(tokenAddress, props.tokenContract.abi, provider)
      const balance = await contract.balanceOf(account);
      console.log("Balance: ", balance.toString());
      setBalance(balance.toString());
      setShowBalance(true);
    }
  }

  async function faucet() {
    if (typeof window.ethereum !== 'undefined') {
      const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(tokenAddress, props.tokenContract.abi, signer);
      const faucet = contract.faucet(account[0], 100)
    }
  }
    return (
        <div>
        <Card style={{background: "rgba(227, 104, 222, 0.71)"}}>
        <Card.Body>
        <Card.Subtitle>recieve faucet ERC20 to your wallet
        </Card.Subtitle><br></br>
        <div className="d-grid gap-2">
        <Button onClick={faucet}>get faucet token!</Button>
        <Button onClick={getBalance} variant="warning">check my balance</Button>
        { showBalance ? <Message balance={balance}/> : null }
        </div>
        </Card.Body>
        </Card>
        </div>
    )
}

export default Faucet
