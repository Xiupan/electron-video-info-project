const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
const ffmpeg = require('fluent-ffmpeg')

app.on('ready', () => {
  const mainWindow = new BrowserWindow({})
  mainWindow.loadURL(`file://${__dirname}/index.html`)
})

ipcMain.on('videoSubmitted', () => {
  console.log(ffmpeg.ffprobe);
})
