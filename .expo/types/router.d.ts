/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/habits/HabitInfo` | `/habits/Habits` | `/habits/styles/HabitsStyles` | `/home/Home` | `/home/HomeInfo` | `/home/styles/HomeStyles` | `/insights/Insights` | `/insights/styles/InsightsStyles` | `/styles/Colors` | `/styles/Fonts` | `/styles/GlobalStyles`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
