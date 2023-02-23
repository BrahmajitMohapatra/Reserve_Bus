import React from "react";
import BusInfo from "./BusInfo";

function FilterSection() {
  return (
    <div>
      <div>
        <form>
          <ul className="flex space-x-16 border-solid border-2 w-52 rounded-lg mx-7 my-4">
            <li className="mx-3 my-1">Filter</li>
            <input type="reset" value="Clear" name=""/>
          </ul>
          <div className=" border-solid border-2 w-52 rounded-lg h-auto mx-7 my-5 px-1">
            <h1>Departure</h1>
            <input type="checkbox" name="morning" value="morning" />
            <label for="Morning"> Morning Session</label>
            <br />
            <input type="checkbox" name="Afternoon" value="Afternoon" />
            <label for="Afternoon"> Afternoon Session</label>
            <br />
            <input type="checkbox" name="Evening" value="Evening" />
            <label for="Evening"> Evening Session</label>
            <br />
            <br />
            <hr />
            <h1>Arrival</h1>
            <input type="checkbox" name="morning" value="morning" />
            <label for="Morning"> Morning Session</label>
            <br />
            <input type="checkbox" name="Afternoon" value="Afternoon" />
            <label for="Afternoon"> Afternoon Session</label>
            <br />
            <input type="checkbox" name="Evening" value="Evening" />
            <label for="Evening"> Evening Session</label>
            <br />
            <br />
            <hr />
            <h1>Pick point</h1>
            <input type="radio" name="city" value="Hyderabad" /> 
            <label for="Hyderabad">Hyderabad</label>
            <br />
            <input type="radio" id="css" name="city" value="Chennai" /> 
            <label for="Chennai">Chennai</label>
            <br />
            <input type="radio" name="city" value="Delhi" />
            <label for="Delhi">Delhi</label>
            <br />
            <br />
            <hr />
            <h1>Drop point</h1>
            <input type="radio" name="city" value="Hyderabad" />
            <label for="Hyderabad">Hyderabad</label>
            <br />
            <input type="radio" id="css" name="city" value="Chennai" />
            <label for="Chennai">Chennai</label>
            <br />
            <input type="radio" name="city" value="Delhi" />
            <label for="Delhi">Delhi</label>
            <br />
            <br />
            <hr />
            <h1>Bus rating</h1>
            <input type="checkbox" name="morning" value="morning" />
            <label for="Morning"> 4 star &more</label>
            <br />
            <input type="checkbox" name="Afternoon" value="Afternoon" />
            <label for="Afternoon"> 3 star &more</label>
            <br />
            <input type="checkbox" name="Evening" value="Evening" />
            <label for="Evening"> 0-2star</label>
            <br />
            <br />
            <hr />
            <h1>Bus Operator</h1>
            <input type="checkbox" name="morning" value="morning" />
            <label for="Morning"> Zing bus</label>
            <br />
            <input type="checkbox" name="Afternoon" value="Afternoon" />
            <label for="Afternoon"> Intercity smart</label>
            <br />
            <input type="checkbox" name="Evening" value="Evening" />
            <label for="Evening"> Safar exp</label>
            <br />
            <br />
            <hr />
          </div>
        </form>
      </div>
    </div>
  );
}

export default FilterSection;
