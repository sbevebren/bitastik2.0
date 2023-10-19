import NewsList from "@/components/news/NewsList";
import axios from "axios";
import Link from "next/link";
import add from "../../assets/add.gif";
import Image from "next/image";

const NewsPage = ({ news }) => {
  
  if(!news) return <div>Loading...</div>

  return (
    <div className="w-3/4 ml-16">
      <Link href="/addnews">
        <div>
          <button className="fixed top-0 right-0 m-2 p-2 text-black bg-white rounded-md shadow-md hidden">
            <Image src={add} height={36} width={36} alt="" />
            <span >Add News</span>
          </button>
        </div>
      </Link>
      <NewsList data={news} />
    </div>
  );
};


export async function getServerSideProps() {
  
  try {
    const response = await axios.get("https://bitastik2.vercel.app/api/news");
    const news= response.data.news;
    return {
      props: {
        news
      },
    };
  } catch (error) {
    console.error("Error fetching initial data:", error);
    return {
      props: {
        news: null,
      },
    };
  }
}


export default NewsPage;