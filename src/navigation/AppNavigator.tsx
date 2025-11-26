import { NavigationContainer } from "@react-navigation/native";
import { MainTabs } from "./MainTabs";

export const AppNavigator = () => {
    return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
};