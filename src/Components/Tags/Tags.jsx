import { AiOutlineTags, FaRegTrashAlt } from "../Icons";
import { ACTION_TYPES } from "../../Utils/constants";
import { useTags } from "../../Context/TagContext";
import { useState } from "react";

export const Tags = ({ setNote, note }) => {
  const [openTags, setOpentags] = useState(false);
  const [tag, setTag] = useState("");
  const { ADDTAG, DELETETAG } = ACTION_TYPES;
  const { tagState, tagDispatch } = useTags();

  const showHideClassName = openTags
    ? `absolute p-2 z-10 left-6 bg-blue-500 top-full max-h-48 overflow-y-auto block`
    : `absolute p-2 z-10 left-6 bg-blue-500 top-full max-h-48 hidden`;

  return (
    <div className="relative">
      <button type="button" onClick={() => setOpentags((prev) => !prev)}>
        <AiOutlineTags size={24} />
      </button>
      <div className={showHideClassName}>
        <div className="flex gap-1">
          <input
            type="text"
            name="tags"
            id="tags"
            className="w-16 h-6 px-1"
            placeholder="tags..."
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <button
            className="px-2 bg-gray-400"
            disabled={tag === ""}
            onClick={() => {
              tagDispatch({
                type: ADDTAG,
                payload: tag,
              });
              setTag("");
            }}
          >
            +
          </button>
        </div>
        {tagState.tags.map((ele) => {
          return (
            <div key={ele._id} className="p-1 flex justify-between">
              <div>
                <input
                  type="checkbox"
                  name={ele.tag}
                  id={ele.tag}
                  value={ele.tag}
                  onChange={(e) => {
                    setNote({
                      ...note,
                      tags: note.tags.includes(e.target.value)
                        ? note.tags.filter((el) => el !== e.target.value)
                        : [...note.tags, e.target.value],
                    });
                  }}
                  checked={note.tags.includes(ele.tag)}
                />
                <label
                  htmlFor={ele.tag}
                  className="text-blue-700 font-bold px-1"
                >
                  {ele.tag}
                </label>
              </div>
              <button
                className="text-white"
                onClick={() => {
                  tagDispatch({
                    type: DELETETAG,
                    payload: ele._id,
                  });
                }}
                disabled={note.tags.includes(ele.tag)}
              >
                <FaRegTrashAlt />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
