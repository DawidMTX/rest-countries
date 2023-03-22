import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import FlagDetail from './pages/FlagDetail';
import setBodyColor from './story/setBodyColor';
import { useSelector } from 'react-redux';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {path: 'detail/:detailID', element: <FlagDetail/>}
    ]
  }
])

function App() {
const mode = useSelector(state => state.mode)

if(mode){ 
  setBodyColor({color: "hsl(0, 0%, 97%)", fontColor: "black", colorHeader: "#fff", shadow: "hsl(0, 0%, 85%)"})
}else{
 setBodyColor({color: "hsl(207, 26%, 17%)", fontColor: "white", colorHeader: "hsl(209, 23%, 22%)", shadow: "hsl(209, 23%, 22%)"})}

  return (
    <RouterProvider  router={routers} />
  );
}

export default App;
