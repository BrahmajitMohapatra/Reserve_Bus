import React, {  useState } from "react";
import "../../Styles/Homepage/traveling.css";
import { useNavigate } from "react-router-dom";
import axios from "axios"

export const Traveling = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    from: "",
    to: "",
    travelDate: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
      navigate("/available_bus");
      try {
         axios.post("http://localhost:5000",{
          formValues
        })
      } catch (error) {
        console.log(error)
      }
    
  };
 

  const { from, to, travelDate } = formValues;

  const [value, setValue] = useState("");
  const data = ["Mumbai ", "Hyderabad", "Delhi", "Chennai", "Banglore"];

  return (
    <div>
      <div className="main-container">
      <form onSubmit={handleSubmit}>
          <div className="flex-col flex items-center">
            <div className="flex flex-col md:flex-row justify-center items-center pt-[15vh] h-[35vh] rounded-xl ">
              <div className="border-2 pr-3 py-4 rounded-l-xl text-left pl-3 bg-white">
                <label className="text-xl font-bold">
                  From
                  <input
                    type="text"
                    name="from"
                    className="flex w-[18vw] h-12 my-2 text-xl"
                    value={from}
                    list="from-list"
                    onChange={handleChange}
                  />
                  <datalist id="from-list">
                    {data.map((city, id) => (
                      <option key={id} value={city} />
                    ))}
                  </datalist>
                </label>
              </div>
              <div className="border-2 pr-3 py-4 flex flex-col text-left pl-3 bg-white">
                <label className=" text-xl font-bold">
                  To
                  <input
                    type="text"
                    name="to"
                    className="flex w-[18vw] h-12 my-2 text-xl"
                    value={to}
                    list="from-list"
                    onChange={handleChange}
                  />
                    <datalist id="from-list">
                    {data.map((city, id) => (
                      <option key={id} value={city} />
                    ))}
                  </datalist>
                </label>
              </div>
              <div className="border-2 pr-3 py-4 pl-3 text-left  rounded-r-xl bg-white">
                <label className="text-xl font-bold ">
                  Travel Date
                  <input
                    type="date"
                    name="travelDate"
                    className="flex w-[12vw] h-12 my-2 text-xl "
                    value={travelDate}
                    onChange={handleChange}
                  />
                
                </label>
              </div>
            </div>
            <button
              type="submit"
              className={`text-white bg-orange-500 mt-6 p-4 text-3xl rounded-xl px-16 `
                    }
            >
              Search
            </button>
          </div>
        </form>   
      </div>
    </div>
  );
};
export default Traveling;
