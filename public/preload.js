const { contextBridge, ipcRenderer } = require('electron');

console.log('Preload script loaded');

contextBridge.exposeInMainWorld('api', {
  sendRequest: async (params) => {
    const result = await ipcRenderer.invoke('api:sendRequest', params);
    if (result.error) throw new Error(result.error);
    return result.data;
  },
});
