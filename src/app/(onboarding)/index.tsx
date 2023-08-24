import Onboarding from "react-native-onboarding-swiper";

import Lottie from "../../components/lottie";
import { useFirstLaunchApp } from "../../contexts/first_launch";

const OnboadingScreen = () => {
  const { setIsFirstLaunch } = useFirstLaunchApp();
  return (
    <Onboarding
      nextLabel={"Suivant"}
      skipLabel={"Passer"}
      onDone={() => setIsFirstLaunch(false)}
      onSkip={() => setIsFirstLaunch(false)}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Lottie page="one" />,
          title: "Fianarantsoa en Focus",
          subtitle:
            "Naviguez à travers les points d'intérêt de la ville aux mille facettes",
        },
        {
          backgroundColor: "#fff",
          image: <Lottie page="two" />,
          title: "Fianarantsoa Exploration Guide",
          subtitle:
            "Découvrez, Planifiez et Explorez avec des estimations de temps en direct",
        },
      ]}
    />
  );
};

export default OnboadingScreen;
