import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

const NoteContext = ({ children }) => {
  const initialNoteState = {
    title: "",
    priority: "nulls",
    color: "#FFFFFF",
    content: "",
    tags: [],
    createdAt: new Date().toLocaleString(),
  };

  const [note, setNote] = useState(initialNoteState);
  const [isNoteModalOpen, setNoteModal] = useState(false);

  return (
    <NotesContext.Provider
      value={{ isNoteModalOpen, setNoteModal, initialNoteState, note, setNote }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NoteContext, useNotes };
