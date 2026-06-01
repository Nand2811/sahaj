// Vercel Speed Insights integration
// This file initializes Vercel Speed Insights for tracking web performance metrics

import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    injectSpeedInsights({
      debug: false, // Set to true in development if you want to see console logs
    });
  });
} else {
  // DOM is already ready
  injectSpeedInsights({
    debug: false,
  });
}
