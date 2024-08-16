import codeInputListField from "../../examples/listField/inputListField/codeInputListField"
import InputListField from "../../examples/listField/inputListField/inputListField"

import listExampleBtnInterface from "../../shared/types/exampleBtnInterface"

import imageListField from "../../examples/listField/imagesListField/elementImageListField"
import codeObjectListField from "../../examples/listField/objectListField/codeObjectListField"
import ObjectListField from "../../examples/listField/objectListField/elementObjectListField"
import codeImageListField from "../../examples/listField/imagesListField/codeImageListField"

const listExamples:listExampleBtnInterface = [
    {
        text:'Default',
        codeBase:codeInputListField,
        element:InputListField
    },
    {
        text:'Images + Delete',
        codeBase:codeImageListField,
        element:imageListField
    },
    {
        text:'Object',
        codeBase:codeObjectListField,
        element:ObjectListField
    }
]


export default listExamples
