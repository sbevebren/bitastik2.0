
import GradYear from "@/components/bitians/GradYear";
import Branches from "@/components/bitians/Branches";
import {  useState } from "react";
import ProfileList from "@/components/bitians/ProfileList";

export default function Home({ bitians }) {
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedBranches, setSelectedBranches] = useState([]);

  
  const updateSelectedYears = (years) => {
    setSelectedYears(years);
  };

  const updateSelectedBranches = (branches) => {
    setSelectedBranches(branches);
  };


  const filteredByYears =
    selectedYears.length === 0
      ? bitians
      : bitians.filter((bitian) => selectedYears.includes(bitian.yearofgraduation) );

  const filteredByBranches =
    selectedBranches.length === 0
      ? bitians
      : bitians.filter((bitian) => selectedBranches.includes(bitian.branch));


  const filteredBitians = filteredByYears.filter((bitian) =>
    filteredByBranches.includes(bitian)
  );

  return (
    <div >
      <div className="fixed top-0 right-0 flex flex-row">
        <GradYear
          onSelect={updateSelectedYears}
          selectedYears={selectedYears}
        />
        <Branches
          onSelect={updateSelectedBranches}
          selectedBranches={selectedBranches}
        />
      </div>

      <div className="flex flex-col mt-8 items-center justify-center">
        <ProfileList bitians={filteredBitians} />
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${apiBaseUrl}/api/bitians`);
  const data = await res.json();

  return { props: { bitians: data.bitians_instance } };
}
