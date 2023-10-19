export default function SignInButton({handleSignIn}) {
  return (
    <button
      onClick={() => handleSignIn()}
      className="main font-montserrat inline-block rounded-md bg-black border-none text-white text-center text-2xl py-3 px-4 w-auto transition-all duration-500 cursor-pointer mx-1 absolute top-0 right-0"
    >
      <span className="relative inline-block transition-500">
        Sign In/Up
        <span className="absolute opacity-0 top-0 right-[-20px] transition-500">
          »
        </span>
      </span>
    </button>
  );
}
