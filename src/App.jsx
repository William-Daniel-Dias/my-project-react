const App = () => {
  return (
    <main className=" bg-slate-50">
      <h1 className="text-3xl font-bold text-slate-800">
        HELLO TAILWIND + REACT!
      </h1>

      <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounder-2xl border p-4 bg-white shadow-sm">Card A</div>
        <div className="rounder-2xl border p-4 bg-white shadow-sm">Card A</div>
        <div className="rounder-2xl border p-4 bg-white shadow-sm">Card A</div>
      </div>
    </main>
  );
}

export default App
