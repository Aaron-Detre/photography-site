import React, { FC } from "react";
import styles from "./Gear.module.css";
import GearItem from "../GearItem/GearItem";

interface GearProps {}

const Gear: FC<GearProps> = () => (
  <div className={styles.Gear} data-testid="Gear">
    <GearItem
      photoUrl="/gear/em10-4.png"
      photoAlt="Olympus OM-D EM-10 Mark IV camera body"
      name="Olympus OM-D EM-10 Mark IV"
      text="some text here?"
    />
    <GearItem
      photoUrl="/gear/40-150.jpg"
      photoAlt="Olympus M.Zuiko Digital ED 40-150mm f/4.0-5.6 R lens"
      name="Olympus M.Zuiko Digital ED 40-150mm f/4.0-5.6 R"
      text="some text here?"
    />
    <GearItem
      photoUrl="/gear/25.jpg"
      photoAlt="Olympus M.Zuiko Digital 25mm f/1.8 lens"
      name="Olympus M.Zuiko Digital 25mm f/1.8"
      text="some text here?"
    />
    <GearItem
      photoUrl="/gear/17.jpg"
      photoAlt="Olympus M.Zuiko Digital 17mm f/1.8 lens"
      name="Olympus M.Zuiko Digital 17mm f/1.8"
      text="some text here?"
    />
  </div>
);

export default Gear;
