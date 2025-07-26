const ExitButton = (prop: {onExitModal : () => void}) => {
    return(
        <div className="text-[1.3rem]  absolute inset-y-1/2 -top-[1em]
                rounded-full text-white-50 bg-black size-7 cursor-pointer 
                flex justify-center items-center"
                onClick={prop.onExitModal}
        >&times;
        </div>
    )
}

export default ExitButton