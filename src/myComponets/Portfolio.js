import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
export default function Portfolio() {
  return (
    <div>
      <Navbar />
      {/* --------------------------------------------First One----------------------------- */}
      <div className="container">
        <div className="row my-3">
          <div className="col-md-5">
            <div className="card shadow-sm">
              <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src="https://res.cloudinary.com/dvccsosdc/image/upload/v1706049774/AIBlog_noqybe.gif"
                alt=""
              />
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    AI Blog App ON MERN
                  </span>{" "}
                  Create blog based on topic and keywords ,secure data of
                  users,mongoose to store data.In addition the
                  Bootstrap,openai,auth0 and stripe are include in it.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to="https://umeryasirblog.netlify.app/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">1/2 Month ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className="col-md-5 ">
            <div className="card shadow-sm">
              <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src="https://res.cloudinary.com/dvccsosdc/image/upload/v1706049776/Store_lulzhg.gif"
                alt=""
              />
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    Store based on React Js
                  </span>{" "}
                  include functionality like Add-to-cart Use React Hooks, Api
                  fetch and Customize design for better user interaction.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link to="https://umerstore.netlify.app/" target="_blank">
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">2/5 Month ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------Second One----------------------------- */}
      <div className="container my-3">
        <div className="row my-3">
          <div className="col-md-5">
            <div className="card shadow-sm">
              <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src="https://res.cloudinary.com/dvccsosdc/image/upload/v1706048093/ToDo_List_q9p4dv.gif"
                alt=""
              />
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    To-Do List App Using JavaScript
                  </span>{" "}
                  include funtionality Edit,Delete,Done Task and Shows the Task
                  adding time with date.In addition the tasks and changes will
                  not remove after reload due to use of Local Storage.{" "}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to="https://umeryasir718.github.io/ToDoList/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">1/2 Month ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className="col-md-5 ">
            <div className="card shadow-sm">
              <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src="https://res.cloudinary.com/dvccsosdc/image/upload/v1706048121/Final_project_shhduy.gif"
                alt=""
              />
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    Final Project [ Lawyer Managenment System ]
                  </span>{" "}
                  of Web Technology using HTML, CSS, JavaScript and Bootstrap.
                  In addition many new features with the help of JavaScript.
                  Moreover Complete Website is Responsive.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      to="https://umeryasir718.github.io/WebTech/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">2/5 Month ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------Third One----------------------------- */}
      <div className="container my-3">
        <div className="row">
          <div className="col-md-5">
            <div className="card shadow-sm">
              <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src="https://res.cloudinary.com/dvccsosdc/image/upload/v1706048071/conveter_skzidd.gif"
                alt=""
              />
              <div className="card-body bg-dark text-light ">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    Real time Currency Converter
                  </span>{" "}
                  of almost ten plus country with the help of JavaScript. In
                  addition show the conversion rate with real time.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      href="https://umeryasir718.github.io/Curreny-Converter/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">1/2 Month ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className="col-md-5">
            <div className="card shadow-sm">
              <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src="https://res.cloudinary.com/dvccsosdc/image/upload/v1706048093/Portfolio_Interfaces_skjfwr.gif"
                alt=""
              />
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    Unique designs of Portfolio
                  </span>{" "}
                  with six pages. HTML, CSS and JavaScript Customize Portfolio.
                  Three different designs in different color and style
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-md btn-outline-warning"
                    >
                      View
                    </button>
                  </div>
                  <small className="text-light">1/5 Month ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------------------------------------------Fourth One----------------------------- */}
      <div className="container my-3">
        <div className="row">
          <div className="col-md-5">
            <div className="card shadow-sm">
              <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src="https://res.cloudinary.com/dvccsosdc/image/upload/v1706048107/Html_zwd1hl.gif"
                alt=""
              />
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    Multi-page Portfolio using HTML
                  </span>{" "}
                  and using little inline CSS. In Addition the Navbar, Icon and
                  many other major things.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-md btn-outline-warning"
                    >
                      View
                    </button>
                  </div>
                  <small className="text-light">3 Month ago</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div className="col-md-5">
            <div className="card shadow-sm">
              <img
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                src="https://res.cloudinary.com/dvccsosdc/image/upload/v1706048114/gallery_n87vvo.gif"
                alt=""
              />
              <div className="card-body bg-dark text-light">
                <p className="card-text">
                  <span className="text-warning font-weight-bold">
                    CSS Responsive Gallery{" "}
                  </span>
                  with Slider. It consists of almost ten pages with Hd Graphic
                  Pictures and many other gallery features.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link
                      href="https://umeryasir718.github.io/CSS_Gallery/"
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="btn btn-md btn-outline-warning"
                      >
                        View
                      </button>
                    </Link>
                  </div>
                  <small className="text-light">2 Month ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
