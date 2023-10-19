// import ConfessionList from "@/components/confessions/ConfessionList";
// import useSWR from "swr";
// import axios from "axios";

// const ConfessionPage = () => {
//   const fetcher = (url) => axios.get(url).then((res) => res.data);
//   const { data, mutate, error } = useSWR("/api/confession", fetcher, {
//     refreshInterval: 1000,
//     revalidateOnFocus: true,
//     revalidateOnReconnect: true,
//   });

//   if (!data) return <div>Loading...</div>;

//   const refreshConfessions = () => {
//     mutate();
//   };
//   const upvoteHandler = async (_id) => {
//     const response = await axios.put("/api/confession", {
//       email: "hardikgupta0506@gmail.com",
//       _id: _id,
//       vote: "upvote",
//     });

//     refreshConfessions();
//   };

//   const downvoteHandler = async (_id) => {
//     const response = await axios.put("/api/confession", {
//       email: "hardikgupta0506@gmail.com",
//       _id: _id,
//       vote: "downvote",
//     });

//     refreshConfessions();
//   };

//   return (
//     <div className="w-3/4 ml-16 ">
//       <ConfessionList
//         confessions={data.confessions}
//         upvoteHandler={upvoteHandler}
//         downvoteHandler={downvoteHandler}
//         refreshConfessions={refreshConfessions}
//       />
//     </div>
//   );
// };

// export default ConfessionPage;

import ConfessionList from "@/components/confessions/ConfessionList";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const ConfessionPage = ({ initialData }) => {
  const { data, mutate, error } = useSWR("/api/confession", fetcher, {
    initialData: initialData,
    refreshInterval: 1000,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
  });

  const refreshConfessions = () => {
    mutate();
  };

  const upvoteHandler = async (_id) => {
    try {
      await axios.put("/api/confession", {
        email: "btech10103.20@bitmesra.ac.in",
        _id: _id,
        vote: "upvote",
      });
      refreshConfessions();
    } catch (error) {
      console.error("Error upvoting confession:", error);
    }
  };

  const downvoteHandler = async (_id) => {
    try {
      await axios.put("/api/confession", {
        email: "btech10103.20@bitmesra.ac.in",
        _id: _id,
        vote: "downvote",
      });
      refreshConfessions();
    } catch (error) {
      console.error("Error downvoting confession:", error);
    }
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className="w-3/4 ml-16 ">
      <ConfessionList
        confessions={data.confessions}
        upvoteHandler={upvoteHandler}
        downvoteHandler={downvoteHandler}
        refreshConfessions={refreshConfessions}
      />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const response = await axios.get(
      "https://bitastik2.vercel.app/api/confession"
    );
    console.log("igig", response);
    const initialData = response.data;

    return {
      props: {
        initialData,
      },
    };
  } catch (error) {
    console.error("Error fetching initial data:", error);
    return {
      props: {
        initialData: null,
      },
    };
  }
}

export default ConfessionPage;
