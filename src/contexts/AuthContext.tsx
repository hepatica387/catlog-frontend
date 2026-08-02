import {
  createContext,
  type ReactNode,
  useMemo,
  useState,
} from "react";
import type { LoginResponse } from "../types/Login";

const AUTH_STORAGE_KEY = "catlog.member";

export interface AuthContextValue {
  member: LoginResponse | null;
  isLoggedIn: boolean;
  setMember: (member: LoginResponse) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
}

function getStoredMember(): LoginResponse | null {
  const storedMember = sessionStorage.getItem(AUTH_STORAGE_KEY);

  if (!storedMember) {
    return null;
  }

  try {
    return JSON.parse(storedMember) as LoginResponse;
  } catch {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [member, setMemberState] = useState<LoginResponse | null>(
    getStoredMember,
  );

  function setMember(nextMember: LoginResponse) {
    setMemberState(nextMember);
    sessionStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify(nextMember),
    );
  }

  function logout() {
    setMemberState(null);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  }

  const value = useMemo(
    () => ({
      member,
      isLoggedIn: member !== null,
      setMember,
      logout,
    }),
    [member],
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
