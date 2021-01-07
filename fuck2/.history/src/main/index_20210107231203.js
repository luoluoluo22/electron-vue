'use strict'

import { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    useContentSize: true,
    width: 1000,
    show: false, // 默认创建窗口时，不加载
    frame: false,
    opacity: 1, //  窗口透明度
    titleBarStyle: 'YES', // 标题样式
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true // 用于使用remote模块
    }
  })

  mainWindow.loadURL(winURL)

  mainWindow.once('ready-to-show', () => { mainWindow.show() }) //  当窗口页面加载完成时再显示，避免长时间白屏

  // 关闭窗口
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'  //  控制台不显示警告信息