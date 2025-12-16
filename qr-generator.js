// List all your system IDs (you can add all 20 IDs here)
// List all your equipment IDs (must match the "id" field in data.json)
// List all your equipment IDs (must match the "id" field in data.json)
const systems = [
  "EQP001",
  "EQP002",
  "EQP003",
  "EQP004",
  "EQP005",
  "EQP006",
  "EQP007"
];



// Select the container where QR codes will appear
const container = document.querySelector('.container');

// Generate a QR code for each system
systems.forEach(id => {
  // Create a canvas for each QR code
  const canvas = document.createElement('canvas');
  
  // Optional: Add a label above each QR
  const label = document.createElement('p');
  label.textContent = id;
  label.style.fontWeight = 'bold';
  label.style.marginTop = '10px';
  label.style.marginBottom = '5px';
  container.appendChild(label);
  
  container.appendChild(canvas);

  // URL pointing to the system detail page
  const url = `https://HarshGit-coder.github.io/qr-project/system.html?id=${id}`;


  // Generate the QR code
  QRCode.toCanvas(canvas, url, { 
    width: 200,
    color: { dark: '#000', light: '#fff' }
  }, (error) => {
    if (error) console.error(`Error generating QR for ${id}:`, error);
    else console.log(`QR for ${id} generated`);
  });
});
