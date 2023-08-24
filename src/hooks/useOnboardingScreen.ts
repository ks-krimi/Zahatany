import { useRootNavigation, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export const useOnboardingScreen = (isFirstLaunchAppState: boolean) => {
  const router = useRouter();
  const [isNavigationReady, setNavigationReady] = useState(false);
  const rootNavigation = useRootNavigation();

  useEffect(() => {
    const unsubscribe = rootNavigation?.addListener("state", (event) => {
      setNavigationReady(true);
    });

    if (isNavigationReady) {
      if (isFirstLaunchAppState == true) {
        router.replace("/(onboarding)");
      }
    }

    if (isFirstLaunchAppState == false) {
      router.replace("/home");
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [isFirstLaunchAppState, isNavigationReady]);
};
