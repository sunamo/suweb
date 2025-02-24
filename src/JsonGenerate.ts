// V C# toto dělat je opravdu těžké. Důkazem je třída FillAllPropertiesInJsonFromJsonTemplateService.cs

//, data: { [key: string]: any }
export function toEveryPairValueByItsName(obj: any, dontChangeWithKeys: string[]) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];

            if (typeof value === 'object' && value !== null) {
                if (Array.isArray(value)) {
                    // Hodnota je pole, projdeme ho rekurzivně
                    for (let i = 0; i < value.length; i++) {
                        if (typeof value[i] === 'object' && value[i] !== null) {
                            toEveryPairValueByItsName(value[i], dontChangeWithKeys);
                        }
                    }
                } else {
                    // Hodnota je objekt, projdeme ho rekurzivně
                    toEveryPairValueByItsName(value, dontChangeWithKeys);
                }
            } else {
                if(!dontChangeWithKeys.includes(key))
                {
                    obj[key] = key;
                }
            }
        }
    }

    return obj
}

export function toEveryPairNewValue(obj: any, addToEndIfString: string, valueIfNumber : number, dontChangeWithKeys: string[]) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];

            if (typeof value === 'object' && value !== null) {
                if (Array.isArray(value)) {
                    // Hodnota je pole, projdeme ho rekurzivně
                    for (let i = 0; i < value.length; i++) {
                        if (typeof value[i] === 'object' && value[i] !== null) {
                            toEveryPairNewValue(value[i], addToEndIfString, valueIfNumber, dontChangeWithKeys);
                        }
                    }
                } else {
                    

                    // Hodnota je objekt, projdeme ho rekurzivně
                    toEveryPairNewValue(value, addToEndIfString, valueIfNumber, dontChangeWithKeys);
                }
            } else {
                if(dontChangeWithKeys.includes(key))
                    {
                        continue;
                    }

                //console.log("obj[key]: " + typeof obj[key])

                if(typeof obj[key] === "string")
                {
                    obj[key] = obj[key] + addToEndIfString;
                }
                else if(typeof obj[key] === "boolean")
                {
                obj[key] = !obj[key]
                }
                else if(typeof obj[key] === "number")
                {
                    obj[key] = valueIfNumber
                }   
                else if(typeof obj[key] === "object")
                {
                    obj[key] = obj[key] + addToEndIfString;
                }
            }
        }
    }

    return obj
}