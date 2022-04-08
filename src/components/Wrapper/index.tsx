import React from 'react';
import './styles'

const Wrapper: React.FC = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Wrapper;