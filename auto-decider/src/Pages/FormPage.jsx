import '../App.css';
import { useForm } from "react-hook-form"
import {
    AutoOptions,
    CargoOptions,
    CarTypeOptions,
    ClearanceOptions,
    DesignOptions,
    DistanceOptions,
    DoorOptions,
    FillUpOptions,
    FuelOptions,
    RowOptions,
    TravelOptions,
    UseOptions,
} from '../Options/CarOptions';
import Select from '../Components/Select';
import Input from '../Components/Input';
import RadioGroup from '../Components/RadioGroup';
import TextArea from '../Components/TextArea';


export function FormPage() {
    const {
        register,
        handleSubmit,
        watch,
        control,
    } = useForm()


    const onSubmit = (data) => console.log(data)

    const watchUseType = watch("UseType")


    return (
        <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="border-2 border-gray-400 rounded-lg p-4">
                {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
                <form className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit(onSubmit)}>

                    <Input
                        register={{ ...register("Email", { required: true }) }}
                        id='Email'
                        text='Email'
                        control={control}
                    />

                    <Select
                        register={{ ...register("NumOfRows", { required: true }) }}
                        id="NumOfRows"
                        text="Do you want a second row?"
                        options={RowOptions}
                        control={control}
                    />

                    <Select
                        register={{ ...register("NumOfDoors", { required: true }) }}
                        id="NumOfDoors"
                        text="2 or 4 doors?"
                        options={DoorOptions}
                        control={control}
                    />

                    <Select
                        register={{ ...register("CargoSpace", { required: true }) }}
                        id="CargoSpace"
                        text="Is cargo space a necessity?"
                        options={CargoOptions}
                        control={control}
                    />

                    <Select
                        register={{ ...register("LDRent", { required: true }) }}
                        id="LDRent"
                        text="Do you want to rent a car or use yours when traveling long distances?"
                        options={TravelOptions}
                        control={control}
                    />

                    <Select
                        register={{ ...register("GClearance", { required: true }) }}
                        id="GClearance"
                        text="Ground Clearance"
                        options={ClearanceOptions}
                        control={control}
                        className="full-width"
                    />

                    <Select
                        register={{ ...register("TravelDistance", { required: true }) }}
                        id="TravelDistance"
                        text="Do you plan to drive more long distances or do local driving normally?"
                        options={DistanceOptions}
                        control={control}
                        className="full-width"
                    />

                    <Select
                        register={{ ...register("CarType", { required: true }) }}
                        id="CarType"
                        text="Do you want a coupe, sedan or SUV?"
                        options={CarTypeOptions}
                        control={control}
                    />

                    <RadioGroup
                        register={{ ...register("GasFreq", { required: true }) }}
                        id="GasFreq"
                        text="How often do you want to fill up?"
                        options={FillUpOptions}
                        control={control}
                    />

                    <Select
                        register={{ ...register("FuelType", { required: true }) }}
                        id="FuelType"
                        text="Gas or Electric?"
                        options={FuelOptions}
                        control={control}
                    />

                    <Select
                        register={{ ...register("DesignType", { required: true }) }}
                        id="DesignType"
                        text="Sporty or Casual?"
                        options={DesignOptions}
                        className="full-width"
                        control={control}
                    />

                    <TextArea
                        register={{ ...register("SpecFeats", { required: true }) }}
                        id="SpecFeats"
                        text="Any special features you must have?"
                        control={control}
                    />

                    <Select
                        register={{ ...register("UseType", { required: true }) }}
                        id="UseType"
                        text="Intended use (daily, family, weekends only, collection (I count the milage) all of the above)"
                        options={UseOptions}
                        control={control}
                    />

                    {watchUseType === "Other" && (
                        <TextArea
                            register={{ ...register("OtherUse", { required: false }) }}
                            id="OtherUse"
                            text="Please elaborate for your choice of other"
                            control={control}
                        />
                    )}

                    <Input
                        register={{ ...register("Budget", { required: true }) }}
                        id='Budget'
                        text='What is our budget? (For both new and used)'
                        control={control}
                    />

                    <Input
                        register={{ ...register("BrandPModel", { required: true }) }}
                        id='BrandPModel'
                        text='Any specific brand and model you prefer?'
                        control={control}
                    />

                    <TextArea
                        register={{ ...register("Preference", { required: false }) }}
                        id="Preference"
                        text="From what you have driven/rode in, is there anything you liked?"
                        control={control}
                    />

                    <Select
                        register={{ ...register("AutoOps", { required: true }) }}
                        id="AutoOps"
                        text="How many options would you like to receive?"
                        options={AutoOptions}
                        control={control}
                    />

                    <input type="submit" className='input' />
                </form>
            </div>
        </main>
    )
}
