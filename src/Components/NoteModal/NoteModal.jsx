import { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const NoteModal = ({ handleClose, show }) => {
  const initialNoteState = {
    title: "",
    editorState: EditorState.createEmpty(),
    priority: null,
    color: null,
  };

  const [note, setNote] = useState(initialNoteState);

  const showHideClassName = show
    ? `fixed z-10 top-0 left-0 w-full h-full backdrop-blur-sm grid place-items-center block`
    : `fixed z-10 top-0 left-0 w-full h-full backdrop-blur-sm grid place-items-center hidden`;

  return (
    <div className={showHideClassName}>
      <section
        className="fixed rounded-md bg-white p-5 h-auto w-4/5 md:w-2/4"
        style={{ "background-color": note.color }}
      >
        <h2>
          <input
            type="text"
            className="w-full h-10 text-2xl p-2 outline-none my-2"
            placeholder="Title"
            onChange={(e) => setNote({ ...note, title: e.target.value })}
            style={{ "background-color": note.color }}
          />
        </h2>
        <div>
          <Editor
            editorState={note.editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            placeholder="Enter your notes here..."
            onEditorStateChange={(editorState) =>
              setNote({ ...note, editorState: editorState })
            }
          />
        </div>
        <div className="flex gap-3 items-center">
          <div>
            <label for="tags">Priority : </label>
            <select
              name="tags"
              id="tags"
              onChange={(e) => setNote({ ...note, priority: e.target.value })}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div>
            <label htmlFor="color">Color : </label>
            <input
              className="border border-white"
              value={note.color}
              type="color"
              id="color"
              name="color"
              placeholder="Color"
              onChange={(e) => setNote({ ...note, color: e.target.value })}
            />
          </div>
        </div>
        <div className="flex justify-end gap-5">
          <button
            className="bg-blue-500 text-white rounded-sm px-3 py-2"
            onClick={console.log(note)}
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
