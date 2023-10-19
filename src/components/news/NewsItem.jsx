import React, { useState } from "react";
import Image from "next/image";
import shinchan from "../../../assets/shinchan.jpg";
import newsroom from "../../../assets/newsroom.jpg";
import Modal from "./Modal";

function NewsItem(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function showDetailsHandler() {
    setIsModalOpen(true);
  }

  const truncatedDescription =
    props.description.length > 18
      ? props.description.slice(0, 18) 
      : props.description;

  var providedDate = new Date(props.createdAt);


// Extract individual components
var year = providedDate.getFullYear();
var month = ('0' + (providedDate.getMonth() + 1)).slice(-2); // Months are zero-based
var day = ('0' + providedDate.getDate()).slice(-2);
var hours = ('0' + providedDate.getHours()).slice(-2);
var minutes = ('0' + providedDate.getMinutes()).slice(-2);
var seconds = ('0' + providedDate.getSeconds()).slice(-2);

// Format the date and time as a string
var formattedDateTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  return (
    <div className="max-w-sm rounded-lg shadow mx-4  border">
      <Image className="rounded-t-lg" src={shinchan} alt="" width={350} />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-pink-500 ">
          {props.title}
        </h5>
        <h5 className="mb-2 text-lg font-bold tracking-tight text-green-400 ">
          {formattedDateTime}
        </h5>
        <p className="mb-3 font-normal text-blue-400">
          {truncatedDescription}
          {props.description.length > 18 && (
            <span
              onClick={showDetailsHandler}
              className="text-blue-700 cursor-pointer"
            >
              {" "}
              ...Read more
            </span>
          )}
        </p>
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          title={props.title}
          content={props.description}
        />
      </div>
    </div>
  );
}

export default NewsItem;
