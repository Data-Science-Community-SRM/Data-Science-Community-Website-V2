import React from "react";
import box from "../../assets/images/blog/box.png"
import bc from "../../assets/images/blog/bc.png"
import ai from "../../assets/images/blog/ai.png"
import web from "../../assets/images/blog/web.png"
// import { Button } from "reactstrap";

import "./Blog.css";

const Blog = () => {
  // useEffect(() => {
  //     // try {
  //     //   var widget = document.getElementById("medium-widget");
  //     //   if (!!widget) {
  //     //     window.mediumWidget();
  //     //   }
  //     // } catch (e) {
  //     //   window.location.reload();
  //     // }
  // }, []);

  return (
    <React.Fragment>
      <div className="col-12 col-lg-9 mx-auto">
        <h1 data-aos="zoom-in-up" style={{ marginTop: "120px" }}>
          DataX
        </h1>
        <hr/>
        {/*<p style={{ margin: "30px auto" }}>
                    A Multidisciplinary Tech Journal sharing codes, concepts, experiences,
                    and views.
                </p>
                <a href="https://medium.com/data-science-community-srm">
                    <Button dark outline className="btnPublication">
                        Publication Link
                    </Button>
                </a>
                <hr />*/}
        <div className="cards">
            <div className="card-elements" onClick={()=>window.open("https://medium.com/data-science-community-srm/tagged/blockchain")}>
                <img src={box} className="box" alt="box"></img>
                <img src={bc } className="card" alt="card"></img>
            </div>
            <div className="card-elements" onClick={()=>window.open("https://medium.com/data-science-community-srm/tagged/data-science")}>
                <img src={box} className="box" alt="box"></img>
                <img src={ai} className="card" alt="card"></img>
            </div>
            <div className="card-elements" onClick={()=>window.open("https://medium.com/data-science-community-srm/tagged/web-development")}>
                <img src={box} className="box" alt="box"></img>
                <img src={web} className="card" alt="card"></img>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blog;
