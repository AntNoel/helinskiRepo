import React from 'react';

export const Notification = ({ message }) => {
  const { type, text } = message;
  if (!text) return null;
  return (
    <div className={`${type === 'success' ? 'successMsg' : 'error'}`}>
      {text}
    </div>
  );
};

export default Notification;
