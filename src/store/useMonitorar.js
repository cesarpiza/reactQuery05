import { create } from "zustand";

const initialState = {
    isLoding: true,
}

export const useMonitorar = create(() => initialState)

export const changeIsLoading = () => useMonitorar.setState(() => ({
    isLoding: false,
}))