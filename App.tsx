import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./src/Configs/RootStackNavigator";
import { NativeBaseProvider } from "native-base";
import { Provider } from 'react-redux';
import store from "./src/Container/Redux/store";

const App = () => {

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <RootStackNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}


export default App;
