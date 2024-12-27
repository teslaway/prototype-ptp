const QRCode = require('qrcode');
const path = require('path');

// The secret key from your template
const secretKey = 'UZ5T R7MN HXQD 5NSL HVIG HNW4 D47R OYGB';

// Define the path for the QR code image
const outputPath = path.join(__dirname, '../../public/images/QRcode.png');

// Generate QR code
QRCode.toFile(outputPath, secretKey, {
  errorCorrectionLevel: 'H',
  width: 200,
  margin: 2,
  color: {
    dark: '#000000',
    light: '#ffffff'
  }
}, function(err) {
  if (err) {
    console.error('Error generating QR code:', err);
    return;
  }
  console.log('QR code generated successfully!');
}); 