// context/UserContext.tsx
"use client";

import { createClient } from "@cook/supabase";
import { trpcClient } from "@cook/trpc-client/client";
import { UserLite } from "@cook/validations";
import { createContext, useContext, useState } from "react";
import { TRPCClientError } from "@cook/trpc-client/types";
import { UnauthorizedError } from "@cook/errors";

interface UserContextType {
  user: UserLite | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserLite | null>(null);
  const supabase = createClient();

  const { data, isLoading } = trpcClient.users.me.useQuery(undefined, {
    enabled: true,
    refetchOnWindowFocus: false,
    onSuccess: (user) => {
      if (user) {
        setUser({
          id: user.id,
          email: user.email || "",
          aud: user.aud,
        });
      }
    },
    onError: (error) => {
      setUser(null);
    },
    retry: (failureCount, error) => {
      console.log("retrying", failureCount, error.shape?.data);
      if (error instanceof TRPCClientError && error.shape.data.code === "UNAUTHORIZED") {
        return false;
      }
      return failureCount < 2;
    }
  });

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, isLoading, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook pour consommer le contexte
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};