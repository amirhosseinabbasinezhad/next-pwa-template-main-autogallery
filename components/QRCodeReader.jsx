import React, { useState } from 'react';
import {QrReader} from 'react-qr-reader';

function QRCodeReader() {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      {result && <p>QR Code Content: {result}</p>}
    </div>
  );
}

export default QRCodeReader;