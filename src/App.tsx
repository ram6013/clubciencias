import "./App.css";
import { motion } from "framer-motion";
import Clubciencias from "./componentes/CLubciencias";
function App() {
    return (
        <div className="h-screen w-full bg-black">
            <header>
                <Clubciencias></Clubciencias>
            </header>
        </div>
    );
}

export default App;
