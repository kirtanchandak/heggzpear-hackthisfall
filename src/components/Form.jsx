import React from "react";
import { getQuery } from "../Services/Queries";

function Form() {
  getQuery();
  return (
    <div>
      <form action="" method="get">
        <label>Weight(in kg)</label>
        <input type="text" name="" />
        <label>Height(in cm)</label>
        <input type="text" name="" />
        <label>Age</label>
        <input type="text" name="" />
        <label htmlFor="">Gender:</label>
        <select id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="notosay">Prefer Not to Say</option>
        </select>
        <label>Diet:</label>
        <select id="diet">
          <option value="veg">Veg</option>
          <option value="nonveg">Nonveg</option>
          <option value="vegan">Vegan</option>
          <option value="egg">Eggatarian</option>
        </select>
        <label>Diet:</label>
        <select id="addiction">
          <option value="smoking">Somking</option>
          <option value="drinking">Drinking</option>
        </select>
        <label>Your Routine:</label> l
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label for="vehicle1">Wake Up Early</label>
        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
        <label for="vehicle2">You go to bed late</label>
        <br />
        <label>Blood Pressure(approx.)</label>
        <input type="text" name="" />
        <label>Any specific diseases or allergy you have:</label>
        <input type="text" name="" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
