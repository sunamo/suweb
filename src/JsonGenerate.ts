// V C# toto dělat je opravdu těžké. Důkazem je třída FillAllPropertiesInJsonFromJsonTemplateService.cs

//, data: { [key: string]: any }
export function projdiJsonRekurzivne(obj: any) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];

            if (typeof value === 'object' && value !== null) {
                if (Array.isArray(value)) {
                    // Hodnota je pole, projdeme ho rekurzivně
                    for (let i = 0; i < value.length; i++) {
                        if (typeof value[i] === 'object' && value[i] !== null) {
                            projdiJsonRekurzivne(value[i]);
                        }
                    }
                } else {
                    // Hodnota je objekt, projdeme ho rekurzivně
                    projdiJsonRekurzivne(value);
                }
            } else {

                    obj[key] = key;
                
            }
        }
    }

    return obj
}