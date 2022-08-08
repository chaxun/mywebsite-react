import classes from "./GitHub.module.css";
import Card from "../UI/Card/Card";

const GitHub = (props) => {
  const data = props.data;
  return (
    <div className="w3-content">
      <Card className={classes.card}>
        <div className="w3-container">
          <a className={classes.hover} href="https://github.com/chaxun/mywebsite">
          <p className={classes.title}>{data.item1}</p>
          </a>
          <p className={classes.text}>{data.item1_line1}</p>
        </div>
      </Card>
      {/* <Card className={classes.card}>
        <div className="w3-container">
          <a className={classes.hover} href="https://github.com/chaxun/bookkeeper-app">
          <p className={classes.title}>{data.item2}</p>
          </a>
          <p className={classes.text}>{data.item2_line1}</p>
        </div>
      </Card> */}
    </div>
  );
};

export default GitHub;
