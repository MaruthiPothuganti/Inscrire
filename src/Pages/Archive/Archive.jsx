import axios from "axios";
import { useAuth } from "../../Context/AuthContext";

export function Archive() {
  const { authState } = useAuth();
  const { token } = useAuth();
  const getArchivedNotes = async (token) => {
    try {
      const resp = await axios.get(`/api/archives`, {
        headers: { authorization: token },
      });
      if (resp) {
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="grow w-full h-auto p-8 flex justify-center gap-4 flex-col">
      <div className="flex items-center justify-center">
        <img
          className="w-96 h-auto"
          src="https://res.cloudinary.com/doo5jbomi/image/upload/v1659354189/NotesApp/93134-not-found_at3g7b.gif"
          alt="empty"
        />
      </div>
    </main>
  );
}
