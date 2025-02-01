const { contextBridge, ipcRenderer } = require("electron");

// Main process ve render process arasındaki bağlantı kuruluyor.
// electronAPI nesnesi window nesnesine ekleniyor. electronAPI frontendde erişilebilir hale getiriliyor.

contextBridge.exposeInMainWorld("electronAPI", {
  // electronAPI'ye(frontend-renderer process) getNotes fonksiyonu ekleniyor. main.js'de (main process) get-notes ismiyle handle edilecek.
  getNotes: () => ipcRenderer.invoke("get-notes"),

  // electronAPI'ye addNote fonksiyonu ekleniyor. main.js'de add-note ismiyle handle edilecek.
  addNote: (note) => ipcRenderer.invoke("add-note", note),

  // electronAPI'ye deleteNote fonksiyonu ekleniyor. main.js'de delete-note ismiyle handle edilecek.
  deleteNote: (id) => ipcRenderer.invoke("delete-note", id),
});
