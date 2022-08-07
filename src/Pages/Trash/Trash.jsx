import axios from "axios";
import { useQuery } from "react-query";
import { useAuth } from "../../Context/AuthContext";
import parse from "html-react-parser";
import { FaTrashRestore, FaRegTrashAlt } from "../../Components/Icons";
import { restoreTrashedNote, deletefromTrash } from "../../Utils/services";

export function Trash() {
  const { authState } = useAuth();
  const { token } = authState;

  const getTrashedNotes = () => {
    return axios.get(`/api/trash`, {
      headers: { authorization: token },
    });
  };

  const { data, refetch } = useQuery(["Trash"], getTrashedNotes);

  return (
    <main className="grow w-full h-auto p-8 flex justify-center gap-4 flex-col">
      <h1 className="text-2xl font-bold text-center">Trash</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {data?.data.trash.length > 0 ? (
          data?.data.trash.map((note) => {
            return (
              <div
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
                    {note.tags.map((item) => {
                      return (
                        <small className="text-white bg-pink-500 p-1 rounded-md">
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
                    <button onClick={() => restoreTrashedNote(note, token)}>
                      <FaTrashRestore title="Restore" />
                    </button>
                    <button onClick={() => deletefromTrash(note, token)}>
                      <FaRegTrashAlt title="Delete permanently" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
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
