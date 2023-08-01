import React from "react";
import styles from "./CardCat.module.css";
import carddata from "../Projects/carddata.json";

const CardCat = () => {
  return (
    <>
      {/* <div>
      hi
    </div> */}

      <div className={styles.container}>
        {carddata.map((item) => (
          <>
            <div key={item.index}>
              <div className={styles.inner_container}>
                <div className={styles.card_background}></div>

                <div className={styles.card}>
                  <div className={styles.image}>
                    <img src="../../assets/images/project.svg" alt="logo" />
                  </div>
                  <div className={styles.content}>
                    <h3>{item.title}</h3>

                    <p>{item.Description}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default CardCat;
