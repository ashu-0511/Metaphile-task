import { Link } from 'react-router-dom';

function StudentForm(props) {
    return (
        <div className="flex flex-col md:flex-row gap-7">
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="data">
                    <h1 className="text-2xl font-semibold p-5 pl-0">Powering student-centric education in school</h1>
                    <p>We help Schools of all Classes and Streams operate better - from admission to academics, back office to accrediations, desktops to mobiles - We empower students, faculty and management to collborate effecienty and use insights effectively, bench marking quality education while creating personalized learning experience.</p>
                </div>
            </div>
            <div className="flex-1 mt-7 md:mt-0">
                <form className="p-8 bg-form text-center rounded-xl h-full border-2 border-slate-300">
                    <h1 className="font-bold text-2xl p-0.5">Forgot Password</h1>
                    <p className="p-1">Please Enter Your ID & Password</p>
                    <div className="image">
                        <img src={props.logo} alt="school-logo" className="h-40 w-40 m-auto" />
                    </div>
                    <div className="form flex flex-col justify-center items-start p-8 gap-1">
                        <label htmlFor="" className="font-medium">Login ID</label>
                        <input type="text" name="login" placeholder="EX:1234" className="border-2 w-full rounded-md p-1 border-slate-500" />
                        <label htmlFor="" className="font-medium">Enter Email or Phone no.</label>
                        <div className="w-full flex gap-3">
                            <input type="text" name="login" className="border-2 w-3/4 h-fit rounded-md p-1 border-slate-500" />
                            <button className="border-2 bg-btn px-2 rounded-xl text-white sm:h-2 text-xs md:h-auto text-btn hover:text-hover hover:bg-form"
                                onClick={() => {
                                    alert('OTP Sent!');
                                }}
                            >Send OTP</button>
                        </div>
                        <div>
                            <p className="flex items-start py-1"> Verify OTP</p>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    className="border-gray-500 border-2 rounded-lg py-1 px-2 w-7"
                                />
                                <input
                                    type="text"
                                    className="border-gray-500 border-2 rounded-lg py-1 px-2 w-7"
                                />
                                <input
                                    type="text"
                                    className="border-gray-500 border-2 rounded-lg py-1 px-2 w-7"
                                />
                                <input
                                    type="text"
                                    className="border-gray-500 border-2 rounded-lg py-1 px-2 w-7"
                                />
                                <input
                                    type="text"
                                    className="border-gray-500 border-2 rounded-lg py-1 px-2 w-7"
                                />
                                <input
                                    type="text"
                                    className="border-gray-500 border-2 rounded-lg py-1 px-2 w-7"
                                />
                            </div>
                        </div>
                        <Link to="/" className="text-link">
                            Back to Login
                        </Link>
                    </div>
                    <div className="btn flex justify-center">
                        <button className="border-2 bg-btn py-2 px-10 rounded-xl text-btn hover:text-hover hover:bg-form">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StudentForm;
