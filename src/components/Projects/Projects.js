const Projects = () => {
  return (
    <>
      <div className="container">
        <h3>Projects</h3>
        <p>Things I've worked on</p>
        <div className="features">
          <article>
            <a href="#" className="image">
              <img src="images/pic01.jpg" alt="" />
            </a>
            <div className="inner">
              <h4>
                Implementation of Handwritten Character Recognition by Training
                and Deploying a Neural Network to an Android Application
              </h4>
              <p>
                <em>2019</em>
                <br />
                <em>
                  <a
                    href="https://github.com/aritrakoley/MSc_Prototypes"
                    target="_blank"
                  >
                    https://github.com/aritrakoley/MSc_Prototypes
                  </a>
                </em>
              </p>
            </div>
          </article>
          <article>
            <a href="#" className="image">
              <img src="images/pic02.jpg" alt="" />
            </a>
            <div className="inner">
              <h4>Similarity Analysis of Neighbourhoods in DifferentCities</h4>
              <p>
                <em>2019</em>
                <br />
                <em>
                  <a
                    href="https://github.com/aritrakoley/neighbourhood_similarity_analysisPrecomputing"
                    target="_blank"
                  >
                    https://github.com/aritrakoley/neighbourhood_similarity_analysis
                  </a>
                </em>
              </p>
            </div>
          </article>
          <article>
            <a href="#" className="image">
              <img src="images/pic03.jpg" alt="" />
            </a>
            <div className="inner">
              <h4>
                Precomputing Shell Fragments for OLAP using Inverted Index Data
                Structure
              </h4>
              <p>
                <em>2017</em>
                <br />
                <em>
                  <a
                    href="http://dx.doi.org/10.26438/ijcse/v6i1.2430"
                    target="_blank"
                  >
                    http://dx.doi.org/10.26438/ijcse/v6i1.2430
                  </a>
                </em>
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
export default Projects;
