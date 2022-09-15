import FontIcon from "../UI/FontIcon/FontIcon";
import Paper from "../UI/Paper/Paper";

export default function Publications() {
  return (
    <div className="w3-container w3-card w3-white w3-margin-bottom">
      <h2 className="w3-text-grey w3-padding-16">
        <FontIcon icon="fa-pencil" className="font-icon-large" />
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
  );
}
