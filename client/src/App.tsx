import React from "react";
import { HashRouter, useRoutes } from "react-router-dom";

import "./App.css";
import Home from "./pages/home.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Loading from "./components/Loading/Loading.tsx";

function App() {
    return (
        <HashRouter>
            <NavBar />
            <div className="main-container">
                <CustomRouter />
            </div>
            <Footer />
        </HashRouter>
    );
}

// Import all pages using Vite's glob import
const pages = import.meta.glob('/src/pages/**/*.tsx');

// Convert file paths to route objects
function pathFromFile(file: string): string {
    return file
        .replace('/src/pages', '')
        .replace(/[^\/]+$/, '');
}

function routePath(file: string): string {
    return pathFromFile(file)
        .replace(/\[([^\]]+)\]/g, ':$1'); // [param] => :param
}

// Convert the glob result into React Router routes
const routes = Object.keys(pages).map((file) => {
    return ({
        path: routePath(file),
        element: React.createElement(
            React.Suspense,
            { fallback: <Loading/> },
            React.createElement(React.lazy(pages[file] as any))
        ),
    })
}
);

// Maps the directory structure to the urls
function CustomRouter() {
    return useRoutes([...routes, { path: "/WaffleStock/", element: <Home /> }]);
}

export default App;