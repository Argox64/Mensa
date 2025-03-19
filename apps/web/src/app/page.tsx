import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper className="flex flex-col items-center">
      <div className="flex flex-row items-center justify-center w-full h-[700px] sm:gap-10 md:gap-[100px] lg:gap-[400px]">
        <div className="w-full">
          <div className="max-w-[410px]">
            <h1 className="text-6xl font-bold text-[--primary-color] font-montserrat">
              Mensa
            </h1>
            <p className="text-3xl font-semibold ">Ton nouveau compagnon cuisine !</p>
            <p className="text-lg">Menus, courses et budget maîtrisé en un clic.</p>
          </div>
          <Button type="button" className="bg-[--primary-color] mt-8">
            Générer ma recette
          </Button>
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
            <div className="absolute bg-[--secondary-color] rounded-full h-[400px] w-[400px] top-[100px] left-[-25px]">
            </div>
            <div className="absolute bg-[--secondary-color] rounded-full h-[60px] w-[60px] top-[450px] left-[-70px]">
            </div>
            <div className="absolute bg-[--secondary-color] rounded-full h-[40px] w-[40px] top-[60px] left-[350px]">
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-start">
        <h2>C'est quoi Mensa ?</h2>
        <div className="flex flex-row gap-10 mt-10">
          <div>
            <div className="bg-[--secondary-color] rounded-full w-[80px] h-[80px] text-[#FFE500] text-3xl font-semibold flex">
              <span className="m-auto">I</span>
            </div>
          </div>

          <div className="w-full">
            <h3>Un assistant qui te crée un planning de repas sur mesure. 📅</h3>
            <p>Planifie facilement tes repas selon tes préférences, respecte ton régime 
                          alimentaire et bénéficie d’un équilibre nutritionnel adapté à tes besoins.</p>
            </div>
        </div>
        <div className="flex flex-row gap-10 mt-10">
          <div>
            <div className="bg-[--secondary-color] rounded-full w-[80px] h-[80px] text-[#FFE500] text-3xl font-semibold flex">
              <span className="m-auto">II</span>
            </div>
          </div>

          <div className="w-full">
            <h3>Tu évites le gaspillage et optimise tes dépenses alimentaires. 💰</h3>
            <p>Mensa crée un menu équilibré sur la semaine, en évitant les achats superflus et en
              réutilisant intelligemment les ingrédients. Mensa génère une liste de courses précise
              avec uniquement ce dont tu as besoin.</p>
          </div>
        </div>
        <div className="flex flex-row gap-10 mt-10">
          <div>
            <div className="bg-[--secondary-color] rounded-full w-[80px] h-[80px] text-[#FFE500] text-3xl font-semibold flex">
              <span className="m-auto">III</span>
            </div>
          </div>

          <div className="w-full">
            <h3>Un assistant qui s’adapte à tes envies 👩‍🍳</h3>
            <p>Que tu sois pressé ou que tu veuilles prendre ton temps, Mensa propose des recettes adaptées à ton emploi du temps, avec des étapes claires et faciles à suivre. Aussi, Mensa veille 
            à ce que tu manges sainement, mais sans sacrifier le plaisir.</p>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
