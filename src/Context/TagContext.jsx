import { createContext, useContext, useReducer } from "react";
import { tagReducer } from "../reducers/tagReducer";
import { v4 as uuid } from "uuid";

const TagContext = createContext();

const TagsContext = ({ children }) => {
  const initialTagState = {
    tags: [
      { _id: uuid(), tag: "Work" },
      { _id: uuid(), tag: "Personal" },
    ],
  };
  const [tagState, tagDispatch] = useReducer(tagReducer, initialTagState);
  return (
    <TagContext.Provider value={{ tagState, tagDispatch }}>
      {children}
    </TagContext.Provider>
  );
};

const useTags = () => useContext(TagContext);

export { TagsContext, useTags };
