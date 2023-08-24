import {
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { useOnboardingScreen } from "../hooks/useOnboardingScreen";

interface FirstLaunchContextValue {
  isFirstLaunch: boolean;
  setIsFirstLaunch: (value: SetStateAction<boolean>) => void;
}

const FirstLaunchContext = createContext<FirstLaunchContextValue>({
  isFirstLaunch: true,
  setIsFirstLaunch: () => {},
});

export const useFirstLaunchApp = () => {
  return useContext(FirstLaunchContext);
};

type FirstLaunchAppProviderProps = {
  children: ReactNode;
};

const FirstLaunchAppProvider: FC<FirstLaunchAppProviderProps> = ({
  children,
}) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean>(true);
  useOnboardingScreen(isFirstLaunch);

  return (
    <FirstLaunchContext.Provider value={{ isFirstLaunch, setIsFirstLaunch }}>
      {children}
    </FirstLaunchContext.Provider>
  );
};

export default FirstLaunchAppProvider;
