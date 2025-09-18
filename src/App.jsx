
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from './routes/Router';
function App() {
function renderRoutes(routes) {
  return routes.map(({ id, path, element, children, index }) => (
    <Route key={id} path={path} element={element} index={index}>
      {children && renderRoutes(children)}
    </Route>
  ));
}

  return (
   <>
       <BrowserRouter>
            <Routes>{renderRoutes(Router)}</Routes>
        </BrowserRouter>
   
   </>
  )
}

export default App
