const RowOptions = [
    { title: 'Yes', value: true, key: 1 },
    { title: 'No', value: false, key: 2 },
    { title: 'Not sure', value: null, key: 3 },
]

const DoorOptions = [
    { title: '2', value: 2, key: 1 },
    { title: '4', value: 4, key: 2 },
]

const CargoOptions = [
    { title: 'Yes', value: true, key: 1 },
    { title: 'No', value: false, key: 2 },
    { title: 'Not sure', value: null, key: 3 },
]

const TravelOptions = [
    { title: 'Rent', value: true, key: 1 },
    { title: 'Use Mine', value: false, key: 2 },
]

const ClearanceOptions = [
    { title: 'Low 5 to 6.5 inches  ( ex: Honda Civic)', value: 5, key: 1 },
    { title: 'Medium 6.5 to 8.5 inches (ex: Toyota Rav 4)', value: 6, key: 2 },
    { title: 'High 8.5 inches and above ( ex: Jeep Wrangler)', value: 6, key: 3 },
]

const DistanceOptions = [
    { title: 'Local ( ex: from home to work or home to the store).', value: 'local', key: 1 },
    { title: 'Long-Distance ( ex: passing multiple exits on the highway, more than 2 hours)', value: 'distance', key: 2 },
    { title: 'A mix of both', value: 'both', key: 3 },
]

const CarTypeOptions = [
    { title: 'Coupe', value: 'coupe', key: 1 },
    { title: 'Sedan', value: 'sedan', key: 2 },
    { title: 'SUV', value: 'suv', key: 3 },
]

const FillUpOptions = [
    { title: 'Once every week to week and a half', value: 'infrequent', key: 1 },
    { title: 'Once every couple of days', value: 'frequent', key: 2 },
]

const FuelOptions = [
    { title: 'Gas', value: 'Gas', key: 1 },
    { title: 'Electric', value: 'Electric', key: 2 },
]

const DesignOptions = [
    { title: 'Sporty ( I want to go fast and look good)', value: 'Sporty', key: 1 },
    { title: 'Casual ( I want to have a sensible car that gets me from point A to point B)', value: 'Casual', key: 2 },
    { title: 'A mix of both', value: 'both', key: 3 },
]

const UseOptions = [
    { title: 'Daily', value: 'Daily', key: 1 },
    { title: 'Family', value: 'Family', key: 2 },
    { title: 'Weekends Only', value: 'Weekends', key: 3 },
    { title: 'Collection', value: 'Collection', key: 4 },
    { title: 'All of the above', value: 'All', key: 5 },
    { title: 'Other', value: 'Other', key: 6 },
]

const AutoOptions = [
    { title: '5', value: 5, key: 1 },
    { title: '10', value: 10, key: 2 },
    { title: '15', value: 15, key: 3 },
    { title: 'only 1 or 2', value: 2, key: 4 },
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
    DesignOptions,
    UseOptions,
    AutoOptions
}
