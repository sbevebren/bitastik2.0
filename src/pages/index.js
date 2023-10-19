import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import StarsCanvas from "@/components/Animation/Stars";
import SignInButton from "@/components/signInButton/SignInButton";
import TypeItComponent from "@/components/landing/TypeIt";
function Home() {
  const [name, setName] = useState("");
  const router = useRouter();
  const session = useSession();
  console.log("mai aya");
  const handleSignIn=()=>{
     signIn('google')
  }
  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/dashboard");
    }
  }, [session, router]);

  return (
    <div className="bg-primary min-h-screen relative z-0">
      <SignInButton handleSignIn={handleSignIn} />

      <TypeItComponent />
      <StarsCanvas />
    </div>
  );
}
Home.getLayout = (page) => <div>{page}</div>;
export default Home;
