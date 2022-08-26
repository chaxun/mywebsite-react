import reactStringReplace from "react-string-replace";

function Paper(props) {
  const author = reactStringReplace(props.author, "S. Ren", (match, i) => (
    <strong key="shang">{match}</strong>
  ));
  return (
    <li>
      <a className="hover" href={props.href}>
        <h5 style={{ marginBottom: "0" }}>{props.name}</h5>
      </a>
      <p style={{ margin: "0", paddingTop: "0" }}>
        {author}
        <br />
        {props.journal}
      </p>
      <br />
    </li>
  );
}

export default Paper;
