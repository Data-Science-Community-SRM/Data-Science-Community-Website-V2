import React, { useState, useEffect } from "react";
import styles from "./CardCat.module.css";
import carddata from "../Projects/carddata.json";

const CardCat = () => {
  const [gridCount, setGridCount] = useState(3);

  useEffect(() => {
    function updateGridCount() {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setGridCount(2);
      } else if (screenWidth <= 480) {
        setGridCount(1);
      } else {
        setGridCount(3);
      }
    }

    updateGridCount();

    // Add event listener to update gridCount on window resize
    window.addEventListener("resize", updateGridCount);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateGridCount);
    };
  }, []);

  

  return (
    <>
      {/* <div>
      hi
    </div> */}

      <div className={styles.container}>
        {carddata.map((item, index) => (
          <div key={item.index} data-aos={getAnimationEffect(index, gridCount)}>
            <div className={styles.inner_container}>
              <div className={styles.card_background}></div>

              <div className={styles.card}>
                <div className={styles.image}>
                  <img src={`../../assets/images/${item.icon}`} alt="logo" />
                </div>
                <div className={styles.content}>
                  <h3>{item.title}</h3>
                  <p>{item.Description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const getAnimationEffect = (index, gridCount) => {
  if (gridCount === 3) {
    // For 3 grid elements, middle one comes from up, others from sides
    return index === 1 ? "fade-up" : index % 2 === 0 ? "fade-right" : "fade-left";
  } else if (gridCount === 2) {
    // For 2 grid elements, they come from left and right
    return index === 0 ? "fade-right" : "fade-left";
  } else {
    // For 1 grid element, it fades up
    return "fade-up";
  }
};

export default CardCat;
