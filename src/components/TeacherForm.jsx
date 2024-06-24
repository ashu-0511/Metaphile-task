import { Link } from 'react-router-dom';

function StudentForm(props) {
    return (
        <div className="flex flex-col md:flex-row gap-7">
            <div className="flex-1 flex flex-col items-start justify-center">
                <div className="data">
                    <h1 className="text-2xl font-semibold p-5 pl-0">Streaming Teaching Excellence</h1>
                    <p>Empowering Teacher for Academic Excellence: From Class Management to Insights, Our Teacher ERP Streamlines Operations Across Desktop and Mobile Platforms. Collaborate Efficiently, Utilize Insights Effectively, and Benchmark Quality Education for Personalized Teaching Experiences.</p>
                </div>
            </div>
            <div className="flex-1 mt-7 md:mt-0">
                <form className="p-12 bg-form text-center rounded-xl h-full border-2 border-slate-300">
                    <h1 className="font-bold text-2xl p-0.5">Welcome Back</h1>
                    <p className="p-2">Please Enter Your ID & Password</p>
                    <div className="btn flex gap-2 justify-center">
                        <Link to='/'>
                            <button className="border-2 py-1 px-2 rounded-xl">Student</button>
                        </Link>
                        <button className="border-2 bg-btn py-1 px-2 rounded-xl text-btn">Teacher</button>
                    </div>
                    <div className="form flex flex-col justify-center items-start p-10 gap-4">
                        <label htmlFor="" className="font-medium">Login ID</label>
                        <input type="text" name="login" placeholder="EX:1234" className="border-2 w-full rounded-md p-1 border-slate-500" />
                        <label htmlFor="" className="font-medium">Password</label>
                        <input type="password" name="login" className="border-2 w-full rounded-md p-1 border-slate-500" />
                        <Link to="/teacher-forget" className="text-link">Forget Password ?</Link>
                    </div>
                    <div className="login">
                        <button className="login border-2 bg-btn px-10 py-2 rounded-xl text-btn hover:text-hover hover:bg-form"
                            onClick={() => {
                                alert('login successfully');
                            }}
                        >Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StudentForm;
