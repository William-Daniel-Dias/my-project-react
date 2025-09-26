import { Card } from "./components/Card";
import { Hello } from "./components/Hello";

const App = () => {
  const CARDS = [
    {
      id: 0,
      title: 'Card A',
      description: 'Olá eu sou o filho do card A'
    },
    {
      id: 1,
      title: 'Card B',
      description: 'Olá eu sou o filho do card B'
    },
    {
      id: 2,
      title: 'Card C',
      description: 'Olá eu sou o filho do card C'
    }
  ]

  return (
    <main className="min-h-dvh grid place-items-center bg-slate-50">
      <h1 className="text-3xl font-bold text-slate-800">
        HELLO TAILWIND + REACT!
      </h1>

      <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map(item => (
          <Card key={item.id} title={item.title}>
            <p>{item.description}</p>
          </Card>
        ))}
      </div>

      <a href="#" className="inline-block px-4 py-2 rounded-lg border hover:bg-slate-300 focus:ring-2 focus:ring-blue-500 transition-all">
        Link com foco
      </a>

      <Hello name="William" />

    </main>
  );
}

export default App
