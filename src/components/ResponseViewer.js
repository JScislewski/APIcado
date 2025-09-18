import React from 'react';

function ResponseViewer({ response }) {
  return (
    <div>
      <h2>Response</h2>
      <pre style={{ background: '#eee', padding: 16 }}>{response}</pre>
    </div>
  );
}

export default ResponseViewer;
