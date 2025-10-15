import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import SignUp from "./pages/SignUp"

import { Routes,Route,useLocation} from "react-router-dom"

import BookList from "./pages/BookList"

import AddBook from "./pages/AddBook"
import ProtectedRoute from "./pages/ProtectedRoute"

import AdminNavbar from "./pages/AdminNavbar"
import ManageBooks from "./pages/ManageBooks"
function App(){

  const location = useLocation()
const isAdminRoute = location.pathname.startsWith("/admin")

  return (
    <div>

        {
          !isAdminRoute ? <Navbar/> : <AdminNavbar/>
        }
      
      
      
      <Routes>
        <Route path='/signup' element={<SignUp/>} />
        <Route path="/"  element={<Hero/> }/>
        <Route path='/home' element={<Hero/>} />
        <Route  path='/about' element={<About/>} />
        <Route  path='/store'  element={<BookList/>} />
        <Route path='/books-list' element={<BookList/>} />
        <Route path="/admin/dashboard"  element={<ProtectedRoute><BookList/></ProtectedRoute>} />
          <Route path="/admin/manage-books" element={<ProtectedRoute><ManageBooks /></ProtectedRoute>} />
          <Route path="/admin/add-book" element={<ProtectedRoute><AddBook/></ProtectedRoute>} />
      </Routes>

      
    </div>
  )
}

export default App