/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/contexts/HabitContext` | `/habitInfo/HabitInfo` | `/habitInfo/components/DateInput` | `/habitInfo/components/FrequencySelector` | `/habitInfo/components/StreakInput` | `/habitInfo/styles/HabitInfoStyles` | `/habits/Habits` | `/habits/components/HabitRow` | `/home/Home` | `/home/components/HabitBox` | `/info/Info` | `/insights/Insights` | `/insights/components/Chart` | `/insights/components/PercentageRow` | `/styles/GlobalStyles` | `/utils/Storage`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
