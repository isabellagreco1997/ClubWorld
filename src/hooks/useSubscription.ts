import { create } from 'zustand';

interface SubscriptionState {
  isSubscribed: boolean;
  subscribe: () => void;
  unsubscribe: () => void;
}

export const useSubscription = create<SubscriptionState>((set) => ({
  isSubscribed: false,
  subscribe: () => set({ isSubscribed: true }),
  unsubscribe: () => set({ isSubscribed: false }),
}));