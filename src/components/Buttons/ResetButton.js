import React, { useState, useCallback } from 'react';
import './ResetButton.css';

const ResetButton = () => {
  const handleReset = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div className="ResetContainer">
      <button className="ResetButton" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};

export default ResetButton;
