import { useContext, useState } from "react";
import { NoteContext } from "../contexts/NoteContext";

const Input = () => {
  const noteContext = useContext(NoteContext);
  const [text, setText] = useState("");
  if (!noteContext) {
    return <div>Context bekleniyor...</div>;
  }
  const { addNote } = noteContext;

  // add fonksiyonu buradan çağrılacak
  const handleAddNote = () => {
    if (!text) {
      alert("Not boş olamaz!");
    } else {
      addNote({ id: Date.now(), text });
      setText("");
    }
  };

  return (
    <div>
      <h2>Not Giriş</h2>
      <div style={{ padding: 30 }}>
        <div style={{ display: "flex", width: "100%" }}>
          <svg style={{ width: 50 }} fill={"blue"} viewBox="0 0 448 512">
            <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
          </svg>
          <input
            style={{ width: "100%", margin: "0px 10px" }}
            type="text"
            placeholder="Yeni Not"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            style={{
              backgroundColor: "blue",
              padding: "0.5em 1.5em ",
              cursor: "pointer",
              borderRadius: "6px",
            }}
            onClick={handleAddNote}
          >
            Not Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
