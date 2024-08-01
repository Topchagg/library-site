import { Link } from "react-router-dom"
import ExampleItem from "../../shared/exampleItem/exampleItem"

const DocComponent = () => {
    return (
        <>
         <div className="h1">More info about...</div>
         <div className="grid-box">
                <div>
                    <Link to='/documentation/functions'><ExampleItem name="Functions"/></Link>
                </div>
                <div>
                    <Link to={'/documentation/tsxelements'}><ExampleItem name="tsx Elements"/></Link>
                </div>
                <div>
                    <Link to={'/documentation/customhooks'}><ExampleItem name="CustomHooks"/></Link>
                </div>
        </div>
        </>
    )
}

export default DocComponent