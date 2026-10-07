import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data.js"


export default function App(){
    return (
        <>
            <Header />
            {data.map((item) => (
                <Entry
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    country={item.country}
                    googleMapsLink={item.googleMapsLink}
                    dates={item.dates}
                    text={item.text}
                />
            ))}
        </>
    )
}