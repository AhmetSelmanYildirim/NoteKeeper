import { Note as NoteType } from "./types";
declare global {
  interface Window {
    electronAPI: {
      getNotes: () => Promise<NoteType[]>;
      addNote: (note: NoteType) => Promise<NoteType>;
      deleteNote: (id: number) => Promise<NoteType[]>;
    };
  }
}

export {};
