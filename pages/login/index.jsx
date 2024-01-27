import Link from "next/link";

export default function Login() {
  return (
    <div className="flex-1 flex h-screeni justify-center gap-10 flex-col w-full bg-gray-50 p-2">
      <div className=" text-center p-2 ">
        <p className="text-xs">Welcome, Eyepa Delivery</p>
        <p className="text-2xl">Sign Up to Continue </p>
      </div>
      <div className="flex-1 flex flex-col   items-center gap-5 w-full">
        <div className="  flex justify-center flex-col items-center gap-2 p-2 w-full">
        <img className="w-72 h-72 object-contain" src="/temp.png" />
          <div className="w-5/6 p-2 flex items-center gap-1 bg-white border shadow-xs rounded-full">
            <img src="/google.png" className="w-8 h-8 object-contain" alt="Google" />
            <p>Sign Up With Google</p>
          </div>
          <div className="w-5/6 p-2 flex items-center gap-1 bg-white border shadow-xs rounded-full">
            <img src="/apple.png" className="w-8 h-8 object-contain" alt="Google" />
            <p>Sign Up With Apple</p>
          </div>

        </div>
        <div className="flex w-full  items-center justify-around h-10">
          <div className="h-px w-1/3 border-b"></div>
          <p>Or</p>
          <div className="h-px w-1/3 border-b"></div>
        </div>
        <div className="flex flex-col w-full items-center">
          <button className="w-5/6 p-3 bg-orange-800 text-white rounded-full">
            Create Account
          </button>
          <div className="flex items-center py-3 gap-2 text-sm">
            <p>Already have an account?</p>
            <Link href={"/login/with-email"} className="text-orange-600">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
