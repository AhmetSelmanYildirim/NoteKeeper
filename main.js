import { app, BrowserWindow, ipcMain } from "electron";
import Store from "electron-store";
import path from "path";
import "dotenv/config";

const __dirname = path.resolve();
// main window
let mainWindow;

// Store yapısı kurgulanıyor.
const store = new Store({
  name: "notes",
  cwd: path.join(__dirname, "store"),
  defaults: { notes: [] },
});

// Uygulama ekranı oluşturuluyor ve konfigurasyonları yapılıyor.
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

  // Development sürecindeyken hot reload yapılması sağlanıyor.
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

// preload.js'de tanımlanan fonksiyonların atamaları yapılıyor.
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

// Pencere kapatıldığında uygulamanın kapatılmasını sağlar.
app.on("window-all-closed", () => {
  app.quit();
});
