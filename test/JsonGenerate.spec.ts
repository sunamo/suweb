import { toEveryPairNewValue } from "../src/JsonGenerate"
import JsonGenerate from "./JsonGenerate.json"
import JsonGenerate2 from "./JsonGenerate2.json"

describe("JsonGenerate", () => {
    it("toEveryPairNewValue", () => {
        // Vytvoříme JSON objekt
        const jsonObject = JsonGenerate2

        const result = toEveryPairNewValue(jsonObject, "3", 111, ["ID"]);
        console.log("projdiJsonRekurzivne jsonObject: " + JSON.stringify(jsonObject))
        console.log("projdiJsonRekurzivne: " + JSON.stringify(result))
    })
})

