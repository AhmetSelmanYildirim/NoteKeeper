import { useContext } from "react";
import { Note as NoteType } from "../types";
import { NoteContext } from "../contexts/NoteContext";
const Note = ({ note }: { note: NoteType }) => {
  //Delete fonksiyonu buradan çağrılacak
  const noteContext = useContext(NoteContext);
  if (!noteContext) {
    return <div>Context bekleniyor...</div>;
  }
  const { deleteNote } = noteContext;

  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "2rem",
        padding: "0px 10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px 0px",
      }}
    >
      <span
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          padding: "5px 10px",
          margin: "3px 0px",
        }}
      >
        {note.text}
      </span>

      <button
        style={{
          fontWeight: "700",
          background: "red",
          border: "none",
          height: "2rem",
          borderRadius: "25px",
          cursor: "pointer",
        }}
        onClick={() => {
          deleteNote(note.id);
        }}
      >
        sil
      </button>
    </div>
  );
};

export default Note;
