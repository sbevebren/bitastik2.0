import UserForm from "@/components/bitians/UserForm";

function EditProfile() {
  async function updateUser(data) {
    const inputDate = new Date(data.birthdate);

    const day = inputDate.getDate().toString().padStart(2, "0");
    const month = (inputDate.getMonth() + 1).toString().padStart(2, "0"); // Note: Months are 0-based, so we add 1.
    const year = inputDate.getFullYear();

    const formattedDate = `${day}-${month}-${year}`;
    const updatedData = {
      ...data, // Copy the original data
      birthdate: formattedDate, // Update the birthdate property with formattedDate
    };

    console.log(typeof formattedDate); // Output: "05-09-2023"
    console.log("====================================");
    console.log(data.birthdate);
    console.log("====================================");
    await fetch(`/api/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
  }
  return (
    <div>
      <UserForm updateUser={updateUser} />
    </div>
  );
}

export default EditProfile;
