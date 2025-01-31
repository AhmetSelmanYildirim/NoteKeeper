const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  getNotes: () => ipcRenderer.invoke("get-notes"),
  addNote: (note) => ipcRenderer.invoke("add-note", note),
  deleteNote: (id) => ipcRenderer.invoke("delete-note", id),
});
