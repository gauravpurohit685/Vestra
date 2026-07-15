
const PositionActions = ({id, price}) => {

    const url = process.env.REACT_APP_CLOSEINDIVIDUALPOSITION + id;

    const handleClosePosition = async () => {
        try{
            const response = await fetch(url, {
                method: "POST",
                credentials: "include",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    price
                }),
            });
        }
        catch{

        }
    }

    return (
        <div className="actions">
            <button className="action" onClick={handleClosePosition()}>
                Close Position
            </button>
        </div>
    )
        
}

export default PositionActions;