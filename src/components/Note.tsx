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
    <div className="border border-gray-300 rounded-[2rem] px-[10px] flex flex-wrap justify-between items-center my-[10px] w-full">
      <span className="text-[1.5rem] font-bold py-[5px] px-[10px] my-[3px] mx-0 text-left break-words w-[80%]">
        {note.text}
      </span>

      <button
        className="font-bold bg-red-500 text-white border-none h-[2rem] rounded-full px-4 cursor-pointer "
        // className="font-bold bg-red-500 text-white border-none h-[2rem] rounded-full px-4 cursor-pointer"
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
