import { useContext } from "react";
import { NoteContext } from "../contexts/NoteContext";
import { Note as NoteType } from "../types";
import Note from "./Note";

const NoteList = () => {
  const noteContext = useContext(NoteContext);
  if (!noteContext) {
    return <div>Context bekleniyor...</div>;
  }
  const { noteList } = noteContext;

  return (
    <div style={{}}>
      <h2>Not Listesi</h2>
      {noteList && noteList.length > 0 ? (
        noteList.map((note: NoteType) => (
          <Note key={note.id} note={note}></Note>
        ))
      ) : (
        <div>Görüntülenecek not yok</div>
      )}
    </div>
  );
};

export default NoteList;
