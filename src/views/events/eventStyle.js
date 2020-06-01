import Colors from "../../config/colors";
import backgroundImage from "../../assets/background.jpg";

let eventStyle = {
    container: {
        backgroundColor: Colors.backgroundColor,
        minHeight: '650px',
        minWidth:'100%',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        backgroundImage: `url(${backgroundImage})`,
    },
};
export default eventStyle;
