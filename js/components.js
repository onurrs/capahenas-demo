// Component loader utility
(function() {
  // Load HTML component
  async function loadComponent(selector, filePath) {
    try {
      console.log(`Attempting to load: ${filePath}`);
      const response = await fetch(filePath);
      console.log(`Response status: ${response.status}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const html = await response.text();
      console.log(`HTML length: ${html.length}`);
      
      const element = document.querySelector(selector);
      if (element) {
        element.innerHTML = html;
        console.log(`Component loaded into ${selector}`);
        return true;
      } else {
        console.error(`Element not found: ${selector}`);
        return false;
      }
    } catch (error) {
      console.error(`Error loading component ${filePath}:`, error);
      
      // Fallback: show error message in the container
      const element = document.querySelector(selector);
      if (element) {
        element.innerHTML = `<div style="color: red; padding: 10px;">Failed to load ${filePath}</div>`;
      }
      return false;
    }
  }

  // Initialize components when DOM is loaded
  document.addEventListener('DOMContentLoaded', async () => {
    console.log('Loading components...');
    
    // Load header
    const headerLoaded = await loadComponent('#header-container', './components/header.html');
    console.log('Header loaded:', headerLoaded);
    
    // Load footer  
    const footerLoaded = await loadComponent('#footer-container', './components/footer.html');
    console.log('Footer loaded:', footerLoaded);
    
    // Reinitialize scripts after components are loaded
    console.log('Components loaded, reinitializing app...');
    if (window.initializeApp) {
      window.initializeApp();
      console.log('App reinitialized');
    }
    
    // Also reinitialize booking page if available
    if (window.initBookingPage) {
      window.initBookingPage();
      console.log('Booking page reinitialized');
    }
  });

  // Make loadComponent available globally if needed
  window.loadComponent = loadComponent;
})();