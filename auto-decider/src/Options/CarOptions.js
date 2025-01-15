const RowOptions = [
    { title: 'Yes', value: true, id: 1 },
    { title: 'No', value: false, id: 2 },
    { title: 'Not sure', value: null, id: 3 },
]

const DoorOptions = [
    { title: '2', value: 2, id: 1 },
    { title: '4', value: 4, id: 2 },
]

const CargoOptions = [
    { title: 'Yes', value: true, id: 1 },
    { title: 'No', value: false, id: 2 },
    { title: 'Not sure', value: null, id: 3 },
]

const TravelOptions = [
    { title: 'Rent', value: true, id: 1 },
    { title: 'Use Mine', value: false, id: 2 },
]

const ClearanceOptions = [
    { title: 'Low 5 to 6.5 inches  ( ex: Honda Civic)', value: 5, id: 1 },
    { title: 'Medium 6.5 to 8.5 inches (ex: Toyota Rav 4)', value: 6, id: 2 },
    { title: 'High 8.5 inches and above ( ex: Jeep Wrangler)', value: 6, id: 3 },
]

const DistanceOptions = [
    { title: 'Local ( ex: from home to work or home to the store).', value: 'local', id: 1 },
    { title: 'Long-Distance ( ex: passing multiple exits on the highway, more than 2 hours)', value: 'distance', id: 2 },
    { title: 'A mix of both', value: 'both', id: 3 },
]

const CarTypeOptions = [
    { title: 'Coupe', value: 'coupe', id: 1 },
    { title: 'Sedan', value: 'sedan', id: 2 },
    { title: 'SUV', value: 'suv', id: 3 },
]

const FillUpOptions = [
    { title: 'Once every week to week and a half', value: 'infrequent', id: 1 },
    { title: 'Once every couple of days', value: 'frequent', id: 2 },
]

const FuelOptions = [
    { title: 'Gas', value: 'Gas', id: 1 },
    { title: 'Electric', value: 'Electric', id: 2 },
]

const DesignOptions = [
    { title: 'Sporty ( I want to go fast and look good)', value: 'Sporty', id: 1 },
    { title: 'Casual ( I want to have a sensible car that gets me from point A to point B)', value: 'Casual', id: 2 },
    { title: 'A mix of both', value: 'both', id: 3 },
]

export {
    RowOptions,
    DoorOptions,
    CargoOptions,
    TravelOptions,
    ClearanceOptions,
    DistanceOptions,
    CarTypeOptions,
    FillUpOptions,
    FuelOptions,
    DesignOptions
}
