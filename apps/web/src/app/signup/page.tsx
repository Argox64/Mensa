"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { trpcClient } from "@cook/trpc-client/client";
import { SignUpSchemaRequest, SignUp as SignUpData } from "@cook/validations";
import { useUser } from "@/contexts/UserContext";

export default function SignUp() {
  const router = useRouter();
  const { refetchUser } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: zodResolver(SignUpSchemaRequest),
  });

  const { mutate: signup, isLoading, error } = trpcClient.users.signUp.useMutation({
    onSuccess: () => {
      refetchUser();
      router.push("/dashboard");
    },
  });

  const onSubmit = (data: SignUpData) => {
    console.log(data);
    signup(data);
  };

  return (
    <MaxWidthWrapper className="flex flex-col items-center">
      <div className="flex flex-row items-center justify-center w-full h-[700px] sm:gap-10 md:gap-[100px] lg:gap-[400px]">
        <div className="w-full">
          <div className="max-w-[410px]">
            <h1 className="text-5xl font-bold text-[--primary-color] font-montserrat">
              Inscription
            </h1>
            <p className="text-xl mt-4">
              Crée ton compte gratuitement et commence à planifier tes repas en toute simplicité.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-8">
              <Input placeholder="Nom" {...register("name")} />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

              <Input placeholder="Email" {...register("email")} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

              <Input type="password" placeholder="Mot de passe" {...register("password")} />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}

              {error && <p className="text-red-500 text-sm">Une erreur est survenue</p>}

              <Button type="submit" className="bg-[--primary-color] mt-2" disabled={isLoading}>
                {isLoading ? "Création..." : "S'inscrire"}
              </Button>
            </form>

            <p className="mt-4 text-sm text-gray-600">
              Déjà inscrit ?{" "}
              <Link href="/signin" className="text-[--primary-color] font-semibold">
                Connecte-toi ici
              </Link>
            </p>
          </div>
        </div>

        {/* Image section */}
        <div className="w-full flex relative items-center justify-center h-[600px] -z-10">
          <div className="absolute top-0 left-0">
            <Image
              src={"/images/mockup.png"}
              alt={"Mensa application on phone"}
              width={350}
              height={150}
              className="absolute z-10 min-w-[350px]"
            />
            <div className="absolute bg-[--secondary-color] rounded-full h-[400px] w-[400px] top-[100px] left-[-25px]"></div>
            <div className="absolute bg-[--secondary-color] rounded-full h-[60px] w-[60px] top-[450px] left-[-70px]"></div>
            <div className="absolute bg-[--secondary-color] rounded-full h-[40px] w-[40px] top-[60px] left-[350px]"></div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
