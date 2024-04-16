import Link from "next/link";

export default function MainProfilGeneral() {
    return (
        <div className="flex justify-center items-center px-6 py-10 w-full">
            <div className="flex flex-col justify-center items-center border-2 border-turquoise rounded-2xl p-2 w-full max-w-3xl sm:py-2 sm:px-8 md:py-2 md:px-12 lg:py-2 lg:px:24">
                <p className="pt-4 pb-10">Bonjour</p>
                <div className="flex justify-center items-center bg-bleuClaire rounded-2xl text-white mt-4 mb-2 h-28 w-full">
                    Mes tickets
                </div>
                <div className="flex justify-center items-center bg-bleuFonce rounded-2xl text-white my-2 h-28 w-full">
                    Mes achats
                </div>
                <div className="flex justify-center items-center border-2 border-black rounded-2xl my-2 h-28 w-full">
                    <Link href={"/profile"}>Mes informations</Link>
                </div>
            </div>
        </div>
    );
}
