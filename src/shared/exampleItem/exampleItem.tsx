import { FC } from 'react'

import './ui/exampleItem.css'


interface exampleItemInterface {
    name:string
}

const ExampleItem:FC<exampleItemInterface> = (props) => {
    return (
        <div className='example-item'>
            {props.name}
        </div>
    )
}

export default ExampleItem