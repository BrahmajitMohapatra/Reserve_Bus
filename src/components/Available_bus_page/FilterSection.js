import React from "react";
import BusInfo from "./BusInfo";

function FilterSection() {
  return (
    <div>
      <div>
        <ul className="flex space-x-16 border-solid border-2 w-52 rounded-lg  mx-6 my-8">
          <li className="mx-3 my-1">Filter</li>
          <li className="my-1">Clear all</li>
        </ul>
        <div className=" border-solid border-2 w-52 rounded-lg h-auto mx-6 my-8">
          <h1>Departure</h1>
          <form>
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
          </form>
          <h1>Arrival</h1>
          <form>
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
          </form>
          <h1>Pick point</h1>
          <form>
            <input type="radio"  name="city" value="Hyderabad" /> 
            <label for="Hyderabad">Hyderabad</label>
            <br />
            <input type="radio" id="css" name="city" value="Chennai" /> 
            <label for="Chennai">Chennai</label>
            <br />
            <input
              type="radio"
              name="city"
              value="Delhi"
            />
            <label for="Delhi">Delhi</label>
          </form>
          <br/>
          <hr/>
          <h1>Drop point</h1>
          <form>
            <input type="radio"  name="city" value="Hyderabad" />
            <label for="Hyderabad">Hyderabad</label>
            <br />
            <input type="radio" id="css" name="city" value="Chennai" />
            <label for="Chennai">Chennai</label>
            <br />
            <input
              type="radio"
              name="city"
              value="Delhi"
            />
             <label for="Delhi">Delhi</label>
          </form>
          <br/><hr/>
          <h1>Bus rating</h1>
          <form>
            <input type="checkbox" name="morning" value="morning" />
            <label for="Morning"> 4 star &more</label>
            <br />
            <input type="checkbox" name="Afternoon" value="Afternoon" />
            <label for="Afternoon"> 3 star &more</label>
            <br />
            <input type="checkbox" name="Evening" value="Evening" />
            <label for="Evening"> 0-2star</label>
            <br />
            <br/>
            <hr />
          </form>
          <h1>Bus Operator</h1>
          <form>
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
