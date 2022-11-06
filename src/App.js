import Counter from "./components/Counter";
import MyGitHub from "./components/MyGitHub";

function App() {
  return (
    <div className="App">
      <h1>
        Hello React!
      </h1>
      <h2>
        Pradipta Dasgupta - h84n224
      </h2>

      <hr />
      <Counter incBy={1}/><hr />
      <Counter incBy={2} decBy={3}/><hr />
      <MyGitHub /><hr />

    </div>
  );
}