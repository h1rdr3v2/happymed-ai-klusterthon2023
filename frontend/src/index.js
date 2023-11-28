import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from "./components/error/ErrorPage";
import Partners from "./components/partners/Partners";
import About from "./components/about/About";
import Faqs from "./components/faqs/Faqs";
import Blog from "./components/blog/Blog";
import Home from "./components/home/Home";
import Chat from './components/chat/Chat';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "partners",
    element: <Partners />
  },
  {
    path: "about",
    element: <About />
  },
  {
    path: "faqs",
    element: <Faqs />
  },
  {
    path: "blog",
    element: <Blog />
  },
  {
    path: "home",
    element: <Home />
  },
  {
    path: "chat",
    element: <Chat />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
