import { ReactNode,FC, SetStateAction, Dispatch } from "react";

interface changeExampleItemInterface {
    element:any,
    codeBase:string,
    codeSetFunc:Dispatch<SetStateAction<string>>,
    elementSetFunc:Dispatch<SetStateAction<any>>,
    children:ReactNode
}

const ChangeExampleItem:FC<changeExampleItemInterface> = ({children,...props}) => {

    const customHandler = () => {
        props.codeSetFunc(props.codeBase)
        props.elementSetFunc(() => props.element)
    }

    return (
        <div onClick={() => customHandler()}>
            {children}
        </div>
    )
}

export default ChangeExampleItem