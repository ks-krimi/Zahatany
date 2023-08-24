import { MaterialIcons } from "@expo/vector-icons";
import { ListItem } from "@rneui/themed";
import { router } from "expo-router";
import { useCallback, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";

import { data } from "../../components/card/data";
import { getPoints } from "../../features/point/pointSlice";
import { useAppDispatch, useAppSelector } from "../../rtk/hooks";

const indexScreen = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.points);
  const [expanded, setExpanded] = useState<string>("");
  const [subcategory, setSubcategory] = useState<string>("");

  const gotomap = useCallback(
    (payload: string) => {
      if (!isLoading) {
        router.push({ pathname: "/home/map", params: { payload } });
      }
    },
    [isLoading]
  );

  return (
    <>
      <ScrollView>
        {isLoading && <ActivityIndicator size={"large"} color="red" />}
        {data.map((item, index) => (
          <ListItem.Accordion
            key={index}
            isExpanded={expanded === item.category}
            onPress={() => setExpanded(item.category)}
            bottomDivider
            content={
              <>
                <MaterialIcons
                  name={item.icon}
                  size={30}
                  color={item.color}
                  style={{ paddingRight: 12 }}
                />
                <ListItem.Content>
                  <ListItem.Title style={{ fontWeight: "800", fontSize: 18 }}>
                    {item.category}
                  </ListItem.Title>
                </ListItem.Content>
              </>
            }
          >
            {item.subcategory.map((subItem, subIndex) => (
              <ListItem
                disabled={subcategory == subItem.type}
                key={subIndex}
                onPress={() => {
                  setSubcategory(subItem.type);
                  dispatch(getPoints(subItem.type));
                  gotomap(subItem.title);
                }}
                style={{ paddingLeft: 12 }}
              >
                <ListItem.Content>
                  <ListItem.Title>{subItem.title}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            ))}
          </ListItem.Accordion>
        ))}
      </ScrollView>
    </>
  );
};

export default indexScreen;
