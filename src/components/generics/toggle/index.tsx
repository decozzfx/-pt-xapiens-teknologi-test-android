import React, { useCallback, useEffect, useMemo, useState } from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import Styles from "./style";

interface ToggleProps {
  isActive: boolean;
  rounded: boolean | false;
  shouldPersist: boolean | false;
  onToggle: (val: boolean) => void;
  iconCheck?: any;
  style?: StyleProp<ViewStyle>;
}

const ToggleComponent: React.FC<ToggleProps> = (props) => {
  const { isActive, rounded, iconCheck, style, shouldPersist, onToggle } =
    props;
  const [isactiveState, setActive] = useState(false);

  useEffect(() => {
    setActive(isActive);
  }, [isActive]);

  const updateValue = useCallback(
    (value = true, throughLockRealease = false) => {
      if (shouldPersist && !value && !throughLockRealease) {
        return false;
      }

      setActive(value);

      if (onToggle && !throughLockRealease) {
        onToggle(value);
      }
    },
    [onToggle, shouldPersist]
  );

  const RenderMain = useMemo(() => {
    return (
      <TouchableOpacity
        style={[Styles.border, rounded ? { borderRadius: 50 } : {}, style]}
        onPress={() => updateValue(!isactiveState)}
      >
        {iconCheck ? (
          isActive && iconCheck
        ) : (
          <View
            style={[
              Styles.fill,
              { width: isActive ? 16 : 0, height: isActive ? 16 : 0 },
              rounded ? { borderRadius: 50 } : {},
            ]}
          />
        )}
      </TouchableOpacity>
    );
  }, [isActive, isactiveState, rounded, updateValue, iconCheck, style]);

  return RenderMain;
};

export default ToggleComponent;
