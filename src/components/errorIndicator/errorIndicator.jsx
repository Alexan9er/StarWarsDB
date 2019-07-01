import React from 'react';

import './errorIndicator.css';

const ErrorIndicator = () => (
  <div className="error-indicator">
    <span className="boom">BOOM!</span>
    <span className="error-indicator-text">
      something has gone terribly wrong{' '}
    </span>
    <span className="error-indicator-text">
      (but we already sent droids to fix it)
    </span>
  </div>
);

export default ErrorIndicator;
