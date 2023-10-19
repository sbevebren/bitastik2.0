import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 60 }, (_, i) => currentYear + 4 - i);

const UserForm = ({ updateUser }) => {
  
  const initialValues = {
    image: "",
    roll: "",
    github: "",
    linkedIn: "",
    insta: "",
    bio: "",
    branch: "",
    yearofgraduation: "",
    hostel: "",
    room: "",
    phoneCountryCode: "+91", // Default country code to +91
    phone: "",
    birthdate: "", // Use null for the initial value of the date
  };

  const validationSchema = Yup.object().shape({
    image: Yup.string(),
    roll: Yup.string(),

    insta: Yup.string().matches(
      /^(https?:\/\/)?(www\.)?instagram\.com\/[a-zA-Z0-9_]+$/,
      "Invalid Instagram URL"
    ),
  
    github: Yup.string().matches(
      /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_]+$/,
      "Invalid GitHub URL"
    ),
  
    linkedIn: Yup.string().matches(
      /^(https?:\/\/)?(www\.)?linkedin\.com\/(in|pub)\/[a-zA-Z0-9_]+$/,
      "Invalid LinkedIn URL"
    ),

    bio: Yup.string(),
    branch: Yup.string().required("Branch is required"),
    yearofgraduation: Yup.string().required("Year of Graduation is required"),

    room: Yup.string()
    .test("is-number", "Room must be a valid number", (value) => {
      if (!value) return true; // Allow empty value
      return /^\d+$/.test(value);
    }),

  hostel: Yup.string()
    .test("is-number", "Hostel must be a valid number", (value) => {
      if (!value) return true; // Allow empty value
      return /^\d+$/.test(value);
    }),
    
    phoneCountryCode: Yup.string().required("Country code is required"),
    phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Phone number must be a 10-digit number"),

  });

  const onSubmit = async (values) => {
    // Submit the form data to the server or perform other actions
    try {
      // Submit the form data to the server using the updateUser function
      console.log("Form submitted successfully");
      await updateUser(values);
      
      // Optionally, you can handle success here, e.g., show a success message
    } catch (error) {
      // Handle any errors that occur during form submission
      console.error("Form submission error:", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="max-w-md ml-16 mt-5 p-4">
      <h2 className="text-2xl font-semibold mb-4 text-white">User Information</h2>
      <form onSubmit={formik.handleSubmit} className="flex flex-wrap ">
        <div className="w-full md:w-1/2 mb-4 pr-2">
          <label htmlFor="branch" className="block text-white mb-2">
            Branch
          </label>
          <select
            id="branch"
            name="branch"
            value={formik.values.branch}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border rounded-md p-2 w-full ${
              formik.touched.branch && formik.errors.branch
                ? "border-red-500"
                : "border-gray-300"
            }`}
          >
            <option value="" label="Select Branch" />
            <option
              value="ECE"
              label="Electronics and Communication Engineering"
            />
            <option value="CSE" label="Computer Science and Engineering" />
            <option value="MECH" label="Mechanical Engineering" />
            <option value="PROD" label="Production Engineering" />
            <option
              value="EEE"
              label="Electrical and Electronics Engineering"
            />
            <option value="BIO" label="Biotechnology" />
            <option value="IT" label="Information Technology" />
            <option value="CIVIL" label="Civil Engineering" />
            <option value="CHEM" label="Chemical Engineering" />
          </select>
          {formik.touched.branch && formik.errors.branch && (
            <p className="text-red-500 mt-2">{formik.errors.branch}</p>
          )}
        </div>

        <div className="w-full md:w-1/2 mb-4 pl-2">
          <label
            htmlFor="yearofgraduation"
            className="block text-white mb-2"
          >
            Year of Graduation
          </label>
          <select
            id="yearofgraduation"
            name="yearofgraduation"
            value={formik.values.yearofgraduation}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border rounded-md p-2 w-full ${
              formik.touched.yearofgraduation && formik.errors.yearofgraduation
                ? "border-red-500"
                : "border-gray-300"
            }`}
          >
            <option value="" label="Select Year" />
            {years.map((year) => (
              <option key={year} value={year} label={year} />
            ))}
          </select>
          {formik.touched.yearofgraduation &&
            formik.errors.yearofgraduation && (
              <p className="text-red-500 mt-2">
                {formik.errors.yearofgraduation}
              </p>
            )}
        </div>
        <div className="w-full md:w-1/2 mb-4 pr-2">
          <label htmlFor="github" className="block text-white mb-2">
            GitHub
          </label>
          <input
            type="text"
            id="github"
            name="github"
            value={formik.values.github}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border rounded-md p-2 w-full ${
              formik.touched.github && formik.errors.github
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.github && formik.errors.github && (
            <p className="text-red-500 mt-2">{formik.errors.github}</p>
          )}
        </div>

        <div className="w-full md:w-1/2 mb-4 pl-2">
          <label htmlFor="linkedIn" className="block text-white mb-2">
            LinkedIn
          </label>
          <input
            type="text"
            id="linkedIn"
            name="linkedIn"
            value={formik.values.linkedIn}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border rounded-md p-2 w-full ${
              formik.touched.linkedIn && formik.errors.linkedIn
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.linkedIn && formik.errors.linkedIn && (
            <p className="text-red-500 mt-2">{formik.errors.linkedIn}</p>
          )}
        </div>
        <div className="w-full md:w-1/2 mb-4 pr-2">
          <label htmlFor="insta" className="block text-white mb-2">
            Instagram
          </label>
          <input
            type="text"
            id="insta"
            name="insta"
            value={formik.values.insta}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border rounded-md p-2 w-full ${
              formik.touched.insta && formik.errors.insta
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.insta && formik.errors.insta && (
            <p className="text-red-500 mt-2">{formik.errors.insta}</p>
          )}
        </div>

        <div className="w-full md:w-1/2 mb-4 pl-2">
          <label htmlFor="bio" className="block text-white mb-2">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            value={formik.values.bio}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border rounded-md p-2 w-full ${
              formik.touched.bio && formik.errors.bio
                ? "border-red-500"
                : "border-gray-300"
            }`}
          ></textarea>
          {formik.touched.bio && formik.errors.bio && (
            <p className="text-red-500 mt-2">{formik.errors.bio}</p>
          )}
        </div>
        {/* Pair 6: Hostel and Room */}
        <div className="w-full md:w-1/2 mb-4 pr-2">
          <label htmlFor="hostel" className="block text-white mb-2">
            Hostel
          </label>
          <input
            type="text"
            id="hostel"
            name="hostel"
            value={formik.values.hostel}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border rounded-md p-2 w-full ${
              formik.touched.hostel && formik.errors.hostel
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.hostel && formik.errors.hostel && (
            <p className="text-red-500 mt-2">{formik.errors.hostel}</p>
          )}
        </div>

        <div className="w-full md:w-1/2 mb-4 pl-2">
          <label htmlFor="room" className="block text-white mb-2">
            Room
          </label>
          <input
            type="text"
            id="room"
            name="room"
            value={formik.values.room}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`border rounded-md p-2 w-full ${
              formik.touched.room && formik.errors.room
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.room && formik.errors.room && (
            <p className="text-red-500 mt-2">{formik.errors.room}</p>
          )}
        </div>

        {/* Pair 7: Phone */}
        <div className="w-full md:w-1/2 mb-4 pr-2">
          <label htmlFor="phone" className="block text-white mb-2">
            Phone
          </label>
          <div className="flex">
            <select
              id="phoneCountryCode"
              name="phoneCountryCode"
              value={formik.values.phoneCountryCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`border rounded-md p-2 ${
                formik.touched.phoneCountryCode &&
                formik.errors.phoneCountryCode
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            >
              <option value="+91">+91</option>
              {/* Add more country codes if needed */}
            </select>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`border rounded-md p-2 w-full ml-2 ${
                formik.touched.phone && formik.errors.phone
                  ? "border-red-500"
                  : "border-gray-300"
              }`}
            />
          </div>
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-500 mt-2">{formik.errors.phone}</p>
          )}
        </div>

        {/* Pair 8: Birthdate */}
        <div className="w-full mb-4">
          <label htmlFor="birthdate" className="block text-white mb-2">
            Birthdate
          </label>
          <DatePicker
            id="birthdate"
            name="birthdate"
            selected={formik.values.birthdate}
            onChange={(date) => formik.setFieldValue("birthdate", (date))}
            onBlur={formik.handleBlur}
            dateFormat="dd MMM yyyy"
            className={`border rounded-md p-2 w-full ${
              formik.touched.birthdate && formik.errors.birthdate
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />
          {formik.touched.birthdate && formik.errors.birthdate && (
            <p className="text-red-500 mt-2">{formik.errors.birthdate}</p>
          )}
        </div>

        <div className="w-full mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            // onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
