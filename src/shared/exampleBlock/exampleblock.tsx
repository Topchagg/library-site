import {FC} from 'react'

import CodeComponent from '../codeComponent/codeComponent'

import './ui/exampleBlock.css'

interface ExampleBlockInterface {
    code:string,
    children:any
}


const ExampleBlock:FC<ExampleBlockInterface> = ({children,...props}) => {
    return (
        <div className="example-block">
            <div className="default-block">
                <CodeComponent code={props.code}/>
            </div>
            <div className="default-block">
                {children}
            </div>
        </div>
    )
}

export default ExampleBlock