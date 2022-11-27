
interface ICountry {
    name: string,
    flag: string,
    population: number
}

export function CountryCard(props: Partial<ICountry>) {
    return <div style={{ border: "1px solid black", borderRadius: "6px", display: "inline-block", width: "300px", margin: "30px" }}>
        <h1>{props.name}</h1>
        <img height={200} width={200} src={props.flag} />
    </div>
}