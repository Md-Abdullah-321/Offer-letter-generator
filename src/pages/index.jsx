import { useState } from "react";
import { useNavigate } from "react-router-dom";

const init = {
  name: "",
  email: "",
  field: "",
  startDate: "",
  endDate: "",
};

function generateRefNumber() {
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var year = new Date().getFullYear().toString();
  var randomNum = Math.floor(Math.random() * 900000) + 100000;
  var randomLetter = letters.charAt(Math.floor(Math.random() * letters.length));

  var refNumber = "SMM" + year + randomLetter + randomNum;

  return refNumber;
}

function OfferLetterGeneratorForm() {
  const [formData, setFormData] = useState({ ...init });
  const navigate = useNavigate();
  const sectors = [
    "Education",
    "Health and Nutrition",
    "Women Empowerment",
    "Skill Development",
    "Environment and Sustainability",
    "Rural Development",
    "Social Entrepreneurship",
    "Fundraising and Marketing",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.field &&
      formData.startDate &&
      formData.endDate
    ) {
      localStorage.setItem(
        "candidate",
        JSON.stringify({ ...formData, ref: generateRefNumber() })
      );
      navigate("/generate");
    } else {
      alert("Please, fill all the input field");
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-slate-100 flex flex-col gap-4 p-3 max-w-lg w-full rounded-lg">
        <h1 className="text-center text-2xl font-semibold">
          Offer Letter Form
        </h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter candidate's name"
            className="p-3 rounded-lg outline-none"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter candidate's name"
            className="p-3 rounded-lg outline-none"
          />

          <select
            name="field"
            value={formData.field}
            onChange={handleChange}
            className="p-3 rounded-lg outline-none bg-white text-gray-500"
          >
            <option value="">Select intern sector</option>
            {sectors.map((sector, index) => {
              return (
                <option key={index} value={sector}>
                  {sector}
                </option>
              );
            })}
          </select>

          <div className="flex w-full justify-between items-center p-3 rounded-lg  bg-white text-gray-500">
            <p>Start Date:</p>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="outline-none"
            />
          </div>

          <div className="flex w-full justify-between items-center p-3 rounded-lg  bg-white text-gray-500">
            <p>End Date:</p>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="outline-none"
            />
          </div>
          <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95">
            Generate Offer Letter
          </button>
        </form>
      </div>
    </div>
  );
}

export default OfferLetterGeneratorForm;
