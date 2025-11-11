import classes from "./CardDetails.module.css";

const CardDetails = ({heading, description, icon}) => {
    return(
        <>
        <div className={`bg-light py-5 px-3 ${classes.card}`}>
            <span>{icon}</span>
            <h2>{heading ? heading : "Heading Here"}</h2>
            <p>{description ? description : "Description Here"}</p>
        </div>
        </>
    )
}

export default CardDetails