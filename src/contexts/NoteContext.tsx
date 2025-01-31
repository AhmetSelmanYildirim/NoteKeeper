import { createContext, useEffect, useState } from "react";
import { NoteContextType, Note as NoteType } from "../types";

export const NoteContext = createContext<NoteContextType | undefined>(
  undefined
);

export const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [noteList, setNoteList] = useState<NoteType[]>([]);

  const getNoteList = async () => {
    const notes = [
      { id: 1, text: "birinci" },
      { id: 2, text: "ikinci" },
      { id: 3, text: "üçüncü" },
    ];
    setNoteList(notes);
    return notes;
  };

  useEffect(() => {
    getNoteList();
  }, []);

  const deleteNote = (id: number) => {
    setNoteList((prev) => prev.filter((note) => note.id !== id));
  };
  const addNote = (note: NoteType) => {
    setNoteList((pre) => [...pre, note]);
  };

  const value: NoteContextType = {
    noteList,
    setNoteList,
    deleteNote,
    addNote,
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
