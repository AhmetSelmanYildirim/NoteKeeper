import { app, BrowserWindow, ipcMain } from "electron";
import Store from "electron-store";
import path from "path";
import "dotenv/config";

const __dirname = path.resolve();

let mainWindow;

const store = new Store({
  name: "notes",
  cwd: path.join(__dirname, "store"),
  defaults: { notes: [] },
});

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 400,
    minWidth: 600,
    webPreferences: {
      preload: path.join(__dirname, "src/preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (process.env.NODE_ENV === "development") {
    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile(path.join(__dirname, "./dist/index.html"));
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

ipcMain.handle("get-notes", () => {
  return store.get("notes");
});

ipcMain.handle("add-note", (event, note) => {
  const notes = store.get("notes", []);
  const updatedNotes = [...notes, note];

  store.set("notes", updatedNotes);
  return note;
});

ipcMain.handle("delete-note", (event, id) => {
  const notes = store.get("notes", []);
  const updatedNotes = notes.filter((note) => note.id !== id);

  store.set("notes", updatedNotes);
  return updatedNotes;
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
