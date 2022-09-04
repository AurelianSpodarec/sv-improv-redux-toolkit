// import CreateModal from "../CreateModal";



function ModalConfirm({props}:ModalConfirmProps) {

    const { option, title, description} = props;
    // TODO: Give limited options 
    // const options = {
    //     "delete",
    //     "confirm"
    // }
    function onMainClick(e:any) {

    }
    return (
        <div>
            <header>
                {option ? option : "Delete"} <span style={{ fontWeight: "bold"}}>{title}</span>
            </header>
            <section>
                {description ? description : "Are you sure you would want to do this" }
            </section>
            <footer>
                <button>
                    Cancel
                </button>
                <button onClick={(e) => onMainClick(e)}>
                {/* onButtonClick: (event: React.MouseEvent) => { */}
{/* //       alert('You clicked that button!'); */}
{/* //     }, */}
                    {option ? option : "Delete"}
                </button>
            </footer>
        </div>
    )
}

export default ModalConfirm;

interface ModalConfirmProps {
    props: any;
    // option: string;
    // title: string;
    // description: string;
}