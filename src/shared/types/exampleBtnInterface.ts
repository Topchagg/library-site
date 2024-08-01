import { Dispatch,SetStateAction } from "react"

interface exampleBtnInterface {
    text:string,
    element:any,
    codeBase:string,
}

type listExampleBtnInterface = (
    exampleBtnInterface[]
)

export default listExampleBtnInterface