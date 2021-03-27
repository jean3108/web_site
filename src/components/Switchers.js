import { useState } from "react";
import Switch from "react-switch";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3 from "@material-ui/icons/Brightness3";

export default function Switchers() {
  const [checkState, setCheckState] = useState({
    darkCheck: false,
    themeCheck: false,
  });

  const handleChange = (stateName, event) => {
    setCheckState({ ...checkState, [stateName]: event });
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Switch
        name="darkCheck"
        checked={checkState.darkCheck}
        onChange={(e) => handleChange("darkCheck", e)}
        offColor="#f00"
        onColor="#00f"
        uncheckedIcon=""
        checkedIcon=""
      />
      <Switch
        name="themeCheck"
        checked={checkState.themeCheck}
        onChange={(e) => handleChange("themeCheck", e)}
        offColor="#fff"
        onColor="#fff"
        offHandleColor="#000"
        onHandleColor="#000"
        uncheckedIcon={
          <div
            style={{
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 25,
              paddingRight: 2,
            }}
          >
            {"\u{2600}"}
          </div>
        }
        checkedIcon={
          <div
            style={{
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 25,
              paddingRight: 2,
            }}
          >
            {"\u{263D}"}
          </div>
        }
      />
    </div>
  );
}
