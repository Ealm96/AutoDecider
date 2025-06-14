export default function formatSubmit(submitObject) {
    const {
        AutoOps,
        BrandPModel,
        Budget,
        CarType,
        CargoSpace,
        DesignType,
        Email,
        FuelType,
        GClearance,
        GasFreq,
        LDRent,
        NumOfDoors,
        NumOfRows,
        Preference,
        SpecFeats,
        TravelDistance,
        UseType,
        OtherUse,
    } = submitObject;

    const formatted = {
        AutoOps: parseInt(AutoOps),
        BrandPModel,
        Budget: parseInt(Budget),
        CarType,
        CargoSpace,
        DesignType: DesignType !== "both" ? DesignType : "Sporty and Casual",
        Email,
        FuelType,
        GClearance: parseInt(GClearance),
        GasFreq,
        LDRent,
        NumOfDoors: parseInt(NumOfDoors),
        NumOfRows,
        Preference: Preference ? Preference : undefined,
        SpecFeats,
        TravelDistance,
        UseType,
        OtherUse: OtherUse ? OtherUse : undefined,
    };

    const cleanedObj = JSON.parse(JSON.stringify(formatted, (key, value) => {
        if (value === null || value === undefined || value === "") {
            return undefined; // Return undefined to remove the property
        }
        return value;
    }));

    return cleanedObj;
}