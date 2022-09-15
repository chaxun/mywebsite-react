import Card from "../UI/Card/Card";

import classes from "./Education.module.css";

const Education = (props) => {
  const data = props.data;
  return (
    <div className="w3-content">
      <Card className={classes.card}>
        <div className="w3-container">
          <ul>
            <li>
              <span className={classes.school}>{data.item1}</span>
              <span className={classes.date}>2016.08 - 2021.08</span>
              <br />
              <p className={classes.text}>{data.item1_line1}</p>
              <p className={classes.text}>{data.item1_line2}</p>
              <a
                href="https://scholar.google.com/citations?user=HC7EnzMAAAAJ&hl=en&oi=ao"
              >
                <span className={classes.un}>{data.item1_line3}</span>
              </a>
            </li>
            <br />
            <li>
              <span className={classes.school}>{data.item2}</span>
              <span className={classes.date}>2012.09 - 2016.06</span>
              <br />
              <p className={classes.text}>{data.item2_line1}</p>
              <p className={classes.text}>{data.item2_line2}</p>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default Education;
