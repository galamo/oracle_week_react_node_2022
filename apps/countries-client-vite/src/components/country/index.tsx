
interface ICountry {
    name: string,
    flag: string,
    population: number
}

export function CountryCard(props: Partial<ICountry>) {
    return <div style={{ display: "inline-block", width: "200px", margin: "auto auto" }}>
        <h1>Country !!!! </h1>
    </div>
}