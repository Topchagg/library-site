import ExampleItem from "../../shared/exampleItem/exampleItem"
import DetailsPage from "../../shared/detailsPage/detailsPage"
import {useState} from "react"
import { FC } from "react"

interface detailItem {
    name:string,
    description:string,
    propsInfo:{[x:string]:string},
    btnLink?:string
}

interface propsDoc {
    data: detailItem[],
    name:string
}

const DocPage:FC<propsDoc> = (props) => {

    const [description,setDescription] = useState(props.data[0].description)
    const [dataProps,setDataProps] = useState(props.data[0].propsInfo)
    const [name,setName] = useState(props.data[0].name)
    const [btnLink,setBtnLink] = useState(props.data[0].btnLink)

    const handleOnChange = (params:detailItem) => {
        setDescription(params.description)
        setDataProps(params.propsInfo)
        setName(params.name)
        setBtnLink(params.btnLink)
    }

    return (
        <div className="content-wrapper">
            <div className="h1">{props.name} of library!</div>
            <div className="grid-box">
                {props.data.map((item:detailItem,index:number) => (
                    <div key={index} onClick={() => handleOnChange(
                        {name:item.name,
                        propsInfo:item.propsInfo,
                        description:item.description,
                        btnLink:item.btnLink})}
                        ><ExampleItem name={item.name}/>
                    </div>
                ))}
            </div>
            <div>
                <DetailsPage title={name} description={description} propsInfo={dataProps} btnLink={btnLink}/>
            </div>
        </div>
    )
}

export default DocPage