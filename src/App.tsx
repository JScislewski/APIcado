
import React from 'react';
import { useApiRequest } from './hooks/useApiRequest';
import RequestForm from './components/RequestForm';
import ResponseViewer from './components/ResponseViewer';


function App() {
  const {
    url,
    setUrl,
    method,
    setMethod,
    body,
    setBody,
    response,
    handleSendRequest,
  } = useApiRequest();

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
