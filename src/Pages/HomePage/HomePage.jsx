import { useEffect, useState } from "react";
import { SearchInput } from "../../Components";
import { useAuth } from "../../Context/AuthContext";
import { useNotes } from "../../Context/NoteContext";
import axios from "axios";
import parse from "html-react-parser";

export function HomePage() {
  const [notes, setNotes] = useState([]);
  const { authState } = useAuth();
  const { isNoteModalOpen } = useNotes();
  const { token } = authState;

  const getNotes = async () => {
    try {
      const resp = await axios.get("/api/notes", {
        headers: { authorization: token },
      });
      console.log("Homepage notes", resp.data);
      setNotes(resp.data.notes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNotes();
  }, [isNoteModalOpen]);

  console.log(notes);
  return (
    <main className="grow w-full h-auto p-8 flex justify-center gap-4 flex-col ">
      <div className="flex justify-center">
        <SearchInput />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {notes.map((note) => {
          return (
            <div
              key={note._id}
              style={{ background: note.color }}
              className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {note.title}
              </h5>

              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {parse(`${note.content}`)}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
