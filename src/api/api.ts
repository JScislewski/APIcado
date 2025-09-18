
export interface ApiRequest {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body: string;
}

// TypeScript global declaration for window.api
interface ApiWindow extends Window {
  api?: {
    sendRequest: (params: ApiRequest) => Promise<any>;
  };
}
declare const window: ApiWindow;

export async function sendRequest(params: ApiRequest): Promise<string> {
  try {
    if (!window.api) {
      throw new Error('window.api is not defined. Preload script may not be loaded.');
    }
    const res = await window.api.sendRequest(params);
    return JSON.stringify(res, null, 2);
  } catch (err: any) {
    return err.message;
  }
}
