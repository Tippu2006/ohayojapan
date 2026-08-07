import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Film, Sparkles, Radio, Video, Clapperboard } from "lucide-react";
const animeMovie = "/memories/anime_movie_screening.jpg";

export const Route = createFileRoute("/updates")({
  head: () => ({
    meta: [
      { title: "New Updates & Movie Screening — OHAYŌ JAPAN 2026" },
      {
        name: "description",
        content: "Official Teaser Trailer and Anime Movie Screening Highlights for OHAYŌ JAPAN 2026!",
      },
      { property: "og:title", content: "New Updates & Movie Screening — OHAYŌ JAPAN 2026" },
      { property: "og:description", content: "KL University × OHAYŌ JAPAN 2026" },
    ],
  }),
  component: UpdatesPage,
});

interface Movie {
  id: string;
  title: string;
  jpTitle: string;
  director: string;
  genre: string;
  description: string;
  image: string;
}

const movies: Movie[] = [
  {
    id: "your-name",
    title: "Your Name",
    jpTitle: "君の名は。",
    director: "Makoto Shinkai",
    genre: "Romance • Fantasy • Drama",
    description: "Two strangers find themselves connected in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "suzume",
    title: "Suzume",
    jpTitle: "すずめの戸締まり",
    director: "Makoto Shinkai",
    genre: "Adventure • Fantasy",
    description: "A modern action-adventure road story where a 17-year-old girl named Suzume helps a mysterious young man close doors from the other side that are releasing disasters upon Japan.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "spirited-away",
    title: "Spirited Away",
    jpTitle: "千と千尋の神隠し",
    director: "Hayao Miyazaki (Studio Ghibli)",
    genre: "Fantasy • Masterpiece",
    description: "10-year-old Chihiro wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts.",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "demon-slayer",
    title: "Demon Slayer: Mugen Train",
    jpTitle: "劇場版「鬼滅の刃」無限列車編",
    director: "Haruo Sotozaki (ufotable)",
    genre: "Supernatural • Action",
    description: "Tanjiro and the Flame Hashira Kyojuro Rengoku board the Infinity Train to investigate a series of mysterious disappearances.",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "jujutsu-kaisen-0",
    title: "Jujutsu Kaisen 0",
    jpTitle: "劇場版 呪術廻戦 0",
    director: "Sunghoo Park (MAPPA)",
    genre: "Dark Fantasy • Action",
    description: "Yuta Okkotsu gains control of a powerful cursed spirit and enrolls in the Tokyo Prefectural Jujutsu High School.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  },
];

function UpdatesPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 pt-28 pb-20">
      {/* Header */}
      <Reveal className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-crimson/20 px-5 py-2 border border-gold/40 text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">
          <Sparkles className="h-4 w-4 text-gold animate-pulse" />
          OHAYŌ JAPAN LATEST ANNOUNCEMENTS
        </div>
        <h1 className="gold-text font-display text-4xl sm:text-6xl tracking-wide uppercase">
          New Updates & Media
        </h1>
        <p className="mt-3 text-sm text-cream/70 max-w-2xl mx-auto font-medium">
          Watch the official festival trailer, stay informed on stage announcements, and explore our featured anime movie lineup!
        </p>
      </Reveal>

      {/* FIRST: Official Festival Video Trailer Section */}
      <Reveal delay={100} className="mt-12">
        <div className="relative overflow-hidden rounded-3xl glass p-6 sm:p-10 border border-gold/40 shadow-[0_0_60px_rgba(200,16,46,0.35)] backdrop-blur-xl">
          <div className="flex items-center gap-2 mb-3">
            <Video className="h-5 w-5 text-gold animate-pulse" />
            <span className="text-xs font-bold text-gold tracking-[0.3em] uppercase">
              OFFICIAL FESTIVAL TRAILER
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl text-cream font-extrabold gold-text uppercase mb-6">
            OHAYŌ JAPAN 2026 Official Teaser
          </h2>

          {/* Embedded Video Player */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-gold/40 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-zinc-950">
            <iframe
              src="https://drive.google.com/file/d/1Q1WtTXXXPuktsa9a528VDT0skqdHfEDW/preview"
              title="OHAYŌ JAPAN Official Video Trailer"
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      </Reveal>

      {/* SECOND: Featured Announcement Banner */}
      <Reveal delay={150} className="mt-12">
        <div className="relative overflow-hidden rounded-3xl glass p-6 sm:p-10 border border-gold/40 shadow-[0_0_50px_rgba(200,16,46,0.3)]">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="shrink-0 rounded-2xl overflow-hidden border border-gold/30 w-full md:w-64 aspect-[16/10]">
              <img
                src={animeMovie}
                alt="Anime Movie Screening"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3 text-left flex-1">
              <div className="flex items-center gap-2">
                <Radio className="h-4 w-4 text-crimson animate-pulse" />
                <span className="text-xs font-bold text-gold tracking-widest uppercase">
                  Featured Event Announcement
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl text-cream font-bold">
                Official Anime Movie Screening
              </h2>
              <p className="text-xs sm:text-sm text-cream/75 leading-relaxed">
                As part of OHAYŌ JAPAN 2026, we are hosting an official anime movie screening at KL University campus. Explore the featured titles below!
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* THIRD: Official Anime Movie Screening Section */}
      <section className="mt-16">
        <Reveal className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-crimson font-jp text-sm tracking-[0.4em]">
            <Film className="h-4 w-4" /> 公式アニメ映画上映
          </div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl gold-text tracking-wide uppercase">
            OFFICIAL ANIME MOVIE SCREENING
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-cream/60 font-medium">
            Featured cinematic masterpieces scheduled for screening at OHAYŌ JAPAN 2026
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie, index) => (
            <Reveal key={movie.id} delay={index * 80}>
              <div className="glass lift group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gold/30 hover:border-gold/60 transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-black/70 px-3 py-1 text-[10px] font-bold text-gold border border-gold/40 backdrop-blur-md">
                    {movie.genre}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-display text-xl font-bold text-cream">{movie.title}</h3>
                      <p className="font-jp text-xs text-gold/90 font-medium">{movie.jpTitle}</p>
                    </div>
                  </div>

                  <p className="mt-2 text-xs text-cream/65 flex-1 line-clamp-3 leading-relaxed">
                    {movie.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-gold/20 flex items-center justify-between">
                    <p className="text-[11px] text-cream/50 italic">
                      Director: <span className="text-cream/80">{movie.director}</span>
                    </p>
                    <span className="inline-flex items-center gap-1 rounded-md bg-gold/10 px-2.5 py-1 text-[10px] font-bold text-gold border border-gold/30">
                      <Clapperboard className="h-3 w-3" /> FEATURED
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
