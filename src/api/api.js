import axios from 'axios';

export async function sendRequest({ url, method, body }) {
  try {
    const res = await axios({
      url,
      method,
      data: body ? JSON.parse(body) : undefined,
    });
    return JSON.stringify(res.data, null, 2);
  } catch (err) {
    return err.message;
  }
}
