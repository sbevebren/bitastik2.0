import ProfileCard from "./ProfileCard";

function ProfileList({ bitians }) {

  return (
    <div className="flex flex-row flex-wrap ml-16 mt-8 justify-center overflow-hidden">
      {bitians.map((bitian) => (
        <ProfileCard key={bitian.email} info={bitian} />
      ))}
    </div>
  );
}

export default ProfileList;
