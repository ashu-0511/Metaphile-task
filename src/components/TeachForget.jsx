import { Link } from 'react-router-dom';

function StudentForm(props) {
    return (
        <div className="flex flex-col md:flex-row gap-7">
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="data">
                    <h1 className="text-2xl font-semibold p-5 pl-0">Streaming Teaching Excellence</h1>
                    <p>Empowering Teacher for Academic Excellence: From Class Management to Insights, Our Teacher ERP Streamlines Operations Across Desktop and Mobile Platforms. Collaborate Efficiently, Utilize Insights Effectively, and Benchmark Quality Education for Personalized Teaching Experiences.</p>
                </div>
            </div>
            <div className="flex-1 mt-7 md:mt-0">
                <form className="px-4 py-10 bg-form text-center rounded-xl h-full border-2 border-slate-300">
                    <h1 className="font-bold text-2xl p-0.5">Forgot Password</h1>
                    <div className="image">
                        <img src={props.logo} alt="school-logo" className="h-36 w-36 m-auto" />
                    </div>
                    <div className="form flex flex-col justify-center items-start p-10 gap-4">
                        <label htmlFor="" className="font-medium">Enter new Password</label>
                        <input type="password" name="password" className="border-2 w-full rounded-md p-1 border-slate-500" />
                        <label htmlFor="" className="font-medium">Re-enter new Password</label>
                        <input type="password" name="password" className="border-2 w-full rounded-md p-1 border-slate-500" />
                        <Link to="/teacher-Form" className="text-link">Back to Login</Link>
                    </div>
                    <div className="login">
                        <button className="login border-2 bg-btn px-10 py-2 rounded-xl text-btn hover:text-hover hover:bg-form"
                            onClick={() => {
                                alert('Password changed successfully');
                            }}
                        >Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StudentForm;
