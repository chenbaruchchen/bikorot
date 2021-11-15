export default function Download(props) {
  let string =
    "https://docs.google.com/spreadsheets/d/10oYFpqtvlSr79jQ4qBqGo1Ng1Z11nb3EmZp5s84ShYA";
  string = string + "#gid=" + props.sheet;
  console.log(string);
  return <a href={string}>פתיחת גיליון</a>;
}
