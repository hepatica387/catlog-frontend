import { createContext, useContext, useState, type ReactNode } from "react";

interface ReservationContextValue {
  catId: string | null;
  setCatId: (catId: string | null) => void;
}

const ReservationContext = createContext<ReservationContextValue | undefined>(undefined);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [catId, setCatId] = useState<string | null>(null);

  return (
    <ReservationContext.Provider value={{ catId, setCatId }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used within ReservationProvider");
  }
  return context;
}
