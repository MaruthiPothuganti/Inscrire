import { useTags } from "../../Context/TagContext";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import { useEffect, useState } from "react";
import parse from "html-react-parser";

export function Labels() {
  const [allNotes, setAllNotes] = useState([]);
  const { tagState } = useTags();
  const { authState } = useAuth();
  const { token } = authState;

  const getNotes = async () => {
    try {
      const resp = await axios.get("/api/notes", {
        headers: { authorization: token },
      });
      setAllNotes(resp.data.notes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNotes();
  }, [tagState]);

  return (
    <main className="grow w-full h-auto p-8 flex justify-center gap-4 flex-col">
      <h1 className="text-2xl font-bold text-center">Labels</h1>
      <div>
        {allNotes.length > 0 ? (
          <div>
            {tagState.tags.map((tag) => (
              <div key={tag._id}>
                <h2 className="text-lg font-bold">{tag.tag}</h2>
                <div className="p-2  flex flex-wrap gap-2">
                  {allNotes.map((note) =>
                    note.tags.includes(tag.tag) ? (
                      <div
                        key={note._id}
                        style={{ background: note.color }}
                        className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
                      >
                        <h5
                          className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                          style={{
                            color:
                              note.color === "#FFFFFF" ? "#000000" : "#FFFFFF",
                          }}
                        >
                          {note.title}
                        </h5>

                        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate w-full">
                          {parse(`${note.content}`)}
                        </div>
                        <div className="flex justify-between py-2">
                          <div>
                            <small>Priority : {note.priority}</small>
                          </div>
                          <div className="flex gap-1">
                            {note.tags.map((item, index) => {
                              return (
                                <small
                                  key={index}
                                  className="text-white bg-pink-500 p-1 rounded-md"
                                >
                                  {item}
                                </small>
                              );
                            })}
                          </div>
                        </div>
                        <div className="flex justify-between gap-2">
                          <div>
                            <p className="text-xs">{note.createdAt}</p>
                          </div>
                        </div>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <img
              className="w-96 h-auto"
              src="https://res.cloudinary.com/doo5jbomi/image/upload/v1659354189/NotesApp/93134-not-found_at3g7b.gif"
              alt="empty"
            />
          </div>
        )}
      </div>
    </main>
  );
}

{
  /* <div className="flex items-center justify-center">
  <img
    className="w-96 h-auto"
    src="https://res.cloudinary.com/doo5jbomi/image/upload/v1659354189/NotesApp/93134-not-found_at3g7b.gif"
    alt="empty"
  />
</div>; */
}

{
  /* <div
  key={note._id}
  style={{ background: note.color }}
  className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
>
  <h5
    className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    style={{
      color: note.color === "#FFFFFF" ? "#000000" : "#FFFFFF",
    }}
  >
    {note.title}
  </h5>

  <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate w-full">
    {parse(`${note.content}`)}
  </div>
  <div className="flex justify-between py-2">
    <div>
      <small>Priority : {note.priority}</small>
    </div>
    <div className="flex gap-1">
      {note.tags.map((item, index) => {
        return (
          <small key={index} className="text-white bg-pink-500 p-1 rounded-md">
            {item}
          </small>
        );
      })}
    </div>
  </div>
  <div className="flex justify-between gap-2">
    <div>
      <p className="text-xs">{note.createdAt}</p>
    </div>
    <div className="flex gap-3">
      <button
        onClick={() => {
          setNoteModal(true);
          setNote(note);
        }}
      >
        <FaRegEdit title="edit" />
      </button>
      <button onClick={() => addToArchive(note, token)}>
        <MdArchive title="Archive" />
      </button>
      <button onClick={() => addToTrash(note, token)}>
        <FaRegTrashAlt title="Trash" />
      </button>
    </div>
  </div>
</div>; */
}
