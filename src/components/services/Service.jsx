import classes from './Servicerender.module.css'


const Service = ({heading, para, icon}) => {

    return (
        <>

      <div className={`${classes.ContentBox}`}>
        <span>{icon ? icon : "Icon Here"}</span>
        <h2>{heading ? heading : "Heading Hereeeee"}</h2>
        <p>{para ? para : "Paragraph Hereeeee"}</p>
      </div>
 
        </>
    )
}

export default Service