import { BrowserRouter as Router, Routes, Route, Link, Navigate} from 'react-router-dom';
import {HomePage} from './pages/home/HomePage';
import {NotFoundPage} from './pages/404/NotFoundPage';
import {AboutPage} from './pages/about-faqs/AboutPage';
import { ProfilePage } from './pages/profile/ProfilePage';
import { TaskPage } from './pages/tasks/TaskPage';
import { TasksDetailPage } from './pages/tasks/TasksDetailPage';
import { useEffect } from 'react';
import './App.css'
import LoginPage from './pages/auth/LoginPage';
import StatePage from './pages/home/StatePage';

function AppRouting() {

  let logged = false;
  let taskList = [
    {
      id:1,
      name:"Task 1",
      description:"my first task"
    },
    {
      id:2,
      name: "Task 2",
      description: "my second task"
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('user logged in', logged);
  },[]);

  return (
    <Router>
    <div>
      <aside>
      <Link to='/'>|| HOME |</Link>
      <Link to='/about'>| ABOUT |</Link>
      <Link to='/faqs'>| FAQs ||</Link>
      <Link to='/tasks/1'>| Task 1 ||</Link>
      <Link to='/tasks/2'>| Task 2 ||</Link>
      <Link to='/404'>| 404 ||</Link>
      <Link to='/login'>| Login ||</Link>
      </aside>

      <main>
      <Routes>
        {/* Ruta principal */}
        <Route exact path='/' element={<HomePage/>} />

        <Route path='/online-state' element={<StatePage/>} />

        <Route path="/login" element={logged ? <Navigate to="/" replace={true} /> : <LoginPage/> }/>

        {/* A route that will be displayed when the URL is /profile. */}
        <Route path="/profile" element={logged ? <ProfilePage/> : <Navigate to="/login" replace={true} /> }/>
       {/*si la URl es /about o /faqs muestra la pagina About */}
        <Route path='/about' element={<AboutPage />} />
        <Route path='/faqs' element={<AboutPage />} />


         {/*si ninguna ruta coincide,muestra pagina error 404. */}
        <Route path='*' element={<NotFoundPage/>} />
        <Route path='/tasks' element={<TaskPage/>} />

{       /* A dynamic route. It is a route that can change depending on the value of the parameter. */}
        <Route exact path="/tasks/:id" element={<TasksDetailPage tasks={taskList}/>}/>
         
      </Routes>
      </main>
    </div>
    </Router>
  );
}

export default AppRouting;
