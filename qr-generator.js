// List all your system IDs (you can add all 20 IDs here)
const systems = [
  "SYS001", "SYS002", "SYS003", "SYS004", "SYS005",
  "SYS006", "SYS007", "SYS008", "SYS009", "SYS010",
  "SYS011", "SYS012", "SYS013", "SYS014", "SYS015",
  "SYS016", "SYS017", "SYS018", "SYS019", "SYS020"
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
  const url = `system.html?id=${id}`;

  // Generate the QR code
  QRCode.toCanvas(canvas, url, { 
    width: 200,
    color: { dark: '#000', light: '#fff' }
  }, (error) => {
    if (error) console.error(`Error generating QR for ${id}:`, error);
    else console.log(`QR for ${id} generated`);
  });
});
