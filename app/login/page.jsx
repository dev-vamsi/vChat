const Login = () => {
    return (
        <div className="login flex_col_center text-justify gap-3 rounded-2xl shadow-lg px-6 py-8 bg-white">
            <div className="flex_col_center gap-5 min-w-full md:min-w-[600px]">
                <h1 className="text_heading text-center my-2">
                    Welcome to <span className="text-[#427DF6]">vChat</span>,
                    Please Login
                </h1>
                <input
                    type="text"
                    className="text_paragraph p-2 rounded-md border-2 border-[#427DF6] outline-none w-full"
                    placeholder="Enter your email..."
                />
                <input
                    type="password"
                    className="text_paragraph p-2 rounded-md border-2 border-[#427DF6] outline-none w-full"
                    placeholder="Enter your password..."
                />
                <button className="bg-[#185519] rounded-lg py-2 px-5 text-white text_paragraph">
                    Login
                </button>
            </div>
            <div className="w-full h-[1px] bg-black mb-5" />
            <div className="flex_row_center gap-5 text-[#427DF6] text-lg text_paragraph">
                <button className="bg-gray-200 rounded-lg w-[45px] h-[45px] shadow-lg hover:scale-110 duration-150">
                    <i className="fa-brands fa-google mx-2"></i>
                </button>
                <button className="bg-gray-200 rounded-lg w-[45px] h-[45px] shadow-lg hover:scale-110 duration-150">
                    <i className="fa-brands fa-github"></i>
                </button>
            </div>
        </div>
    );
};

export default Login;
