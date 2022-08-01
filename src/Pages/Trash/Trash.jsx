import axios from "axios";
import { useAuth } from "../../Context/AuthContext";

export function Trash() {
  const { authState } = useAuth();
  const { token } = authState;
  const getTrashedNotes = async (token) => {
    try {
      const resp = await axios.get(`/api/trash`, {
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
      <h1 className="text-2xl font-bold text-center">Trash</h1>
      <div className="flex items-center justify-center">
        <img
          className="w-96 h-auto"
          src="https://res.cloudinary.com/doo5jbomi/image/upload/v1659354189/NotesApp/51382-astronaut-light-theme_1_omqpt4.gif"
          alt="empty"
        />
      </div>
    </main>
  );
}
