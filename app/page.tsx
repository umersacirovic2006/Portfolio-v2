import About from "./components/About";
import Home from "./components/Home";

export default function App() {
    return (
        <main className="w-4/5 flex flex-col justify-center mx-40 border-1-primary border-solid">
            <Home />
            <About />
        </main>
    );
}
