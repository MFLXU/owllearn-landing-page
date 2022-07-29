import { LandingPage } from "./Pages/index";

function App() {
  return (
    <div>
      <LandingPage />
      <div className="bg-black text-white">
        <div className="container font-inter py-2 text-sm flex justify-center items-center">
          <p>
            made by{" "}
            <a
              href="https://github.com/MFLXU"
              target="_blank"
              className="underline"
            >
              Louaye Kazar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
