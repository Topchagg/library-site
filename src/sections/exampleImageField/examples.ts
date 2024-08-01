import listExampleBtnInterface from "../../shared/types/exampleBtnInterface";

import codeImageFieldDefaultExample from "../../examples/imageField/defaultExample/codeBaseImageFieldDefault";
import ImageFieldDefaultExample from "../../examples/imageField/defaultExample/imageFieldDefaultExample";

import codePreShowExample from "../../examples/imageField/preShowImageExample/codePreShowImage";
import preShowImageExample from "../../examples/imageField/preShowImageExample/preShowImageExamples";
import codeShowErrorImageField from "../../examples/imageField/showErorr/codeShowErrorImageField";
import ShowErrorImageField from "../../examples/imageField/showErorr/showErrorImageField";


const ImageFieldExamples:listExampleBtnInterface = [
    {
        text: 'Default',
        codeBase: codeImageFieldDefaultExample,
        element: ImageFieldDefaultExample
    },
    {
        text: 'Preview',
        codeBase: codePreShowExample,
        element:preShowImageExample
    },
    {
        text: 'Show error',
        codeBase: codeShowErrorImageField,
        element:ShowErrorImageField
    }
]

export default ImageFieldExamples