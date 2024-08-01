import ExamplesPage from "../../shared/examplesPage/examplesPage";
import selectExamples from "./examples";

const ExamplesSelectField = () => {
    return (
        <>
            <ExamplesPage title="SelectField examples" items={selectExamples}/>
        </>
    )
}

export default ExamplesSelectField