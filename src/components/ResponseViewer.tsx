import React from 'react';

interface ResponseViewerProps {
  response: string;
}

const ResponseViewer: React.FC<ResponseViewerProps> = ({ response }) => (
  <div>
    <h2>Response</h2>
    <pre style={{ background: '#eee', padding: 16 }}>{response}</pre>
  </div>
);

export default ResponseViewer;
