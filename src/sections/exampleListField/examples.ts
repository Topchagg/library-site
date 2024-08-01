import codeInputListField from "../../examples/listField/inputListField/codeInputListField"
import InputListField from "../../examples/listField/inputListField/inputListField"

import listExampleBtnInterface from "../../shared/types/exampleBtnInterface"

import imageListField from "../../examples/listField/imagesListField/elementImageListField"
import codeImageFieldDefaultExample from "../../examples/imageField/defaultExample/codeBaseImageFieldDefault"
import codeObjectListField from "../../examples/listField/objectListField/codeObjectListField"
import ObjectListField from "../../examples/listField/objectListField/elementObjectListField"

const listExamples:listExampleBtnInterface = [
    {
        text:'Default',
        codeBase:codeInputListField,
        element:InputListField
    },
    {
        text:'Images + Delete',
        codeBase:codeImageFieldDefaultExample,
        element:imageListField
    },
    {
        text:'Object',
        codeBase:codeObjectListField,
        element:ObjectListField
    }
]


export default listExamples
