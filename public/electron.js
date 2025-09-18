const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const axios = require('axios');


function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  win.loadURL('http://localhost:3000');
}


app.whenReady().then(createWindow);

ipcMain.handle('api:sendRequest', async (event, { url, method, body }) => {
  try {
    const res = await axios({
      url,
      method,
      data: body ? JSON.parse(body) : undefined,
    });
    return { data: res.data };
  } catch (err) {
    return { error: err.message };
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
