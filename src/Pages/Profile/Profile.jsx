import { useAuth } from "../../Context/AuthContext";
import { CgProfile } from "../../Components/Icons";

export function Profile() {
  const { dispatchAuth } = useAuth();
  return (
    <main className="grow w-full h-auto p-8 flex justify-center items-center gap-4 flex-col">
      <div className="flex gap-4">
        <CgProfile size={42} />
        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">
          Logout
        </button>
      </div>
    </main>
  );
}
