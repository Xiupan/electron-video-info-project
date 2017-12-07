const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
const ffmpeg = require('fluent-ffmpeg')

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({})
  mainWindow.loadURL(`file://${__dirname}/index.html`)
})

ipcMain.on('videoSubmitted', (event, path) => {
  ffmpeg.ffprobe(path, (err, metadata) => {
    console.log(`Video length is: ${metadata.format.duration} seconds.`);
    mainWindow.webContents.send('videoGotMetadata', metadata.format.duration)
  })
})
