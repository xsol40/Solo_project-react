import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data.js"


export default function App(){
    return (
        <>
            <Header />
            {data.map((entry) => (
                <Entry
                    key={entry.id}
                    entry={entry}
                />
            ))}
        </>
    )
}