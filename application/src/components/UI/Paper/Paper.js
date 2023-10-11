import reactStringReplace from "react-string-replace";
import Subscript from "../../UI/Subscript/Subscript";

function transformSubcript(content, id) {
  const reg = /_\d{0,2}(\.\d{1,2})?/;
  let contentRemoveSub = content;
  let hasMatch = contentRemoveSub.match(reg);
  for (let matchId = 0; hasMatch; matchId++) {
    const to_replace = hasMatch[0];
    const replaced = to_replace.replace(/_/, "");
    contentRemoveSub = contentRemoveSub.replace(to_replace, "");
    content = reactStringReplace(content, to_replace, (match, i) => (
      <Subscript key={id + matchId} content={replaced} />
    ));
    hasMatch = contentRemoveSub.match(reg);
  }
  return content;
}

function Paper(props) {
  const author = reactStringReplace(props.author, "Shang Ren", (match, i) => (
    <strong key="shang">{match}</strong>
  ));
  const name = transformSubcript(props.name, props.id);
  return (
    <li>
      <a className="hover" href={props.href}>
        <h5 style={{ marginBottom: "0" }}>{name}</h5>
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
