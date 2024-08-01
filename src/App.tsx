import OutletSection from './pages/outlet/outlet'
import { useEffect } from 'react'

import { Routes,Route,useLocation } from 'react-router-dom'

import ExampleListField from './sections/exampleListField/exampleListField'
import ExampleRadioField from './sections/exampleRadioField/exampleRadioField'
import ExampleInputField from './sections/exampleInputField/exampleInputField'
import ExampleImageField from './sections/exampleImageField/exampleImageField'
import ExamplesSelectField from './sections/exampleSelectField/exampleSelectField'
import ExampleCheckBoxField from './sections/exampleCheckBoxField/exampleCheckBoxField'

import DocumentationFunctions from './sections/documentationFunctions/documentationFunctions'
import DocumentationCustomHooks from './sections/documentationCustomHooks/documentationCustomHooks'
import DocumentationTsxElements from './sections/documentationTsxElements/documentationTsxElements'

import { HomePage,ExamplePage} from './pages/pagesApi'

import Documentation from './sections/documentation/documentation'


import './App.css'



const useScrollTop = () => {
  const {pathname} = useLocation()

    useEffect(() => {
      window.scrollTo(0,0)
  },[pathname])
}



function App() {

  useScrollTop()

  return (
    <>
      <Routes>
          <Route path='/' element={<OutletSection/>}>
              <Route index element={<HomePage/>}/>
              <Route path='/examples' element={<ExamplePage/>}/>
              <Route path='/examples/inputfield' element={<ExampleInputField/>}/>
              <Route path='/examples/imagefield' element={<ExampleImageField/>}/>
              <Route path='/examples/checkboxfield' element={<ExampleCheckBoxField/>}/>
              <Route path='/examples/listfield' element={<ExampleListField/>}/>
              <Route path='/examples/radiofield' element={<ExampleRadioField/>}/>
              <Route path='/examples/selectfield' element={<ExamplesSelectField/>}/>


              <Route path='/documentation' element={<Documentation/>}/>
              <Route path='/documentation/functions' element={<DocumentationFunctions/>}/>
              <Route path='/documentation/tsxelements' element={<DocumentationTsxElements/>}/>
              <Route path='/documentation/customhooks' element={<DocumentationCustomHooks/>}/>

          </Route>
      </Routes>
    </>
  )
}

export default App
