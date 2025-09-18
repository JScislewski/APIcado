import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [response, setResponse] = useState('');

  const sendRequest = async () => {
    try {
      const res = await axios({
        url,
        method,
        data: body ? JSON.parse(body) : undefined,
      });
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (err) {
      setResponse(err.message);
    }
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>APIcado Client</h1>
      <div>
        <input
          type="text"
          placeholder="Request URL"
          value={url}
          onChange={e => setUrl(e.target.value)}
          style={{ width: 400 }}
        />
        <select value={method} onChange={e => setMethod(e.target.value)}>
          <option>GET</option>
          <option>POST</option>
          <option>PUT</option>
          <option>DELETE</option>
        </select>
      </div>
      <div>
        <textarea
          placeholder="Request Body (JSON)"
          value={body}
          onChange={e => setBody(e.target.value)}
          style={{ width: 400, height: 100 }}
        />
      </div>
      <button onClick={sendRequest}>Send</button>
      <h2>Response</h2>
      <pre style={{ background: '#eee', padding: 16 }}>{response}</pre>
    </div>
  );
}

export default App;
