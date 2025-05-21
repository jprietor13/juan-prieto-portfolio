import { NavLink } from "react-router-dom";

import ReactCountryFlag from "react-country-flag";

export const SelectLanguage = () => {
  return (
    <div className="languages">
      <NavLink to="/en">
        <ReactCountryFlag
          countryCode="US"
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
        />
      </NavLink>
      <NavLink to="/">
        <ReactCountryFlag
          countryCode="ES"
          svg
          style={{
            width: "2em",
            height: "2em",
          }}
        />
      </NavLink>
    </div>
  );
};
