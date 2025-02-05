import React, { Component } from "react";

import BlogComponent from "../../components/Blog/Blog";

class Blog extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <React.Fragment>
        <BlogComponent />
      </React.Fragment>
    );
  }
}
//demo is this
export default Blog;
