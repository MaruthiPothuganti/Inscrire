import axios from 'axios'

export const addToNotes = async (note,token) => {
    try {
      const resp = await axios.post(
        "/api/notes",
        { note },
        { headers: { authorization: token } }
      );

    } catch (err) {
      console.log(err);
    }
};

export const updateNote = async (note, token) => {
    try {
      const resp = await axios.post(
        `/api/notes/${note._id}`,
        { note },
        { headers: { authorization: token } }
      );

    } catch (err) {
      console.log(err);
    }
};


export const deletefromAllNotes = async (note, token) => {
    const { _id } = note;
    try {
        await axios.delete(`/api/notes/archives/${_id}`, {note},{headers:{authorization: token}});
    } catch (err) {
        console.log(err)
  }
}

// -----------------------------------------------------------------------------------------------------------------------------

export const addToArchive = async (note, token) => {
    const { _id } = note;
    try {
        await axios.post(`/api/notes/archives/${_id}`, {note},{headers:{authorization: token}});
    } catch (err) {
        console.log(err)
  }
}

export const restoreArchivedNote = async (note, token) => {
    try {
        await axios.post(`/api/archives/restore/${note._id}`, {note},{headers:{authorization: token}});
    } catch (err) {
        console.log(err)
  }
}


export const deletefromArchived = async (note, token) => {

    try {
        await axios.delete(`/api/archives/delete/${note._id}`, {note},{headers:{authorization: token}});
    } catch (err) {
        console.log(err)
  }
}

//-------------------------------------------------------------------------------------------------------------------------------

export const addToTrash = async (note, token) => {
    const { _id } = note;
    try {
        await axios.post(`/api/notes/trash/${_id}`, {note},{headers:{authorization: token}});
    } catch (err) {
        console.log(err)
  }
}

export const restoreTrashedNote = async (note, token) => {
    try {
        await axios.post(`/api/trash/restore/${note._id}`, {note},{headers:{authorization: token}});
    } catch (err) {
        console.log(err)
  }
}


export const deletefromTrash = async (note, token) => {
    const { _id } = note;
    try {
        await axios.delete(`/api/trash/delete/${_id}`, {note},{headers:{authorization: token}});
    } catch (err) {
        console.log(err)
  }
}




