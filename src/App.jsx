import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-5xl px-4 text-purple-500">Hello Universe.</h1>
      <div className="*:bg-red-800 *:w-[100px] *:h-[100px] *:rounded-3xl  flex gap-6 mx-4 my-6 ">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <section className="bg-teal-200 h-[60vh] flex gap-8">
        <article className="article"></article>
        <article className="article"></article>
        <article className="article"></article>
      </section>
    </>
  );
}

export default App;
