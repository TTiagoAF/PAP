import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./Home";
import ContactPage from "./Contacto";
import AboutPage from "./Sobre";
import ResourcesPage from "./Recursos";

//É o que renderiza a página principal e a página de detalhes através do BrowserRouter 7
const queryClient = new QueryClient({
    defaultOptions : {
        queries : {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});


const App = () => {
    return(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
                    <header>
                        <div>
                            <Routes>
                                <Route path="/recursos/" element={<ResourcesPage />}/>
                                <Route path="/sobre/" element={<AboutPage />}/>
                                <Route path="/contacto/" element={<ContactPage />}/>
                                <Route path="/" element={<HomePage />}/>
                            </Routes>
                        </div>                   
                    </header>
                
        </QueryClientProvider>
    </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);