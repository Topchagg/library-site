import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FC } from 'react';


interface CodeCompoenentInterface {
    code:string
}

const CodeComponent:FC<CodeCompoenentInterface> = (props) => {
    return (
        <>
            <SyntaxHighlighter language="javascript" style={okaidia}>
                {props.code}
            </SyntaxHighlighter>
        </>
    )
}

export default CodeComponent