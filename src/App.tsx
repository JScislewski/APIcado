import React, { useState } from 'react';
import { sendRequest as apiSendRequest } from './api/api';
import RequestForm from './components/RequestForm';
import ResponseViewer from './components/ResponseViewer';

function App() {
  const [url, setUrl] = useState<string>('');
  const [method, setMethod] = useState<'GET' | 'POST' | 'PUT' | 'DELETE'>('GET');
  const [body, setBody] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handleSendRequest = async () => {
    const res = await apiSendRequest({ url, method, body });
    setResponse(res);
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>APIcado Client</h1>
      <RequestForm
        url={url}
        setUrl={setUrl}
        method={method}
        setMethod={setMethod}
        body={body}
        setBody={setBody}
        onSend={handleSendRequest}
      />
      <ResponseViewer response={response} />
    </div>
  );
}

export default App;
