// "use client"; // ✅ must be the very first line

// import { createContext, useContext, useState } from "react";

// const DemoModalContext = createContext();

// export function DemoModalProvider({ children }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);

//   return (
//     <DemoModalContext.Provider value={{ isOpen, openModal, closeModal }}>
//       {children}
//     </DemoModalContext.Provider>
//   );
// }

// export function useDemoModal() {
//   const context = useContext(DemoModalContext);
//   if (!context)
//     throw new Error("useDemoModal must be used within DemoModalProvider");
//   return context;
// }
