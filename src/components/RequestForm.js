import React from 'react';

function RequestForm({ url, setUrl, method, setMethod, body, setBody, onSend }) {
  return (
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
      <div>
        <textarea
          placeholder="Request Body (JSON)"
          value={body}
          onChange={e => setBody(e.target.value)}
          style={{ width: 400, height: 100 }}
        />
      </div>
      <button onClick={onSend}>Send</button>
    </div>
  );
}

export default RequestForm;
