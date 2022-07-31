import { useState } from "react";
import JoditEditor from "jodit-react";
import { useAuth } from "../../Context/AuthContext";
import { FaPalette } from "../Icons";
import { colors } from "../../Utils/colors";
import { Tags } from "../Tags/Tags";
import axios from "axios";

export const NoteModal = ({ handleClose, show }) => {
  const initialNoteState = {
    title: "",
    priority: "nulls",
    color: "#FFFFFF",
    content: "",
    tags: [],
  };

  const [note, setNote] = useState(initialNoteState);

  const { authState } = useAuth();
  const { token } = authState;

  const showHideClassName = show
    ? `fixed z-10 top-0 left-0 w-full h-full backdrop-blur-sm grid place-items-center block`
    : `fixed z-10 top-0 left-0 w-full h-full backdrop-blur-sm grid place-items-center hidden`;

  const addNotes = async (note) => {
    try {
      const resp = await axios.post(
        "/api/notes",
        { note },
        { headers: { authorization: token } }
      );
      console.log(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={showHideClassName}>
      <section
        className="fixed rounded-md bg-white p-5 h-auto w-4/5 md:w-2/4"
        style={{ backgroundColor: note.color }}
      >
        <h2>
          <input
            type="text"
            className="w-full h-10 text-2xl p-2 outline-none my-2"
            placeholder="Title"
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            style={{ backgroundColor: note.color, color: "black" }}
          />
        </h2>
        <div>
          <JoditEditor
            value={note.content}
            onChange={(e) => {
              setNote({ ...note, content: e });
            }}
            style={{ color: "black" }}
          />
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <label htmlFor="tags">Priority : </label>
            <select
              name="tags"
              id="tags"
              onChange={(e) => setNote({ ...note, priority: e.target.value })}
              value={note.priority}
            >
              <option value="nulls">Select</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div className="flex items-center p-2 gap-2">
            <FaPalette size={34} />
            <div className="flex gap-1">
              {colors.map((color) => {
                return (
                  <div key={color}>
                    <input
                      className="sr-only peer"
                      type="radio"
                      value={color}
                      onChange={(e) => {
                        setNote({ ...note, color: e.target.value });
                      }}
                      name="answer"
                      id={color}
                    />

                    <label
                      className="w-14 h-14 px-3 rounded-full bg-blue-500 border border-gray-300 cursor-pointer focus:outline-none peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent"
                      style={{ background: color }}
                      htmlFor={color}
                    ></label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <Tags setNote={setNote} note={note} />
          <div className="flex flex-wrap gap-1">
            {note.tags.map((item, index) => {
              return (
                <span key={index} className="text-white bg-black p-1 text-sm">
                  {item}
                </span>
              );
            })}
          </div>
        </div>
        <div className="flex justify-end gap-5">
          <button
            className="bg-blue-500 text-white rounded-sm px-3 py-2"
            onClick={() => {
              addNotes(note);
              setNote(initialNoteState);
              handleClose();
            }}
            disabled={note.content === ""}
          >
            Save
          </button>
          <button
            className="border border-blue-500 rounded-sm px-3 py-2 hover:bg-blue-500 hover:text-white"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </section>
    </div>
  );
};
