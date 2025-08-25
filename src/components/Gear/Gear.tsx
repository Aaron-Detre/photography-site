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
      text="My first (and only) digital camera body. I've had it since June 2024, and every picture on this site and on my Instagram was taken using this camera."
      photoFirst={true}
      photoWidth="45%"
    />
    <GearItem
      photoUrl="/gear/40-150.png"
      photoAlt="Olympus M.Zuiko Digital ED 40-150mm f/4.0-5.6 R lens"
      name="Olympus M.Zuiko Digital ED 40-150mm f/4.0-5.6 R"
      text="The first lens I purchased after quickly getting sick of the kit lens that came with the camera. I originally got it for wildlife, but I've ended up using it for lots more than that."
      photoFirst={false}
      photoWidth="30%"
    />
    <GearItem
      photoUrl="/gear/25.png"
      photoAlt="Olympus M.Zuiko Digital 25mm f/1.8 lens"
      name="Olympus M.Zuiko Digital 25mm f/1.8"
      text="This is the second lens I purchased. I got it about 6 months into using camera, and it quickly became my go-to lens for most scenarios."
      photoFirst={true}
      photoWidth="35%"
    />
    <GearItem
      photoUrl="/gear/17.png"
      photoAlt="Olympus M.Zuiko Digital 17mm f/1.8 lens"
      name="Olympus M.Zuiko Digital 17mm f/1.8"
      text="My newest lens. I definitely struggle a bit to find wider compositions, so it's been a good challenge. It's also been fun to experiment with zone focusing using the manual focus mode."
      photoFirst={false}
      photoWidth="35%"
    />
  </div>
);

export default Gear;
