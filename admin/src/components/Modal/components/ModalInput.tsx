import useModal from "./../../../../src/context/modal/useModal";

function ModalInput({data}:any) {
    const modalContext = useModal()

    return (
        <input               //@ts-ignore 
            onChange={(e) => modalContext.onValueChange(e) } 
            className={data.col} 
            placeholder={data.placeholder}
            name={data.name}
            type={data.type}
        />
    )
}

export default ModalInput;