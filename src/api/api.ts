import axios from 'axios';

export interface ApiRequest {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body: string;
}

export async function sendRequest({ url, method, body }: ApiRequest): Promise<string> {
  try {
    const res = await axios({
      url,
      method,
      data: body ? JSON.parse(body) : undefined,
    });
    return JSON.stringify(res.data, null, 2);
  } catch (err: any) {
    return err.message;
  }
}
