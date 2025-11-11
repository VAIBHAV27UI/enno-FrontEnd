import { Link } from "react-router-dom";
import classes from "./Button1.module.css";


const Button1 = (props) =>{
    console.log(props);
    const {text, style, href} = props;
    console.log(style);

    return(
        <>
            <Link to={href ? href : "/contact"} className={classes.mobileClass}>
            <button className={classes.btn} style={style}>
                {text ? text : "get started"}
            </button>
            </Link>
        </>
    )
}


export default Button1;