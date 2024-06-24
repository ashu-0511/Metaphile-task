import './App.css'
import logo from './assets/logo.png'
import StudentForm from './components/StudentForm'
import StuForget from './components/StuForget';
import TeachForget from './components/TeachForget';
import TeacherForm from './components/TeacherForm';
import { Route, Routes } from 'react-router-dom';

function App() {


  const date = new Date();
  let year = date.getFullYear();


  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<StudentForm logo={logo} />}></Route>
          <Route path="/teacher-Form" element={<TeacherForm logo={logo} />}></Route>
          <Route path="/teacher-forget" element={<TeachForget logo={logo} />}></Route>
          <Route path="/student-forget" element={<StuForget logo={logo} />}></Route>
        </Routes>
      </div>
      <p className="sm:text-sm">{year} @ All rights reserved & Privacy Policy</p>
    </>
  )
}

export default App
