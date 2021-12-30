import "./styles.css";
import useData, { Data } from "./use-data";

export function DataList(props: { data: Data }) {
  if (!props.data) {
    return <div className="error-block"> Data not found </div>;
  }

  const capitalize = (name: string) => name[0].toUpperCase() + name.slice(1);

  return (
    <ul>
      {props.data.map((user, index) => (
        <li key={index}>
          {user.id}
          {capitalize(user.name)}
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const { data, error } = useData();

  if (error || !data) {
    return <div className="error-block">{error}</div>;
  }

  // console.log(data)

  return (
    <div className="App">
      <h1>Hello User data</h1>
      <DataList data={data} />
    </div>
  );
}
