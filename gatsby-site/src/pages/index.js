import React, {useState, useEffect} from "react"
import "../styles/index.scss"
import WalletProgress from '../components/wallet-progress'
import SpecialButton from '../components/special-button'
import Wallet from '../components/wallet'

const DEFAULT_DATA = {
  "walletValue": '00.0',
  "walletTarget": '0',
  "firstName": "No name"
}
// I am using this CORS_PROXY as adding required headers was not sufficient and I still
// could not call the API due to CORS security errors
const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
const API = 'http://buildingbrands.co/react-test/wallet.json'

const Banner = () => {
  const [data, setData] = useState(DEFAULT_DATA)
  const [walletProgressPercent, setWalletProgressPercent] = useState(0)

  useEffect(() => {
    setWalletProgressPercent(Math.ceil(data.walletValue / data.walletTarget * 100))
  }, [data])

  useEffect(() => {
    fetch(`${CORS_PROXY_URL}${API}`)
      .then((res) =>  res.json())
      .then(d => setData(d))
  }, [])

  return (
    <div className="banner">
      <div className="banner__content">
        {/* I did my best in terms of semantic tags but in real life I will probably get advice from the SEO experts. */}
        <h4 className="banner__welcome">Welcome {data.firstName}</h4>
        <h1 className="banner__title">More cash in your wallet from everyday shopping</h1>
        <p className="banner__copy">
          {/* I am not sure if the designers mind where the text breaks.
          For demo purposes I did manually break it as per the PDF */}
          Shop for things you’d buy anyway with over 3,000 brands – online&nbsp;
          <br/>
          in store – and watch the cash stack up in your wallet.
        </p>
        <SpecialButton link="www.google.com">Activate Now</SpecialButton>
      </div>
      <WalletProgress percent={walletProgressPercent} y="150" />
      <Wallet value={data.walletValue} target={data.walletTarget}></Wallet>
    </div>
  )
}

export default function Home() {
  return <Banner />
}
