import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home.tsx";

function App() {
    return (
        <BrowserRouter>
            {/* <NavBar /> */}
            <CustomRouter />
            {/* <Footer /> */}
        </BrowserRouter>
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
            { fallback: <div>Loading...</div> },
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