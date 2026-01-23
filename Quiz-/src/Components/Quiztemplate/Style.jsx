import {makeStyles} from "@material-ui/core";
 export const pageStyles = makeStyles( theme => ({
    questionTitle :{
        margin :"0px 0px 0px 4px"
    },
    questionNumber :{
        margin: "0px 0px 10px 0px"
    },
    questionPaper:{
        padding : "1.0rem",
        border:"2px solid #5685FF",
        borderRadius:"8px",
        borderShadow:"0px 6px 16px #E9E9E9"
    },
    correctOption:{
        padding:"0.6rem",
        marginTop:"0.8rem",
        marginBottom:"0.8rem",
        borderRadius:"8px",
        border:"2px solid red",
        color:"red"
    },
    wrongOption:{
        padding:"0.6rem",
        marginTop:"0.8rem",
        marginBottom:"0.8rem",
        borderRadius:"8px",
        border:"2px solid green",
        color:"green"
    },
    options:{
        padding:"0.6rem",
        marginTop:"0.8rem",
        marginBottom:"0.8rem",
        borderRadius:"8px",
        border:"2px solid transparent",
        "&:hover":{
            border:"2px solid #5685FF",
            backgroundColor:"white",
        }
    },
    prevButton:{
        padding:"0.6rem",
        marginRight:"10px",
        boxShadow:"0px 6px 16px #E9E9E9",
        borderRadius:"12",
        border:"0px",
    },
    nextButton:{
        padding:"0.6rem",
        marginLef:"12px",
        boxShadow:"0px 6px 16px #E9E9E9",
        borderRadius:"12",
        border:"0px",
    }
    
 }))