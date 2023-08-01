import React from 'react'
import styles from './Carouselcard.module.css'
import {LuInfo} from "react-icons/lu";
// import classnames from 'classnames';


const Carouselcard = ({title,description,image,repo_link}) => {


  return (
    <>
    
    <div className={styles.container}>
    <div className={styles.info_icon}>
                    <LuInfo />


                </div>
        <div className={styles.card}>

            <div className={styles.upper}>
                <div>
                    <img src="https://www.ntaskmanager.com/wp-content/uploads/2021/01/IT-Project-management.jpg.webp" alt="" />
                    {/* <p>image</p> */}

                </div>
                

            </div>

            <div className={styles.lower}>
                <div className={styles.title}>
                    <h1>{title}</h1>

                </div>
                <div className={styles.description}>
                    <h3>{description}</h3>

                </div>

            </div>


        </div>


    </div>


    
    

    
    
    </>
  )
}

export default Carouselcard