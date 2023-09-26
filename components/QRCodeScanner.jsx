// components/QRCodeScanner.js
import React, { useState, useEffect } from 'react'
//import { Html5QrcodeScanner } from 'html5-qrcode'
import { QrScanner } from '@yudiel/react-qr-scanner'

function QRCodeScanner() {
	const [result, setResult] = useState('')

	const handleScan = (data) => {
		if (data) {
			setResult(data)
		}
	}

	const handleError = (error) => {
		console.error(error)
	}

	return (
		<div>
			{result ? (<>
				<button className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{result}</button>
                <button className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={()=>{setResult()}}>open camera</button></>
                ) : (
				<QrScanner
					onDecode={(result) => handleScan(result)}
					onError={(error) => handleError(error)}
				/>
			)}
		</div>
	)
}

export default QRCodeScanner
