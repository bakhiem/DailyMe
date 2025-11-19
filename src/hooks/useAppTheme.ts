import { useAppStore } from '../store/appStore';

export const useAppTheme = () => {
  const theme = useAppStore((s) => s.theme);
  return theme;
};