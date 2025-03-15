import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/Learner/Navbar/NavBar';
import Footer from './Components/Learner/Footer/Footer';
import Login from './Pages/Learner/auth/Login';
import Register from './Pages/Learner/auth/Register';
import OTP from './Pages/Learner/auth/OTP';
import Home from './Pages/Learner/pages/Home';
import Courses from './Pages/Learner/pages/Courses';
import About from './Pages/Learner/pages/About';
import Contact from './Pages/Learner/pages/Contact';
import Instructor from './Pages/Learner/pages/Instructor';
import Career from './Pages/Learner/pages/Career';
import Cart from './Pages/Learner/pages/Cart';
import Wishlist from './Pages/Learner/pages/Auth/Wishlist';
import DashBoard from './Pages/Learner/pages/Auth/DashBoard';
import AuthCourses from './Pages/Learner/pages/Auth/Courses';
import Teacher from './Pages/Learner/pages/Auth/Teacher';
import Message from './Pages/Learner/pages/Auth/Message';
import PurchaseHistory from './Pages/Learner/pages/Auth/PurchaseHistory';
import Settings from './Pages/Learner/pages/Auth/Settings';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verifyuser" element={<OTP />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/beaninstructor" element={<Instructor />} />

        <Route path="/learner" element={<Home />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="courses" element={<AuthCourses />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="message" element={<Message />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="purchasehistory" element={<PurchaseHistory />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
