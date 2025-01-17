import React from "react";
import styles from "./AnotherReason.css";

const AnotherREasonItem = ({ title, desc, Icon }) => {
  return (
    <li>
      <div className={styles.Container}>
        <div className={styles.wrap}>
          <p className={styles.title}>{title}</p>
          <p className={styles.desc}>{desc}</p>
        </div>
        <Icon className={styles.icon} />
      </div>
    </li>
  );
};

export default AnotherREasonItem;
