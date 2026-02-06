function InputText({children, id, type, name, placeholder}) {
    return (
        <div className={'flex flex-col'}>
            <label htmlFor={id} className={'font-medium [&>span]:text-sm [&>span]:font-normal [&>span]:text-red-700'}>{children}</label>
            <input type={type} id={id} name={name} placeholder={placeholder} className={'border border-gray-300 rounded h-14 outline-none px-4'}/>
        </div>
    )
}

export default InputText