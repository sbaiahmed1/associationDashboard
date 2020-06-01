import Colors from "../../config/colors";
import backgroundImage from "../../assets/background.jpg";

let dashboardHomeStyle = {
    container: {
        backgroundColor: Colors.backgroundColor,
        minHeight: '600px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        maxWidth:'100%'

    },
};
export default dashboardHomeStyle;
