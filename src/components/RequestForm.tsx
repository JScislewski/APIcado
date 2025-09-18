import React from 'react';

interface RequestFormProps {
  url: string;
  setUrl: (url: string) => void;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  setMethod: (method: 'GET' | 'POST' | 'PUT' | 'DELETE') => void;
  body: string;
  setBody: (body: string) => void;
  onSend: () => void;
}

const RequestForm: React.FC<RequestFormProps> = ({ url, setUrl, method, setMethod, body, setBody, onSend }) => (
  <div>
    <input
      type="text"
      placeholder="Request URL"
      value={url}
      onChange={e => setUrl(e.target.value)}
      style={{ width: 400 }}
    />
    <select value={method} onChange={e => setMethod(e.target.value as RequestFormProps['method'])}>
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

export default RequestForm;
