interface FormInputProps{
    type: string,
    placeholder: string
}
const FormInput = (prop: FormInputProps) => {
    return(
        <input type={prop.type} placeholder={prop.placeholder} 
        className="custom_bg p-[.5em] rounded-[.2em] bg-sky-950 sm:max-md: w-full 
        sm:max-md: mt-[1em] sm:max-md: text-[1.123rem] md:text-[1.3rem] 
        font-[Open Sans] outline-none placeholder:text-white" />

    )
}

export default FormInput