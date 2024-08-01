import {FC,useState } from "react";
import ChangeExampleItem from "../changeExampleItem/changeExampleItem";
import ExampleItem from "../exampleItem/exampleItem";
import ExampleBlock from "../exampleBlock/exampleblock";

interface exampleBtnInterface {
    text:string,
    element:any,
    codeBase:string,
}

interface ExamplePageInterface {
    title:string,
    items:exampleBtnInterface[]
}

const ExamplesPage:FC<ExamplePageInterface> = (props) => {

    const [NeededBlock,setNeededBlock] = useState<any>(() => props.items[0].element)
    const [neededCodeBase, setNeededCodeBase] = useState<string>(props.items[0].codeBase)

    return (
        <>
             <div className="content-wrapper">
            <div className="h1">{props.title}</div>
            <div className="grid-box">
               {props.items.map((item,key) => (
                <ChangeExampleItem key={key} codeBase={item.codeBase} codeSetFunc={setNeededCodeBase} element={item.element} elementSetFunc={setNeededBlock}>
                    <ExampleItem name={item.text}/>
                </ChangeExampleItem>
               ))}
            </div>
            <div className="wrapper-of-examples">
                <ExampleBlock code={neededCodeBase}>
                    <NeededBlock/>
                </ExampleBlock>
            </div>
        </div>
        </>
    )
}

export default ExamplesPage