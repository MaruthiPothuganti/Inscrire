import { useAuth } from "../../Context/AuthContext";
import { CgProfile } from "../../Components/Icons";
import { ACTION_TYPES } from "../../Utils/constants";

export function Profile() {
  const { dispatchAuth } = useAuth();
  const { LOGOUT } = ACTION_TYPES;
  return (
    <main className="grow w-full h-auto p-8 flex justify-center items-center gap-4 flex-col">
      <div className="flex gap-4">
        <CgProfile size={56} />
        <div>
          <button
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
            onClick={() => {
              dispatchAuth({
                type: LOGOUT,
              });
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}
