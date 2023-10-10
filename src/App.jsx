import './App.css'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
// import { LanguajeContext, LanguajeProvider } from './contexts/LanguajeContext'

// import { useContext } from 'react'
import ThemeProvider from './contexts/ThemeContext';
import Home from './Components/home';
import Works from './Components/works';
import AboutMe from './Components/about';
import Skills from './Components/skills';
import Layout from './Components/layout';


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/works",
          element: <Works />,
        },
        {
          path: "/about-me",
          element: <AboutMe />,
        },
        {
          path: "/contacts",
          element: <Skills />,
        }

      ]
    }
  ])

  // const navigate = useNavigate();
  // const location = useLocation();

  //  const { languaje, setLanguaje} = useContext(LanguajeContext);
  //  const { english, español } = languaje;

  return (
    <ThemeProvider>
      <RouterProvider  router={routes} />

    </ThemeProvider>
  )

}

export default App
