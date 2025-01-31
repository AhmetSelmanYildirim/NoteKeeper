import { createContext, useEffect, useState } from "react";
import { NoteContextType, Note as NoteType } from "../types";

export const NoteContext = createContext<NoteContextType | undefined>(
  undefined
);

export const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [noteList, setNoteList] = useState<NoteType[]>([]);

  const getNoteList = () => {
    window.electronAPI
      .getNotes()
      .then((data: NoteType[]) => {
        console.log("data :>> ", data);
        setNoteList(data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  useEffect(() => {
    getNoteList();
  }, []);

  const deleteNote = (id: number) => {
    window.electronAPI.deleteNote(id).then((updatedNotes: NoteType[]) => {
      setNoteList(updatedNotes);
    });
  };
  const addNote = (note: NoteType) => {
    window.electronAPI.addNote(note).then((addedNote: NoteType) => {
      setNoteList([...noteList, addedNote]);
    });
  };

  const value: NoteContextType = {
    noteList,
    setNoteList,
    deleteNote,
    addNote,
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
