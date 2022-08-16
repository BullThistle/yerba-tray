import { BrowserWindow } from 'electron'
import { windowSizeDefaults } from '.'
import { join } from 'path'

const pageUrl = import.meta.env.VITE_DEV_SERVER_URL ?? ''

export const createWindow = (): BrowserWindow => {
  const { width, height } = windowSizeDefaults
  const window = new BrowserWindow({
    width,
    height,
    maxWidth: width,
    maxHeight: height,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    useContentSize: false,
    transparent: false,
    alwaysOnTop: true,
    webPreferences: {
      backgroundThrottling: false,
      preload: join(__dirname, '../../preload/dist/index.cjs')
    }
  })

  window.setMenu(null)
  window.loadURL(pageUrl)
  window.hide()

  window.on('blur', () => {
    if (!window.webContents.isDevToolsOpened()) window.hide()
  })
  window.on('close', event => {
    event.preventDefault()
    window.hide()
  })

  return window
}
