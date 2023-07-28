"use client";

import React, { useState, createContext, useEffect } from "react";

type pollingContextType = {
	selectedCard: number | null;
	setSelectedCard: React.Dispatch<React.SetStateAction<number | null>>;
};

type pollingContextProviderProps = {
	children: React.ReactNode;
};

export const PollingContext = createContext<pollingContextType | null>(null);

export const PollingContextProvider = ({ children }: pollingContextProviderProps) => {
	const [selectedCard, setSelectedCard] = useState<number | null>(() => {
		// Get the initial value from localStorage (if available) or set to null
		const storedValue = localStorage.getItem("selectedCard");
		return storedValue ? JSON.parse(storedValue) : null;
	});

	// Synchronize the state changes with localStorage
	useEffect(() => {
		localStorage.setItem("selectedCard", JSON.stringify(selectedCard));
	}, [selectedCard]);

	return <PollingContext.Provider value={{ selectedCard, setSelectedCard }}>{children}</PollingContext.Provider>;
};
