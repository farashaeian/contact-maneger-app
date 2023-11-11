import LoadingSpinner from "../assets/LoadingSpinner.jpg";

const Spinner = () => {
    return (
        <>
            <img src={LoadingSpinner} alt="spinner" className="d-block m-auto" style={{ width: "200px" }} />
        </>
    );
}

export default Spinner;
