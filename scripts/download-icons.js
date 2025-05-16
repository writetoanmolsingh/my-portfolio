const fs = require('fs');
const path = require('path');
const https = require('https');

// Create directories if they don't exist
const assetsDir = path.join(__dirname, '../public/assets');
const iconsDir = path.join(assetsDir, 'icons');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir);
}

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir);
}

// List of icons to download from Flaticon
// Note: In a real implementation, you would need to replace these URLs with actual Flaticon URLs
// These are placeholder URLs for demonstration
const icons = [
  {
    name: 'frontend-icon.png',
    url: 'https://cdn-icons-png.flaticon.com/512/2721/2721626.png'
  },
  {
    name: 'backend-icon.png',
    url: 'https://cdn-icons-png.flaticon.com/512/2166/2166823.png'
  },
  {
    name: 'design-icon.png',
    url: 'https://cdn-icons-png.flaticon.com/512/681/681662.png'
  },
  {
    name: 'html-icon.png',
    url: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png'
  },
  {
    name: 'javascript-icon.png',
    url: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png'
  },
  {
    name: 'react-icon.png',
    url: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png'
  },
  {
    name: 'vue-icon.png',
    url: 'https://cdn-icons-png.flaticon.com/512/1183/1183622.png'
  },
  {
    name: 'nodejs-icon.png',
    url: 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png'
  },
  {
    name: 'express-icon.png',
    url: 'https://cdn-icons-png.flaticon.com/512/1183/1183672.png'
  },
  {
    name: 'mongodb-icon.png',
    url: 'https://cdn-icons-png.flaticon.com/512/1104/1104982.png'
  },
  {
    name: 'sql-icon.png',
    url: 'https://cdn-icons-png.flaticon.com/512/2772/2772128.png'
  },
  {
    name: 'figma-icon.png',
    url: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png'
  },
  {
    name: 'xd-icon.png',
    url: 'https://cdn-icons-png.flaticon.com/512/5968/5968559.png'
  },
  {
    name: 'photoshop-icon.png',
    url: 'https://cdn-icons-png.flaticon.com/512/5968/5968520.png'
  },
  {
    name: 'illustrator-icon.png',
    url: 'https://cdn-icons-png.flaticon.com/512/5968/5968472.png'
  }
];

// Download each icon
icons.forEach(icon => {
  const filePath = path.join(iconsDir, icon.name);
  const file = fs.createWriteStream(filePath);
  
  https.get(icon.url, response => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${icon.name}`);
    });
  }).on('error', err => {
    fs.unlink(filePath);
    console.error(`Error downloading ${icon.name}: ${err.message}`);
  });
});

console.log('Starting icon downloads...'); 