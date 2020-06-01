import Colors from "../../config/colors";
import backgroundImage from "../../assets/background.jpg";

let loginStyle = {
    title: {
        color: Colors.primaryTextColor,
        padding: 20
    },
    container: {
        paddingTop: '7%',
        alignContent: 'center',
        backgroundColor: Colors.backgroundColor,
        minHeight: '600px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover'
    },
    card: {
        backgroundColor: Colors.whiteText,
        margin: '2%',
        borderRadius: 6,
        minWidth: '50%',
        maxWidth: '55%',
    },
    inputStyle: {},
    buttonStyle: {
        border: 0,
        borderRadius: 6,
        margin: '5%',
        backgroundColor: Colors.lightButtonColor
    }
};
export default loginStyle;
