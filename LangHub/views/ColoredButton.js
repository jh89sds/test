import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    ToolbarAndroid,
    View
} from 'react-native';
import {MKButton} from 'react-native-material-kit';

const styles = StyleSheet.create({
   container:{
       flex:1,
       alignItems:'center',
   },
    toolbar:{
        alignSelf:'stretch',
        height:50,
        backgroundColor:'silver',
    },
});

const ColoredRaisedButton = MKButton.coloredButton()
    .withText('BUTTON')
    .withOnPress(() => {
        alert("Hi, it's a colored button!");
    })
    .build();

export default class ColoredButton extends Component {
    render() {
        return (
        <View>
            <ToolbarAndroid style = {styles.toolbar}
                            title="LangHub"/>
            <Text>App Component Test</Text>
            <ColoredRaisedButton/>
        </View>
        );
    }
}
