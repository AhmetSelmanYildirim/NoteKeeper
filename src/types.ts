export interface Note {
  id: number;
  text: string;
}

export interface NoteContextType {
  noteList: Note[];
  setNoteList: React.Dispatch<React.SetStateAction<Note[]>>;
  deleteNote: (id: number) => void;
  addNote: (note: Note) => void;
}
