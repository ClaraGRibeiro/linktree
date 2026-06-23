"use client";

import {
    BriefcaseBusiness,
    Camera,
    ChevronDown,
    FolderKanban,
    Globe,
    MapPin,
    MessageCircle,
    Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Profile = {
    nome: string;
    foto: string;
    subtitulo: string;
    lattes?: string;
    site?: string;
    linkedin: string;
    whatsapp: string;
    instagram: string;

    projetos?: ReadonlyArray<{
        nome: string;
        url: string;
    }>;

    membros?: ReadonlyArray<{
        nome: string;
        slug: string;
        foto: string;
    }>;
};

export default function LinkTree({
    profile,
}: {
    profile: Profile;
}) {
    const [lang, setLang] = useState("pt");
    const [showTeam, setShowTeam] = useState(false);
    const [showProjects, setShowProjects] =
        useState(false);
    const subtitles = {
        pt: {
            "Observatório de Transporte de Minas Gerais":
                "Observatório de Transporte de Minas Gerais",

            "Pesquisador + Professor":
                "Pesquisador + Professor",

            "Desenvolvedora + Analista de Sistemas":
                "Desenvolvedora + Analista de Sistemas",

            "Publicitária + Analista de Comunicação":
                "Publicitária + Analista de Comunicação",

            "Engenheiro Civil + Orçamentista de Obra":
                "Engenheiro Civil + Orçamentista de Obra",

            "Cientista Social":
                "Cientista Social",

            "Engenheira Civil":
                "Engenheira Civil",

            "Engenheiro de Software + FullStack":
                "Engenheiro de Software + FullStack",

            "Arquiteta + Urbanista":
                "Arquiteta + Urbanista",
        },

        en: {
            "Observatório de Transporte de Minas Gerais":
                "Minas Gerais Transport Observatory",

            "Pesquisador + Professor":
                "Researcher + Professor",

            "Desenvolvedora + Analista de Sistemas":
                "Developer + Systems Analyst",

            "Publicitária + Analista de Comunicação":
                "Advertiser + Communication Analyst",

            "Engenheiro Civil + Orçamentista de Obra":
                "Civil Engineer + Construction Estimator",

            "Cientista Social":
                "Social Scientist",

            "Engenheira Civil":
                "Civil Engineer",

            "Engenheiro de Software + FullStack":
                "Software Engineer + Full Stack Developer",

            "Arquiteta + Urbanista":
                "Architect + Urban Planner",
        },

        es: {
            "Observatório de Transporte de Minas Gerais":
                "Observatorio de Transportes de Minas Gerais",

            "Pesquisador + Professor":
                "Investigador + Profesor",

            "Desenvolvedora + Analista de Sistemas":
                "Desarrolladora + Analista de Sistemas",

            "Publicitária + Analista de Comunicação":
                "Publicista + Analista de Comunicación",

            "Engenheiro Civil + Orçamentista de Obra":
                "Ingeniero Civil + Presupuestador de Obras",

            "Cientista Social":
                "Científica Social",

            "Engenheira Civil":
                "Ingeniera Civil",

            "Engenheiro de Software + FullStack":
                "Ingeniero de Software + Full Stack",

            "Arquiteta + Urbanista":
                "Arquitecta + Urbanista",
        },
    } as const;
    const translations = {
        pt: {
            subtitle:
                subtitles.pt[
                profile.subtitulo as keyof typeof subtitles.pt
                ] ?? profile.subtitulo,
            site: "Site",
            lattes: "Lattes",
            linkedin: "LinkedIn",
            whatsapp: "WhatsApp",
            instagram: "Instagram",
            projectos: "Projetos",
            equipe: "Equipe",
            local: (
                <>
                    Unimontes, Montes Claros - MG
                    <br />
                    Sala 303, 3º andar, PPGMCS
                </>
            ),
        },

        en: {
            subtitle:
                subtitles.en[
                profile.subtitulo as keyof typeof subtitles.en
                ] ?? profile.subtitulo,
            site: "Website",
            lattes: "Lattes CV",
            linkedin: "LinkedIn",
            whatsapp: "WhatsApp",
            instagram: "Instagram",
            projectos: "Projects",
            equipe: "Team",
            local: (
                <>
                    Unimontes, Montes Claros - MG
                    <br />
                    Room 303, 3rd Floor, PPGMCS
                </>
            ),
        },

        es: {
            subtitle:
                subtitles.es[
                profile.subtitulo as keyof typeof subtitles.es
                ] ?? profile.subtitulo,
            site: "Página web",
            lattes: "Currículum Lattes",
            linkedin: "LinkedIn",
            whatsapp: "WhatsApp",
            instagram: "Instagram",
            projectos: "Proyectos",
            equipe: "Equipo",
            local: (
                <>
                    Unimontes, Montes Claros - MG
                    <br />
                    Sala 303, tercer piso, PPGMCS
                </>
            ),
        },
    };

    const t = translations[lang as keyof typeof translations];

    return (
        <main
            className="min-h-screen flex items-center justify-center px-4 py-10"
            style={{
                background:
                    "radial-gradient(circle at top, #1b4332 0%, #081c15 60%)",
            }}
        >
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/10 shadow-2xl rounded-3xl p-8 w-full max-w-md text-center">
                {/* FOTO */}
                <Image
                    src={profile.foto}
                    alt={profile.nome}
                    width={144}
                    height={144}
                    className="w-36 h-36 mx-auto rounded-full object-cover border-4 border-emerald-400 shadow-xl"
                />

                {/* NOME */}
                <h1 className="mt-5 text-3xl font-bold text-white">
                    {profile.nome}
                </h1>

                {/* SUBTÍTULO */}
                <p className="mt-2 text-emerald-200">
                    {t.subtitle}
                </p>

                {/* IDIOMAS */}
                <div className="flex justify-center gap-6 mt-5">
                    <button
                        onClick={() => setLang("pt")}
                        className="overflow-hidden rounded-lg border border-white/20 hover:scale-110 transition"
                    >
                        <Image
                            src="https://flagcdn.com/w40/br.png"
                            alt="Português"
                            width={40}
                            height={28}
                            className="w-10 h-7 object-cover cursor-pointer"
                        />
                    </button>

                    <button
                        onClick={() => setLang("en")}
                        className="overflow-hidden rounded-lg border border-white/20 hover:scale-110 transition"
                    >
                        <Image
                            src="https://flagcdn.com/w40/gb.png"
                            alt="English"
                            width={40}
                            height={28}
                            className="w-10 h-7 object-cover cursor-pointer"
                        />
                    </button>

                    <button
                        onClick={() => setLang("es")}
                        className="overflow-hidden rounded-lg border border-white/20 hover:scale-110 transition"
                    >
                        <Image
                            src="https://flagcdn.com/w40/es.png"
                            alt="Español"
                            width={40}
                            height={28}
                            className="w-10 h-7 object-cover cursor-pointer"
                        />
                    </button>
                </div>
                {profile.nome !== "OTMG" && (
                    <Link
                        href="/"
                        className="absolute top-4 left-4 hover:scale-110 transition"
                    >
                        <Image
                            src="/images/otmg.jpg"
                            alt="OTMG"
                            width={48}
                            height={48}
                            className="rounded-full border border-emerald-400"
                        />
                    </Link>
                )}
                {/* LINKS */}
                <div className="mt-8 space-y-4">
                    {/* LATTES */}
                    {profile.lattes && <a
                        href={profile.lattes}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full px-5 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-8 flex justify-center">
                            <Globe size={20} />
                        </div>

                        <span className="flex-1 text-center">
                            {t.lattes}
                        </span>

                        <div className="w-8"></div>
                    </a>}
                    {/* SITE */}
                    {profile.site && <a
                        href={profile.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full px-5 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-8 flex justify-center">
                            <Globe size={20} />
                        </div>

                        <span className="flex-1 text-center">
                            {t.site}
                        </span>

                        <div className="w-8"></div>
                    </a>}

                    {/* LINKEDIN */}
                    <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full px-5 py-4 rounded-2xl bg-emerald-700 hover:bg-emerald-600 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-8 flex justify-center">
                            <BriefcaseBusiness size={20} />
                        </div>

                        <span className="flex-1 text-center">
                            {t.linkedin}
                        </span>

                        <div className="w-8"></div>
                    </a>

                    {/* WHATSAPP */}
                    <a
                        href={profile.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full px-5 py-4 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-8 flex justify-center">
                            <MessageCircle size={20} />
                        </div>

                        <span className="flex-1 text-center">
                            {t.whatsapp}
                        </span>

                        <div className="w-8"></div>
                    </a>

                    {/* INSTAGRAM */}
                    <a
                        href={profile.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full px-5 py-4 rounded-2xl bg-teal-700 hover:bg-teal-600 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-8 flex justify-center">
                            <Camera size={20} />
                        </div>

                        <span className="flex-1 text-center">
                            {t.instagram}
                        </span>

                        <div className="w-8"></div>
                    </a>

                    {/* LOCALIZAÇÃO */}
                    <a
                        href="https://maps.app.goo.gl/HdPTMCxBNtRiwnd3A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full px-5 py-4 rounded-2xl bg-teal-700/40 hover:bg-teal-600/40 text-white font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-8 flex justify-center">
                            <MapPin size={20} />
                        </div>

                        <span className="flex-1 text-center text-sm">
                            {t.local}
                        </span>

                        <div className="w-8"></div>
                    </a>
                    {profile.projetos && (
                        <div className="mt-8">
                            <button
                                onClick={() =>
                                    setShowProjects(!showProjects)
                                }
                                className="w-full cursor-pointer flex items-center justify-center gap-2 border border-emerald-300 py-4 rounded-xl hover:scale-105 transition"
                            >
                                <FolderKanban
                                    size={20}
                                    className="text-emerald-300"
                                />

                                <span className="text-white font-semibold">
                                    {t.projectos}
                                </span>

                                <ChevronDown
                                    size={18}
                                    className={`text-white transition-transform ${showProjects ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {showProjects && (
                                <div className="mt-4 grid grid-cols-2 gap-3">
                                    {profile.projetos.map((projeto) => (
                                        <a
                                            key={projeto.nome}
                                            href={projeto.url}
                                            rel="noopener noreferrer"
                                            className="bg-white text-emerald-900 font-semibold py-4 rounded-xl hover:scale-105 transition"
                                        >
                                            {projeto.nome}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                    {profile.membros && (
                        <div className="mt-8">
                            <button
                                onClick={() => setShowTeam(!showTeam)}
                                className="w-full cursor-pointer flex items-center justify-center gap-2 border border-emerald-300 py-4 rounded-xl hover:scale-105 transition"
                            >
                                <Users
                                    size={20}
                                    className="text-emerald-300"
                                />
                                <span className="text-white font-semibold">
                                    {t.equipe}
                                </span>

                                <ChevronDown
                                    size={18}
                                    className={`text-white transition-transform ${showTeam ? "rotate-180" : ""
                                        }`}
                                />
                            </button>

                            {showTeam && (
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    {profile.membros.map((membro) => (
                                        <Link
                                            key={membro.slug}
                                            href={`/${membro.slug}`}
                                            className="flex flex-col items-center hover:scale-105 transition"
                                        >
                                            <Image
                                                src={membro.foto}
                                                alt={membro.nome}
                                                width={72}
                                                height={72}
                                                className="w-18 h-18 rounded-full object-cover border-2 border-emerald-400 shadow-lg"
                                            />

                                            <span className="mt-2 text-xs text-white text-center">
                                                {membro.nome}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* FOOTER */}
                <footer className="mt-8 text-sm text-emerald-200">
                    © {new Date().getFullYear()} OTMG
                </footer>
            </div>
        </main>
    );
}