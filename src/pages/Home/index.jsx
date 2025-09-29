import { useState } from "react";
import { Card } from "../../components/Card";
import { Hello } from "../../components/Hello";
import { TextField } from "../../components/TextField";
import { Navbar } from "../../components/Navbar";

export const HomePage = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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

    const inc = () => setCount(c => c + 1)

    const handleSubmit = event => {
        event.preventDefault()

        console.log({ name, email, password })
    }



    return (
        <main className="min-h-dvh grid place-items-center bg-slate-50">
            <Navbar />
            <h1 className="text-3xl font-bold text-slate-800">
                HELLO TAILWIND + REACT!
            </h1>

            <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {CARDS.map(item => (
                    <Card key={item.id} {...item}>
                        <p>{item.description}</p>
                    </Card>
                ))}
            </div>

            <a href="#" className="inline-block px-4 py-2 rounded-lg border hover:bg-slate-300 focus:ring-2 focus:ring-blue-500 transition-all">
                Link com foco
            </a>

            <Hello name="William" />

            <button onClick={inc} className="bg-amber-950 text-neutral-50 px-4 py-2 rounded-2xl cursor-pointer">
                Count:{count}
            </button>

            <form onSubmit={handleSubmit}>
                <TextField
                    id="name"
                    name="fullName"
                    placeholder="Nome Completo"
                    label="Nome Completo"
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />

                <TextField
                    id="email"
                    name="email"
                    placeholder="email@email.com"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />

                <TextField
                    id="password"
                    name="password"
                    placeholder="Digite sua senha"
                    label="Senha"
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />

                <button
                    type="submit"
                    className="bg-fuchsia-700 text-neutral-50 px-4 py-2 rounded-2xl cursor-pointer text-center w-full">
                    Enviar
                </button>
            </form>
        </main>
    );
}

