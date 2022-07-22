import { createContext, useContext, useState } from "react";

const NotesContext = createContext();

const NoteContext = ({ children }) => {
  const [isNoteModalOpen, setNoteModal] = useState(false);

  return (
    <NotesContext.Provider value={{ isNoteModalOpen, setNoteModal }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NoteContext, useNotes };
