import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Modal = ({
    onClose,
    images,
}: {
    onClose: () => void;
    images: string[];
}) => {
    const modalRef = useRef<HTMLDivElement>(null);

    // Cierra si se hace clic fuera del contenido
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div className="fixed top-0 right-0 inset-0 z-50 h-screen w-screen bg-[#111827]/80 flex items-center justify-center backdrop-blur-sm animate-fade-in">
            <div
                ref={modalRef}
                className="relative w-full max-w-4xl bg-[#1f2937] py-2 rounded-xl shadow-xl overflow-hidden animate-zoom-in"
            >
                {/* Botón de cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-5 text-3xl font-bold text-gray-400 hover:text-red-500 z-10"
                >
                    ×
                </button>

                {/* Carrusel Splide */}
                <Splide
                    options={{
                        type: "slide",
                        perPage: 1,
                        arrows: true,
                        pagination: true,
                        speed: 600,
                    }}
                    className="w-full"
                >
                    {images.map((img, idx) => (
                        <SplideSlide key={idx}>
                            <div className="relative w-full max-h-[80vh] overflow-y-auto">
                                <div className="flex items-center justify-center h-full p-4">
                                    <Image
                                        src={img}
                                        alt="imagen"
                                        width={1000}
                                        height={1200}
                                        objectFit="contain"
                                        className="rounded-xl block"
                                    />
                                </div>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
};

export default Modal;
