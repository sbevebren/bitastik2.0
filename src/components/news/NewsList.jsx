import NewsItem from "./NewsItem";
import React from "react";
import Image from "next/image";
import newspaper from "../../../assets/newspaper.png";

function NewsList({ data }) {
  return (
    <div>
      <div className=" w-full mx-2 bg-transparent justify-center text-center pt-4">
        <h1 className="text-white text-3xl font-semibold flex justify-center ">
          <span className="inline-block ">
            <Image src={newspaper} height={48} width={48} alt="" />
          </span>
          Newsroom
        </h1>
      </div>

      <div className="mt-10  flex flex-wrap justify-center font-mono gap-20 mx-2">
        {data.map((news) =>  (
      <NewsItem
        key={news._id}
        id={news.id}
        image={news.image}
        title={news.title}
        date={news.date}
        createdAt={news.createdAt}
        description={news.description}
      />
    )
  )}
      </div>
    </div>
  );
}

export default NewsList;
