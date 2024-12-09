import Head from "next/head";
import { Fragment, memo } from "react";
import Preloader from "../src/layout/Preloader";
const Demo = () => {
  return (
    <Fragment>
      <Head>
        <link href="demo/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:100,200,300,400,500,600,700,800,900"
          rel="stylesheet"
        />{" "}
        <link rel="stylesheet" type="text/css" href="css/materialize.min.css" />
        <link rel="shortcut icon" href="assets/images/favicon.png" />
        <link
          href="demo/assets/css/style.css"
          rel="stylesheet"
          type="text/css"
        />
        <title>Moscow - Choose your demo</title>
      </Head>
      <Preloader />
      <section className="banner text-center">
        <div className="content">
          <h1>Moscow</h1>
          <h2>Personal React Portfolio</h2>
        </div>
      </section>
      <section className="demo dark">
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="content">
                  <div className="bg_container">
                    <a
                      href="/index-dark"
                      className="img_container"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="demo/assets/images/dark.jpg"
                        alt=""
                        className="img-responsive screenshot"
                      />
                    </a>
                  </div>
                  <h2>DARK VERSION</h2>
                  <div className="anchor">
                    <h6>
                      <a
                        href="/index-dark"
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                      >
                        view demo
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6">
                <div className="content">
                  <div className="bg_container">
                    <a
                      href="/"
                      className="img_container"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="demo/assets/images/light.jpg"
                        alt=""
                        className="img-responsive screenshot"
                      />
                    </a>
                  </div>
                  <h2>LIGHT VERSION</h2>
                  <div className="anchor">
                    <h6>
                      <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn"
                      >
                        view demo
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center">
              10 Color Skins Available Via Style Switcher
            </p>
          </div>
        </div>
      </section>
      <footer>
        <div className="text-center footer_copyright">
          <h6>Moscow - Personal Portfolio</h6>
          <h5>
            Designed with <span className="heart">❤</span> by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://themeforest.net/user/marketify"
            >
              Marketify
            </a>
          </h5>
        </div>
      </footer>
    </Fragment>
  );
};
export default memo(Demo);
