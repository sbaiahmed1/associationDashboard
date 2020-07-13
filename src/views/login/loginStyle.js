import Colors from "../../config/colors";

let loginStyle = {
    title: {
        color: Colors.primaryTextColor,
        padding: 20
    },
    container: {
        paddingTop: '2%',
        alignContent: 'center',
        backgroundColor: '#47c4fd',
        width: '100%',
        height: '100%',
        backgroundAttachment: 'fixed',
        // backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover'
    },
    card: {
        margin: '2%',
        borderRadius: 6,
        minWidth: '30%',
        maxWidth: '40%',
        backgroundColor: Colors.whiteText,
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
