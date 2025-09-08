const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Script to inject console capture into HTML files after build
function injectConsoleCapture() {
  const buildDir = path.join(process.cwd(), '.next');
  const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
  
  // Find all HTML files in the build directory
  const htmlFiles = glob.sync('**/*.html', { cwd: buildDir });
  
  htmlFiles.forEach(file => {
    const filePath = path.join(buildDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Only inject if not already present
    if (!content.includes('dashboard-console-capture.js')) {
      // Try to inject before closing head tag, or before closing html tag
      if (content.includes('</head>')) {
        content = content.replace('</head>', `${scriptTag}\n</head>`);
      } else if (content.includes('</html>')) {
        content = content.replace('</html>', `${scriptTag}\n</html>`);
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`Injected console capture script into ${file}`);
    }
  });
}

// Run the injection
try {
  injectConsoleCapture();
  console.log('Console capture script injection completed');
} catch (error) {
  console.error('Error injecting console capture script:', error);
}