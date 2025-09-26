import { Card } from "./components/Card";
import { Hello } from "./components/Hello";

const App = () => {
  return (
    <main className=" bg-slate-50">
      <h1 className="text-3xl font-bold text-slate-800">
        HELLO TAILWIND + REACT!
      </h1>

      <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <Card title="Card A">
            <p>Oi, eu sou filho</p>
          </Card>

           <Card title="Card B">
            <p>Oi, eu sou filho</p>
          </Card>

           <Card title="Card C">
            <p>Oi, eu sou filho</p>
          </Card>
          
      </div>

      <a href="#" className="inline-block px-4 py-2 rounded-lg border hover:bg-slate-300 focus:ring-2 focus:ring-blue-500 transition-all">
        Link com foco
      </a>

      <Hello name="William"/>
    
    </main>
  );
}

export default App
