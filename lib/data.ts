export type SubscriptionStatus = "active" | "trial" | "paused" | "cancelled";
export type BillingCycle = "monthly" | "yearly" | "quarterly" | "weekly";
export type Category = "entertainment" | "productivity" | "storage" | "health" | "finance" | "other";

export interface Subscription {
  id: string;
  name: string;
  category: Category;
  amount: number;
  currency: string;
  cycle: BillingCycle;
  nextRenewal: string;
  status: SubscriptionStatus;
  color: string;
  icon: string;
  description?: string;
  startedAt: string;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  entertainment: "Divertisment",
  productivity: "Productivitate",
  storage: "Stocare",
  health: "Sănătate",
  finance: "Finanțe",
  other: "Altele",
};

export const CYCLE_LABELS: Record<BillingCycle, string> = {
  monthly: "Lunar",
  yearly: "Anual",
  quarterly: "Trimestrial",
  weekly: "Săptămânal",
};

export const subscriptions: Subscription[] = [
  { id: "1", name: "Netflix", category: "entertainment", amount: 15.99, currency: "EUR", cycle: "monthly", nextRenewal: "2025-05-18", status: "active", color: "#E50914", icon: "N", startedAt: "2023-01-15" },
  { id: "2", name: "Spotify Family", category: "entertainment", amount: 15.99, currency: "EUR", cycle: "monthly", nextRenewal: "2025-05-22", status: "active", color: "#1DB954", icon: "S", startedAt: "2022-08-10" },
  { id: "3", name: "Adobe Creative Cloud", category: "productivity", amount: 54.99, currency: "EUR", cycle: "monthly", nextRenewal: "2025-05-10", status: "trial", color: "#FF0000", icon: "A", startedAt: "2024-11-10" },
  { id: "4", name: "Google One", category: "storage", amount: 2.99, currency: "EUR", cycle: "monthly", nextRenewal: "2025-05-15", status: "active", color: "#4285F4", icon: "G", startedAt: "2021-03-01" },
  { id: "5", name: "Linear", category: "productivity", amount: 8.00, currency: "EUR", cycle: "monthly", nextRenewal: "2025-06-01", status: "active", color: "#5E6AD2", icon: "L", startedAt: "2024-02-14" },
  { id: "6", name: "Notion", category: "productivity", amount: 10.00, currency: "EUR", cycle: "monthly", nextRenewal: "2025-05-28", status: "active", color: "#000000", icon: "N", startedAt: "2023-06-20" },
  { id: "7", name: "1Password", category: "other", amount: 3.99, currency: "EUR", cycle: "monthly", nextRenewal: "2025-05-31", status: "active", color: "#1072CA", icon: "1", startedAt: "2022-12-05" },
  { id: "8", name: "Figma", category: "productivity", amount: 15.00, currency: "EUR", cycle: "monthly", nextRenewal: "2025-06-10", status: "paused", color: "#F24E1E", icon: "F", startedAt: "2023-09-01" },
  { id: "9", name: "YouTube Premium", category: "entertainment", amount: 13.99, currency: "EUR", cycle: "monthly", nextRenewal: "2025-05-25", status: "active", color: "#FF0000", icon: "Y", startedAt: "2024-01-01" },
  { id: "10", name: "Dropbox", category: "storage", amount: 9.99, currency: "EUR", cycle: "monthly", nextRenewal: "2025-06-05", status: "cancelled", color: "#0061FF", icon: "D", startedAt: "2022-04-15" },
];

export const monthlyData = [
  { month: "Oct", amount: 132 },
  { month: "Nov", amount: 128 },
  { month: "Dec", amount: 149 },
  { month: "Ian", amount: 141 },
  { month: "Feb", amount: 138 },
  { month: "Mar", amount: 155 },
  { month: "Apr", amount: 148 },
  { month: "Mai", amount: 140.94 },
];

export const categoryData = [
  { name: "Productivitate", value: 87.99, color: "#C9A84C" },
  { name: "Divertisment", value: 45.97, color: "#5B8DEF" },
  { name: "Stocare", value: 12.98, color: "#3DC98A" },
  { name: "Altele", value: 3.99, color: "#9B9994" },
];
