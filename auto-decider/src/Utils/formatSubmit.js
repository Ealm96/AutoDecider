export default function formatSubmit(submitObject) {
    const cleanedObj = JSON.parse(JSON.stringify(submitObject, (key, value) => {
        if (value === null || value === undefined || value === "") {
            return undefined; // Return undefined to remove the property
        }
        return value;
    }));

    return cleanedObj
}