import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../Screens/SignUpScreen";
import ConfirmScreen from "../Screens/ConfirmScreen";

const Stack = createNativeStackNavigator()

const RootStackNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="SignupScreen"
                component={SignUpScreen}
            />
            <Stack.Screen
                name="ConfirmScreen"
                component={ConfirmScreen}
            />
        </Stack.Navigator>
    )

}

export default RootStackNavigator