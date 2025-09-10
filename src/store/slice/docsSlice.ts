import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DocsState {
  selectedVersion: string;
  activeCodeTab: string;
  openSubmenus: Record<string, boolean>;
  mobileSidebarOpen: boolean;
}

const initialState: DocsState = {
  selectedVersion: '2025-08-29 (latest)',
  activeCodeTab: 'Shell',
  openSubmenus: {},
  mobileSidebarOpen: false,
};

const docsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    setSelectedVersion: (state, action: PayloadAction<string>) => {
      state.selectedVersion = action.payload;
    },
    setActiveCodeTab: (state, action: PayloadAction<string>) => {
      state.activeCodeTab = action.payload;
    },
    toggleSubmenu: (state, action: PayloadAction<string>) => {
      state.openSubmenus[action.payload] = !state.openSubmenus[action.payload];
    },
    setMobileSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.mobileSidebarOpen = action.payload;
    },
  },
});

export const { setSelectedVersion, setActiveCodeTab, toggleSubmenu, setMobileSidebarOpen } =
  docsSlice.actions;

export default docsSlice.reducer;
