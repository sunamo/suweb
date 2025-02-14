import { projdiJsonRekurzivne } from "../src/JsonGenerate"
import JsonGenerate from "./JsonGenerate.json"

describe("JsonGenerate", () => {
    it("projdiJsonRekurzivne", () => {
        // Vytvoříme JSON objekt
        const jsonObject = JsonGenerate

        const result = projdiJsonRekurzivne(jsonObject)
        console.log("projdiJsonRekurzivne jsonObject: " + JSON.stringify(jsonObject))
        console.log("projdiJsonRekurzivne: " + JSON.stringify(result))
    })
})