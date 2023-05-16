import QRcode from "qrcode"
import{ useState } from "react"

function App() {
	const [url, setUrl] = useState('')
	const[qrcode, setQRcode] = useState('')

	const GenerateQRCode = () => {
		QRcode.toDataURL(url, {
			width: 400,
			margin: 2
		}, (err,url)=> {
		if(err) return console.error(err)

			console.log(url)
			setQRcode(url)
		})
	}

	return (
			<div className="app">
				<h1>QR code Generator</h1>
				<input 
				type ="text"
				placeholder="e.g https:// google.com"
				value ={url}
				onChange ={(evt) => setUrl(evt.target.value)}/>
				<button onClick={GenerateQRCode}>Generate</button>
				{qrcode &&<>
					<img src={qrcode} />
					<a href={qrcode} download="qrcode.png">Download</a>
					</>}	
				</div>
	)
}

export default App
