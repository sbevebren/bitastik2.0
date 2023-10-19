import link from "../../../assets/link.png";
import insta from "../../../assets/insta.png";
import git from "../../../assets/git.png";
import whatsapp from "../../../assets/whatsapp.png";
import gmail from "../../../assets/gmail.png";
import profile from "../../../assets/shinchan.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import React from "react";

function ProfileCard({ info, onClose }) {
  const nameWords = info.name.split(" ");

  return (
    <section className="sm:w-80 w-64 mx-4 my-4 bg-transparent hover:bg-gray-700 rounded-2xl border px-6 py-6 shadow-lg font-mono ">
      <div className="flex flex-row-reverse justify-between">
        {onClose && (
          <div
            className="w-6 h-6 rounded-full bg-red-500 cursor-pointer flex items-center justify-center"
            onClick={onClose}
          >
            <div className="w-4 h-1 bg-white transform rotate-45 absolute"></div>
            <div className="w-4 h-1 bg-white transform -rotate-45 absolute"></div>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm font-bold">{info.branch}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-sm font-bold">
            {info.yearofgraduation}
          </span>
        </div>
      </div>

      <div className="mt-6 w-fit mx-auto">
        <Image
          src={profile}
          className="rounded-full w-28 h-28 "
          alt="profile picture"
        />
      </div>

      <div className="mt-8">
        {nameWords.map((word, index) => (
          <h2
            key={index}
            className="text-white font-bold text-2xl tracking-wide"
          >
            {word}
          </h2>
        ))}
      </div>
      <p className="text-emerald-400 font-semibold mt-2.5 font-mono">
        {info.bio}
      </p>

      <aside className="flex mt-3 space-x-3">
        <a
          href={info.linkedIn}
          target="_blank"
          className="mt-7 text-lg flex-auto text-center p-1 m-1 hover:text-shadow-md"
        >
          <span className="w-4 h-4">
            <Image src={link} height={24} width={24} alt="" />
          </span>
        </a>
        <a
          href="#"
          target="_blank"
          className="mt-7 text-lg flex-auto text-center p-1 m-1 hover:text-shadow-md"
        >
          <span className="w-4 h-4">
            <Image src={insta} height={24} width={24} alt="" />
          </span>
        </a>
        <a
          href={info.github}
          target="_blank"
          className="mt-7 text-lg flex-auto  text-center  hover:text-shadow-md"
        >
          <span className="w-4 h-4">
            {/* <Image src={git} height={24} width={24} alt="" /> */}
            <GitHubIcon
              style={{ color: "white", height: "24", width: "24" }}
            />
          </span>
        </a>
        <a
          href={`https://wa.me/${info.phone}`}
          target="_blank"
          className="mt-7 text-lg flex-auto text-center p-1 m-1 hover:text-shadow-md"
        >
          <span className="w-4 h-4">
            <Image src={whatsapp} height={24} width={24} alt="" />
          </span>
        </a>
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${info.email}`}
          target="_blank"
          className="mt-7 text-lg flex-auto text-center p-1 m-1 hover:text-shadow-md"
        >
          <span className="w-4 h-4">
            <Image src={gmail} height={24} width={24} alt="" />
          </span>
        </a>
      </aside>
      <div className="mt-3 text-white text-sm"></div>
    </section>
  );
}

export default ProfileCard;
