import LottieView from "lottie-react-native";
import { useWindowDimensions } from "react-native";

type LottieProps = {
  page: "one" | "two";
};

export default function Lottie({ page }: LottieProps) {
  const { width } = useWindowDimensions();
  return (
    <LottieView
      autoPlay
      source={
        page === "one"
          ? require("../../../assets/lottie/one.json")
          : require("../../../assets/lottie/two.json")
      }
      style={{
        width: width * 0.8,
        height: "auto",
      }}
    />
  );
}
