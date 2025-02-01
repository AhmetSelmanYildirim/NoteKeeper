import NoteList from "./components/NoteList";
import Input from "./components/Input";
import { NoteProvider } from "./contexts/NoteContext";

function App() {
  return (
    // NoteContext provider implement ediliyor.
    <NoteProvider>
      <Input></Input>
      <NoteList></NoteList>
    </NoteProvider>
  );
}

export default App;
