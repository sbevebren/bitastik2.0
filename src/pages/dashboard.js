import React, { useEffect, useState} from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import pencil from "../../assets/pencil.gif";
import ProfileCard from "@/components/bitians/ProfileCard";
import { useRouter } from "next/router";

const HomeComponent = ({info}) => {
  const [isOpen, setIsOpen] = useState(true);
  // const [info, setInfo] = useState(null);
  
 
  const router = useRouter();
  const handleCloseCard = () => {
    setIsOpen(false);
    router.push("/bitians");
  };
  // useEffect(() => {
  //   const findUser = async (email) => {
  //     const res = await axios.get(`/api/user?email=${email}`);
  //     setInfo(res.data.user[0]);
  //   };
  //   findUser("btech10103.20@bitmesra.ac.in");
  // }, []);

  const cardClassName = isOpen
    ? "transition-opacity duration-50 ease-in-out ml-16"
    : "hidden";

  return (
    <div className="flex flex-col justify-evenly ">
      <div>
        <Link href="/userform">
          <button className="fixed z-10 top-0 right-0 m-2 p-2 text-black bg-white rounded-md shadow-md">
            <Image src={pencil} height={36} width={36} alt="" />
            <span>Edit Profile</span>
          </button>
        </Link>
      </div>

      <div className={cardClassName}>
        <div > {info && <ProfileCard info={info} onClose={handleCloseCard} />}</div>
      </div>
    </div>
  );
};

export default HomeComponent;


export async function getServerSideProps() {
  const email="btech10103.20@bitmesra.ac.in"
  try {
    const response = await axios.get(`https://bitastik2.vercel.app/api/user?email=${email}`);
    console.log(response.data);
    const info = response.data.user[0];
  
    return {
      props: {
        info,
      },
    };
  } catch (error) {
    console.error("Error fetching user info:", error);
    return {
      props: {
        info: null,
      },
    };
  }
}