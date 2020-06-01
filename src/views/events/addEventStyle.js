import Colors from "../../config/colors";
import backgroundImage from "../../assets/background.jpg";



let addEventStyle = {
    container: {
        backgroundColor: Colors.backgroundColor,
        minHeight: '650px',
        maxWidth:'100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        backgroundImage: `url(${backgroundImage})`,
    },
};
export default addEventStyle;
