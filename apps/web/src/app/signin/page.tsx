import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function SignIn() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center">
      <div className="flex flex-row items-center justify-center w-full h-[700px] sm:gap-10 md:gap-[100px] lg:gap-[400px]">
        <div className="w-full">
          <div className="max-w-[410px]">
            <h1 className="text-5xl font-bold text-[--primary-color] font-montserrat">
              Connexion
            </h1>
            <p className="text-xl mt-4">
              Retrouve ton assistant cuisine et reprends là où tu t'étais arrêté.
            </p>
            <form className="flex flex-col gap-4 mt-8">
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 border rounded-md outline-none focus:ring-2 ring-[--primary-color]"
              />
              <input
                type="password"
                placeholder="Mot de passe"
                className="px-4 py-3 border rounded-md outline-none focus:ring-2 ring-[--primary-color]"
              />
              <Button type="submit" className="bg-[--primary-color] mt-2">
                Se connecter
              </Button>
            </form>
            <p className="mt-4 text-sm text-gray-600">
              Pas encore de compte ?{" "}
              <Link href="/signup" className="text-[--primary-color] font-semibold">
                Inscris-toi ici
              </Link>
            </p>
          </div>
        </div>
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