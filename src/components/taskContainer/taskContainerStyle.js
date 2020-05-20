import Colors from "../../config/colors";

let taskContainerStyle={

    container:{
        width: '100%',
    },
    description:{
        fontFamily: 'Montserrat',
        textAlign:'left',
        fontWeight:'500',
        fontSize: 15

    },
    name:{
        fontFamily: 'Montserrat',
        textAlign:'left',
        fontWeight:'Bold',
        fontSize: 25,
    },
    date:{
        fontWeight:'600',
        fontFamily:'Montserrat',
        color:Colors.secondaryTextColor,
        fontSize: 10,

    },
    location:{
        fontWeight:'600',
        fontFamily:'Montserrat',
        fontSize: 10,
        color:Colors.secondaryTextColor,
    }
}
export default taskContainerStyle;
