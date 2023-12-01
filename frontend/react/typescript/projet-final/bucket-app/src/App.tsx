import './assets/css/bootstrap.min.css'
import './assets/css/lineicons.css'
import './assets/css/main.css'
import './assets/css/materialdesignicons.min.css'
import { Layout } from './components/Layout'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Root } from './components/Root'
import { Login } from './pages/Login'
import { SecureRoute } from './components/SecureRoute'
import { DashBoard } from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { AddBucket } from './pages/AddBucket'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route path='/dashboard' element={<Layout />}>
          <Route index element={
            <SecureRoute> 
              <DashBoard/>
            </SecureRoute>  
          }/>
          <Route path='addBucket' element={
            <SecureRoute> 
              <AddBucket/>
            </SecureRoute>  
          }/>
      </Route>  
      <Route index element={<Login/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App
