import { Link } from 'react-router-dom';

function StudentForm(props) {
    return (
        <div className="flex flex-col md:flex-row gap-7 ">
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="image">
                    <img src={props.logo} alt="school-logo" className="h-72 w-72" />
                </div>
                <div className="data">
                    <h1 className="text-2xl font-semibold p-5 pl-0">Powering student-centric education in school</h1>
                    <p>We help Schools of all Classes and Streams operate better - from admission to academics, back office to accrediations, desktops to mobiles - We empower students, faculty and management to collborate effecienty and use insights effectively, bench marking quality education while creating personalized learning experience.</p>
                </div>
            </div>
            <div className="flex-1 mt-7 md:mt-0">
                <form className="p-12 bg-form text-center rounded-xl h-full border-2 border-slate-300">
                    <h1 className="font-bold text-2xl p-0.5">Welcome Back</h1>
                    <p className="p-2">Please Enter Your ID & Password</p>
                    <div className="btn flex gap-2 justify-center">
                        <button className="border-2 bg-btn py-1 px-2 rounded-xl text-btn">Student</button>
                        <Link to="teacher-Form">
                            <button className="border-2 py-1 px-2 rounded-xl">Teacher</button>
                        </Link>
                    </div>
                    <div className="form flex flex-col justify-center items-start p-10 gap-4">
                        <label htmlFor="" className="font-medium">Login ID</label>
                        <input type="text" name="login" placeholder="EX:1234" className="border-2 w-full rounded-md p-1 border-slate-500" />
                        <label htmlFor="" className="font-medium">Password</label>
                        <input type="password" name="login" className="border-2 w-full rounded-md p-1 border-slate-500" />
                        <Link to="student-forget" className="text-link">Forget Password ?</Link>
                    </div>
                    <div className="login">
                        <button className="login border-2 bg-btn px-10 py-2 rounded-xl text-btn hover:text-hover hover:bg-form">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StudentForm;
