import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CountryCard } from './components/country'
import { AppHeader } from './components/app-header'
import axios from "axios"

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("red")
    const [countries, setCountries] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function getCountries() {
            try {
                setIsLoading(true)
                const result = await axios.get("http://localhost:4000/countries")
                setCountries(result?.data?.data || [])
            } catch (error) {
                alert("error")
            } finally {
                setIsLoading(false)
            }
        }
        getCountries();
        return () => {
            console.log("clean up")
        }
    }, [])
    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <AppHeader title={"Countries Page"} color={color} />
            <div className="card">
                <input value={color} onChange={(input) => {
                    setColor(input.target.value)
                }} />
            </div>
            {isLoading ? <div className={"loader"} ></div>
                : <CountriesList countries={countries} />
            }
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div >
    )
}

function CountriesList(props: { countries: Array<any> }): JSX.Element {
    return <div>
        {props.countries.map(c => {
            return <CountryCard key={c?.name?.common} name={c?.name?.common} flag={c?.flags?.svg} population={c.population} />
        })}
    </div>
}

export default App
