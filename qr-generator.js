const systems = ["1", "2", "3", "4", "5", "6", "7"];

// Select the container
const container = document.querySelector('.container');

systems.forEach(id => {

  // 🔹 Wrapper for ONE QR (important for PDF)
  const qrBox = document.createElement('div');
  qrBox.className = 'qr-box';

  // Label
  const label = document.createElement('p');
  label.textContent = `Equipment ID : ${id}`;
  label.className = 'qr-label';

  // Canvas
  const canvas = document.createElement('canvas');

  qrBox.appendChild(label);
  qrBox.appendChild(canvas);
  container.appendChild(qrBox);

  // URL
  const url = `https://harshgit-coder.github.io/qr-project/system.html?id=${id}`;

  // Generate QR
  QRCode.toCanvas(canvas, url, { width: 200 }, (error) => {
    if (error) console.error(`QR error for ${id}`, error);
  });
});
