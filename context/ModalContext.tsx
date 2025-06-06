import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextProps {
    isOpen: boolean;
    images: string[];
    openModal: (images: string[]) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [images, setImages] = useState<string[]>([]);

    const openModal = (imgs: string[]) => {
        setImages(imgs);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setImages([]);
    };

    return (
        <ModalContext.Provider value={{ isOpen, images, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};
