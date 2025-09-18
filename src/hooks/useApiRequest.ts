import { useState } from 'react';
import { sendRequest as apiSendRequest } from '../api/api';

export function useApiRequest() {
  const [url, setUrl] = useState<string>('');
  const [method, setMethod] = useState<'GET' | 'POST' | 'PUT' | 'DELETE'>('GET');
  const [body, setBody] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  const handleSendRequest = async () => {
    const res = await apiSendRequest({ url, method, body });
    setResponse(res);
  };

  return {
    url,
    setUrl,
    method,
    setMethod,
    body,
    setBody,
    response,
    setResponse,
    handleSendRequest,
  };
}
