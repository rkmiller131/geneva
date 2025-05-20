import Link from "next/link";

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-charcoal rounded-lg">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-3xl font-logo">
          GENEVA
        </h1>
        <h2 className="mt-10 text-center text-md font-header">
          Sign in to your user account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[#1A1A1A] py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
          <form>
            <div className="flex flex-col mb-3">
              <label htmlFor="email" className="text-sm">Email:</label>
              <input type="email" className="bg-white rounded-sm p-1" id="email"/>
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="password" className="text-sm">Password:</label>
              <input type="password" className="bg-white rounded-sm p-1" id="password"/>
            </div>
            <div className="cursor-not-allowed border px-4 text-center mt-6">Submit</div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Don&apos;t have an account?{' '}
              <Link
                href="/sign-up"
                className="font-medium text-gray-300 hover:text-gray-100"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}