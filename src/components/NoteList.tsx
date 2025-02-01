import { useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";
import { Note as NoteType } from "../types";
import Note from "./Note";

const NoteList = () => {
  // Context import ediliyor.
  const noteContext = useContext(NoteContext);
  if (!noteContext) {
    return <div>Context bekleniyor...</div>;
  }

  // Componentte kullanılacak noteList destruct ediliyor.
  const { noteList } = noteContext;

  return (
    <div>
      <h2>Not Listesi</h2>
      {noteList && noteList.length > 0 ? (
        noteList.map((note: NoteType) => (
          <Note key={note.id} note={note}></Note>
        ))
      ) : (
        <div className="mt-[1em]">Görüntülenecek not yok</div>
      )}
    </div>
  );
};

export default NoteList;
