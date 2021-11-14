import React, { createContext, useState, useEffect } from "react";

const ModalContext = createContext<any | null>(null);

const ModalProvider: React.FC = ({children}) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [modal, setModal] = useState<React.FC | undefined>(undefined);

	const toggleModal = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if(isOpen) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [isOpen]);

	const injectModal = (component: React.FC) => {
		setModal(component);
	};

	const value = {isOpen: isOpen, toggleModal, injectModal};

	return (
		<ModalContext.Provider value={value}>
			{ children }
			{ isOpen && modal !== undefined && modal }
		</ModalContext.Provider>
	);
};

export { ModalContext, ModalProvider };