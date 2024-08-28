export const CategoryItem = ["all", "active", "completed"] as const;
export type CategoryType = (typeof CategoryItem)[number];
