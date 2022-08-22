import { atom } from "recoil";

export const isDarkState = atom({
    key: "isDark",
    default: false,
});
export const isEditingState = atom({
    key: "isEditing",
    default: false,
});
export const userState = atom({
    key: "user",
    default: [],
});
export const portfolioOwnerState = atom({
    key: "portfolioOwner",
    default: null,
});
