import ExampleItem from '../../shared/exampleItem/exampleItem'
import { Link } from 'react-router-dom'


import './ui/example.css'

const ExampleSection = () => {
    return (
        <div className='content-wrapper'>
            <div className="h1 example-title">
                Examples
            </div>

            <div className="fields-grid-box">
                <div className="example-item-wrapper">
                    <Link to={'/examples/inputfield'}><ExampleItem name={'inputField'}/> </Link>              
                </div>
                <div className="example-item-wrapper">
                    <Link to={'/examples/imagefield'}><ExampleItem name={'imageField'}/></Link>
                </div>
                <div className="example-item-wrapper">
                    <Link to={'/examples/listfield'}><ExampleItem name={'listField'}/></Link>             
                </div>

                <div className="example-item-wrapper">
                <Link to={'/examples/radiofield'}><ExampleItem name={'radioField'}/></Link>             
                </div>
                <div className="example-item-wrapper">
                <Link to={'/examples/checkboxfield'}><ExampleItem name={'checkBoxField'}/></Link>             
                </div>
                <div className="example-item-wrapper">
                <Link to={'/examples/selectField'}><ExampleItem name={'selectField'}/></Link>             
                </div>
            </div>
        </div>
    )
}

export default ExampleSection