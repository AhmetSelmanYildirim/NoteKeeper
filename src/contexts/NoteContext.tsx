import { createContext, useEffect, useState } from "react";
import { NoteContextType, Note as NoteType } from "../types";

// Context oluşturuluyor.
export const NoteContext = createContext<NoteContextType | undefined>(
  undefined
);

// Componentlerde kullanılmak üzere Context provider oluşturuluyor.
export const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [noteList, setNoteList] = useState<NoteType[]>([]);

  // Uygulama ilk çalıştığında var olan notlar storedan getiriliyor.
  const getNoteList = () => {
    window.electronAPI
      .getNotes()
      .then((data: NoteType[]) => {
        setNoteList(data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  useEffect(() => {
    getNoteList();
  }, []);

  // Not silme fonksiyonu
  const deleteNote = (id: number) => {
    window.electronAPI.deleteNote(id).then((updatedNotes: NoteType[]) => {
      setNoteList(updatedNotes);
    });
  };

  // Not ekleme fonksiyonu
  const addNote = (note: NoteType) => {
    window.electronAPI.addNote(note).then((addedNote: NoteType) => {
      setNoteList([...noteList, addedNote]);
    });
  };

  // Componentlerde kullanılacak değerler export ediliyor.
  const value: NoteContextType = {
    noteList,
    setNoteList,
    deleteNote,
    addNote,
  };

  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>;
};
