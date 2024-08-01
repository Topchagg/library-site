import { FC } from "react"
import { Link } from "react-router-dom"

interface detailsPage {
    title:string,
    description:string,
    propsInfo: object,
    btnLink?: string,
}

const DetailsPage:FC<detailsPage> = (props) => {

    const value = Object.values(props.propsInfo)
    const key = Object.keys(props.propsInfo)

    return (
        <div className="content-wrapper pb-150">
            <div className="h1">
                More info about <div className="pt-10 decoration">{props.title}</div>
            </div>
            <div className="h1">
                Description
            </div>
            <div className="main-text">
                <pre>{props.description}</pre>
            </div>
            <div className="h1">Props</div>
            <div className="pt-50">
                {value.map((item:string, index:number) => (
                    <pre key={index} className="pt-10 main-text">"<strong>{key[index]}</strong>": <span className="decoration">{item}</span></pre>
                ))}
            </div>
            <div className="center">
                {props.btnLink && <Link to={props.btnLink}><button className="btn">Examples</button></Link>}
            </div>
        </div>
    )
}

export default DetailsPage