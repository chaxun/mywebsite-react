import {
  faBaby,
  faHouse,
  faEnvelope,
  faGears,
  faHandLizard,
  faBowlRice,
  faMugHot,
  faEarthAsia,
  faDownload,
  faFaceGrinStars,
  faGraduationCap,
  faCalendarDays,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { faFaceGrinSquintTears } from "@fortawesome/free-regular-svg-icons";

import classes from "./Shang.module.css";
import FontIcon from "../components/UI/FontIcon/FontIcon";
import Paper from "../components/UI/Paper/Paper";

import background from "../photos/rutgers.gif";
import shang1 from "../photos/shang.jpg";
import gwen1 from "../photos/gwen1.jpg";
import gwen2 from "../photos/gwen2.jpg";
import cvpdf from "../pdfs/cv_ShangRen.pdf";

const Shang = () => {
  return (
    <>
      <div className={classes.divRotate}>
        <img className={classes.rotate} src={background} alt="" />
      </div>
      <div className={classes.divContent}>
        <div className={classes.divContentInner}>
          {/* Page Container */}
          <div className="w3-content" style={{ maxWidth: "1500px" }}>
            {/* The Grid */}
            <div
              className="w3-row-padding"
              style={{ paddingTop: "20px", paddingBottom: "10px" }}
            >
              {/* Left Column */}
              <div className="w3-third">
                <div className="w3-white w3-text-grey w3-card-4">
                  <div className="w3-display-container">
                    <img style={{ width: "100%" }} src={shang1} alt="Shang" />
                    <div className="w3-display-bottomleft w3-container">
                      <h2 style={{ color: "white" }}>Shang Ren</h2>
                    </div>
                  </div>
                  <div className="w3-container">
                    <p>
                      <FontIcon icon={faBaby} />
                      PhD Candidate in Physics
                    </p>
                    <p>
                      <FontIcon icon={faHouse} />
                      New Jersey, USA
                    </p>
                    <p>
                      <FontIcon icon={faEnvelope} />
                      <a
                        href="mailto:shangren@physics.rutgers.edu"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        shangren@physics.rutgers.edu
                      </a>
                    </p>
                    <hr />

                    <p className="w3-large w3-text-theme">
                      <b>
                        <FontIcon icon={faGears} />
                        Skills
                      </b>
                    </p>
                    <p>
                      Physics
                      <FontIcon
                        icon={faHandLizard}
                        className="font-icon-right"
                      />
                    </p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div
                        className="w3-round-xlarge w3-blue"
                        style={{ height: "24px", width: "10%" }}
                      />
                    </div>
                    <p>
                      Eating
                      <FontIcon icon={faBowlRice} className="font-icon-right" />
                      <FontIcon icon={faMugHot} className="font-icon-right" />
                    </p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div
                        className="w3-round-xlarge w3-blue"
                        style={{ height: "24px", width: "90%" }}
                      />
                    </div>
                    <br />

                    <p className="w3-large w3-text-theme">
                      <b>
                        <FontIcon icon={faEarthAsia} />
                        Languages
                      </b>
                    </p>
                    <p>Chinese</p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div
                        className="w3-round-xlarge w3-blue"
                        style={{ height: "24px", width: "80%" }}
                      />
                    </div>
                    <p>English</p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div
                        className="w3-round-xlarge w3-blue"
                        style={{ height: "24px", width: "20%" }}
                      />
                    </div>
                    <hr />

                    <p className="w3-large w3-text-theme">
                      <FontIcon icon={faDownload} />
                      <a className="hover" href={cvpdf} download>
                        Download my CV
                      </a>
                    </p>
                  </div>
                </div>
                <br />
                {/* End Left Column */}
              </div>

              {/* Right Column */}
              <div className="w3-twothird">
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                  <h2 className="w3-text-grey w3-padding-16">
                    <FontIcon
                      icon={faFaceGrinStars}
                      className="font-icon-large"
                    />
                    Research Interests
                  </h2>
                  <div className="w3-container">
                    <div className="w3-half">
                      <img className="center" src={gwen1} alt="Gwen 1" />
                    </div>
                    <div className="w3-half">
                      <img className="center" src={gwen2} alt="Gwen 2" />
                    </div>
                  </div>
                  <br />
                  <br />
                </div>

                <div className="w3-container w3-card w3-white w3-margin-bottom">
                  <h2 className="w3-text-grey w3-padding-16">
                    <FontIcon
                      icon={faGraduationCap}
                      className="font-icon-large"
                    />
                    Education
                  </h2>

                  <div className="w3-container">
                    <h5 className="w3-opacity">
                      <b>Rutgers University</b>
                    </h5>
                    <h6 className="w3-text-blue">
                      <FontIcon icon={faCalendarDays} />
                      2019.09 - current
                    </h6>
                    <p>抱紧范德彪的大腿中...</p>
                    <hr />
                  </div>

                  <div className="w3-container">
                    <h5 className="w3-opacity">
                      <b>Iowa Sate University</b>
                    </h5>
                    <h6 className="w3-text-blue">
                      <FontIcon icon={faCalendarDays} />
                      2016.08 - 2019.08
                    </h6>
                    <p>
                      Became <strong>THE</strong> Master. Who?
                    </p>
                    <hr />
                  </div>

                  <div className="w3-container">
                    <h5 className="w3-opacity">
                      <b>Gap Year</b>
                    </h5>
                    <h6 className="w3-text-blue">
                      <FontIcon icon={faCalendarDays} />
                      2015.07 - 2016.07
                    </h6>
                    <p>
                      A <strong>MISERABLE</strong> year without any offer from
                      graduate schools
                      <FontIcon
                        icon={faFaceGrinSquintTears}
                        className="font-icon-black"
                      />
                    </p>
                    <hr />
                  </div>

                  <div className="w3-container">
                    <h5 className="w3-opacity">
                      <b>University of Science and Technology of China</b>
                    </h5>
                    <h6 className="w3-text-blue">
                      <FontIcon icon={faCalendarDays} />
                      2011.08 - 2015.06
                    </h6>
                    <p>
                      Proudly spent 4 years in the special class and ended as a
                      bachelor of science
                    </p>
                  </div>
                  <br />
                </div>

                <div className="w3-container w3-card w3-white w3-margin-bottom">
                  <h2 className="w3-text-grey w3-padding-16">
                    <FontIcon icon={faPencil} className="font-icon-large" />
                    Publications
                  </h2>
                  <div className="w3-container">
                    <ol>
                      <Paper
                        href="https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.054114"
                        name="Humble planar defects in SiGe nanopillars"
                        author="H. Yang, S. Ren, S. Singh, E. Turner, K. Jones, P. Batson, D. Vanderbilt, and E. Garfunkel"
                        journal="Phys. Rev. B 106, 054114 (2022)"
                      />

                      <Paper
                        href="https://journals.aps.org/prb/abstract/10.1103/PhysRevB.103.035147"
                        name="Quadrupole moments, edge polarizations, and corner charges in the Wannier representation"
                        author="S. Ren, I. Souza, and D. Vanderbilt"
                        journal="Phys. Rev. B 103, 035147 (2021)"
                      />

                      <Paper
                        href="https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.035150"
                        name={[
                          "Emergence of Van Hove singularity and topological states in Pb",
                          <span
                            key="subscript"
                            style={{ fontSize: "12px", lineHeight: "18px" }}
                          >
                            3
                          </span>,
                          "Bi/Ge(111) Rashba systems",
                        ]}
                        author="L. Li, S. Ren, W. Qin, S. Zhang, X. Wan, Y. Jia, P. Cui, and Z. Zhang"
                        journal="Phys. Rev. B 102, 035150 (2020)"
                      />

                      <Paper
                        href="https://pubs.acs.org/doi/abs/10.1021/acsnano.0c00250"
                        name="Phase diagram and structure map of binary nanoparticle superlattices from a Lennard-Jones model"
                        author="S. Ren, Y. Sun, F. Zhang, A. Travesset, C.-Z. Wang, and K.-M. Ho"
                        journal="ACS Nano 2020 14 (6), 6795-6802"
                      />

                      <Paper
                        href="https://pubs.rsc.org/en/content/articlelanding/2018/SM/C8SM01415A"
                        name="Calculation of critical nucleation rates by the persistent embryo method: application to quasi hard sphere models"
                        author="S. Ren, Y. Sun, F. Zhang, A. Travesset, C.-Z. Wang, and K.-M. Ho"
                        journal="Soft Matter, 2018, 14, 9185-9193"
                      />

                      <Paper
                        href="https://arxiv.org/abs/2206.13726"
                        name={[
                          "(submitted) Electronic structure of Humble defects in Ge and Ge",
                          <span
                            key="subscript1"
                            style={{ fontSize: "12px", lineHeight: "18px" }}
                          >
                            0.8
                          </span>,
                          "Si",
                          <span
                            key="subscript2"
                            style={{ fontSize: "12px", lineHeight: "18px" }}
                          >
                            0.2
                          </span>,
                        ]}
                        author="S. Ren, H. Yang, S. Singh, P. E. Batson, E. L. Garfunkel, D. Vanderbilt"
                      />

                      <Paper
                        href="https://arxiv.org/abs/2208.14593"
                        name={[
                          "(submitted) Frequency splitting of chiral phonons from broken time reversal symmetry in CrI",
                          <span
                            key="subscript3"
                            style={{ fontSize: "12px", lineHeight: "18px" }}
                          >
                            3
                          </span>,
                        ]}
                        author="J. Bonini, S. Ren, D. Vanderbilt, M. Stengel, C. E. Dreyer, S. Coh"
                      />
                    </ol>
                  </div>
                </div>
              </div>
              {/* End Right Column */}
            </div>
            {/* End Grid */}
          </div>
        </div>
        {/* End Page Container */}
      </div>
    </>
  );
};

export default Shang;
