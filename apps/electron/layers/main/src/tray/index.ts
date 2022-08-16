import { BrowserWindow, Tray } from 'electron'
import { initTray } from './tray'
import { createWindow } from './window'

export const windowSizeDefaults = {
  width: 300,
  height: 450
}

export const createTrayApp = () => {
  const window = createWindow()
  initTray(window)
}
