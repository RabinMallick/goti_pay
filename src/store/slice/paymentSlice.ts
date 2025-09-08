import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PaymentTab = 'card' | 'mobile' | 'net';

interface PaymentState {
  activeTab: PaymentTab;
}

const initialState: PaymentState = {
  activeTab: 'card',
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setActiveTab: (state, action: PayloadAction<PaymentTab>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = paymentSlice.actions;
export default paymentSlice.reducer;
