import "./landing.css";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <main className="w-full h-screen grid place-items-center">
      <div className="flex flex-wrap w-4/5 h-4/5 rounded-xl shadow-sm shadow-gray-400">
        <section className="w-auto md:w-1/2 flex flex-col justify-evenly px-12">
          <h1 className="text-7xl font-bold md:w-auto">
            In<span className="text-blue-500">Scrire</span>
          </h1>
          <div>
            <h2 className="text-2xl font-semibold">
              Inscrire when it has to get done.
            </h2>
            <h2 className="text-blue-500 text-2xl font-semibold">
              It's How Inscrire Is Done.
            </h2>
            <p>
              Manage your daily tasks and workflow in a modern way and <br />{" "}
              boost your efficiency without any efforts
            </p>
          </div>
          <div>
            <Link to="/HomePage">
              <button className="group relative flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Join Now
              </button>
            </Link>
            <p>Already have an account?</p>
          </div>
        </section>
        <section className="hidden md:grid place-items-center w-1/2">
          <img
            className="w-80"
            src="https://res.cloudinary.com/doo5jbomi/image/upload/v1652961346/NotesApp/notebook_l1jjfx.png"
            alt="Notebook"
          />
        </section>
      </div>
    </main>
  );
}
