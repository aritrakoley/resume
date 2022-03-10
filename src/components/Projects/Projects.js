const Projects = () => {
  return (
    <>
      <div className="container">
        <h3>Projects</h3>
        <p>Things I've worked on</p>
        <div className="features">
          <article>
            <a href="https://github.com/aritrakoley/MSc_Prototypes" className="image">
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
                    rel="noreferrer"
                  >
                    https://github.com/aritrakoley/MSc_Prototypes
                  </a>
                </em>
              </p>
            </div>
          </article>
          <article>
            <a href="https://github.com/aritrakoley/neighbourhood_similarity_analysis" className="image">
              <img src="images/pic02.jpg" alt="" />
            </a>
            <div className="inner">
              <h4>Similarity Analysis of Neighbourhoods in Different Cities</h4>
              <p>
                <em>2019</em>
                <br />
                <em>
                  <a
                    href="https://github.com/aritrakoley/neighbourhood_similarity_analysis"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/aritrakoley/neighbourhood_similarity_analysis
                  </a>
                </em>
              </p>
            </div>
          </article>
          <article>
            <a href="http://dx.doi.org/10.26438/ijcse/v6i1.2430" className="image">
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
                    rel="noreferrer"
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
