"use client";

//import { createClient } from "@cook/supabase";
import { trpcClient } from "@cook/trpc-client/client";
import { UserLite } from "@cook/validations";
import { createContext, useContext, useState } from "react";
import { TRPCClientError } from "@cook/trpc-client/types";

interface UserContextType {
  user: UserLite | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<UserLite>;
  refetchUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserLite | null>(null);

  const meRes = trpcClient.users.me.useQuery(undefined, {
    enabled: true,
    refetchOnWindowFocus: false,
    onSuccess: (user) => {
      if (user) {
        console.log("User fetched successfully:", user);
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

  const signOutTrpc = trpcClient.users.signOut.useMutation({
    onSuccess: async () => {
      setUser(null);
    }
  });

  const signOut = () => {
    return signOutTrpc.mutateAsync();
  };

  const signInTrpc = trpcClient.users.signIn.useMutation({
    onSuccess: (user) => {
      console.log("User signed in successfully:", user);
      setUser({
        id: user.id,
        email: user.email || "",
        aud: user.aud,
      });
    }
  });

  const signIn = (email: string, password: string) => {
    return signInTrpc.mutateAsync({
      email,
      password,
    }).then((user) => {
      return {
        id: user.id,
        email: user.email || "",
        aud: user.aud,
      }
    });
  };

  const refetchUser = async () => {
    await meRes.refetch();
  }


  const isLoading = meRes.isLoading || signOutTrpc.isLoading || signInTrpc.isLoading;
  return (
    <UserContext.Provider value={{ user, isLoading, signOut, signIn, refetchUser }}>
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