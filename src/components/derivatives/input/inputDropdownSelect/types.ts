import { Dispatch } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

type SetStateValue<S> = (prevState: S) => S;

export interface DropdownSelectType {
  setSelectedValue: (value: string) => void;
  setIsDropdownOpen: Dispatch<SetStateValue<boolean>>;
  isDropdownOpen: boolean;
  disabled?: boolean;
  selectedValue: string | null;
  dropdownOption: DropdownOptionType[];
  error?: string;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
  placeholder?: string;
  listMode?: 'DEFAULT' | 'FLATLIST' | 'SCROLLVIEW' | 'MODAL';
  screenName?: string;
  index?: string;
  inputName?: string;
  isRequired?: boolean;
  fontLabelSize?: number;
}

interface DropdownOptionType {
  value: string;
  label: string;
}
