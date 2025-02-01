import { useContext } from "react";
import { Note as NoteType } from "../types";
import { NoteContext } from "../contexts/NoteContext";
const Note = ({ note }: { note: NoteType }) => {
  // Context import ediliyor.
  const noteContext = useContext(NoteContext);
  if (!noteContext) {
    return <div>Context bekleniyor...</div>;
  }

  // Componentte kullanılacak deleteNote() fonksiyonu destruct ediliyor.
  const { deleteNote } = noteContext;

  return (
    <div className="border border-gray-300 rounded-[2rem] px-[10px] flex flex-wrap justify-between items-center my-[10px] w-full">
      <span className="text-[1rem] font-bold py-[5px] px-[10px] my-[3px] mx-0 text-left break-words w-[80%]">
        {note.text}
      </span>

      <button
        className="font-bold bg-red-500 text-white border-none h-[2em] rounded-full px-2 cursor-pointer "
        onClick={() => {
          deleteNote(note.id);
        }}
      >
        Sil
      </button>
    </div>
  );
};

export default Note;
