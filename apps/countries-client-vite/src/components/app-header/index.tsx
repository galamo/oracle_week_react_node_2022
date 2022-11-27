import css from "./style.module.css"
enum Colors {
    red = "red",
    blue = "blue"
}
interface IHeader {
    title: string,
    color: string
}

export function AppHeader(props: Partial<IHeader>) {
    return <div className={css.borderHeader} style={{ color: props.color, display: "inline-block", margin: "auto auto" }}>
        <h1> {props.title} </h1>
    </div>
}