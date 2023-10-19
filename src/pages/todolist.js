import Todolist from "@/components/todo/Todolist";
import { useEffect,useState } from "react";
import useSWR from "swr";
import axios from "axios";
export default function Notes({ initialData}) {
   const email="btech10103.20@bitmesra.ac.in"

    const fetcher = url => axios.get(url).then(res => res.data)
    const { data, mutate, error } = useSWR(`/api/user?email=${email}`, fetcher, { initialData: initialData,
      refreshInterval: 1000,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,});
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>Loading...</div>
    
  const refreshnotes = () => {
    console.log("refreshing notes");
    mutate();
  };
    const addNote = async (newNote) => {
    console.log(newNote);
     const res=await fetch(`/api/user`, {
       method: 'PUT',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({email:email,newNote:newNote}),
     })
     console.log(res.status);
     refreshnotes();
    }

    const deleteNote = async (id) => {
      console.log(id);
      const res=await fetch(`/api/user`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email:email,id:id}),
      })
      console.log(res.status);
      refreshnotes();
     }

     
  return (
    <div className="w-3/4 ml-16" >
      <Todolist notes_old={data.user[0].notes} addNote={addNote} deleteNote={deleteNote}/>
 
    </div>
  );
}


export async function getServerSideProps() {
  const email="btech10103.20@bitmesra.ac.in"
  try {
    const response = await axios.get(`/api/user?email=${email}`);
   const initialData = response.data;
  console.log(initialData);
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