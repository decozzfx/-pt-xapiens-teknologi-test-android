import LanguageInterface from "src/shared/language/languageInterface";
import { UserSchema } from "src/data/local/schema/UserSchema";
import { ThemeInterface } from "src/shared/theme";

export interface ActionMap<T> {
  id: number;
  value: T;
}

interface ModifiedUserProperties {
  theme: ThemeInterface;
  language: LanguageInterface;
}
export interface UserState {
  user: UserSchema & ModifiedUserProperties;
}
