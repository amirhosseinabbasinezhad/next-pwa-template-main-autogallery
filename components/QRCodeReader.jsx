// components/QRCodeScanner.js
import React, { useState, useEffect } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
function QRCodeScanner() {
	const [result, setResult] = useState('')

	useEffect(() => {
		function onScanSuccess(decodedText, decodedResult) {
			// handle the scanned code as you like, for example:
			setResult(decodedText)
			console.log(`Code matched = ${decodedText}`, decodedResult)
		}

		function onScanFailure(error) {
			// handle scan failure, usually better to ignore and keep scanning.
			// for example:
			console.warn(`Code scan error = ${error}`)
		}

		let html5QrcodeScanner = new Html5QrcodeScanner(
			'reader',
			{ fps: 5, qrbox: { width: "80%", height: "80%" } },
			 /*verbose=  false*/
		)
        
		html5QrcodeScanner.render(onScanSuccess, onScanFailure)
	}, [])
	return (
		<div>
			
            {result ? <button>{result}</button>  : <div id='reader' width='600px'></div>}
		</div>
	)
}

export default QRCodeScanner
