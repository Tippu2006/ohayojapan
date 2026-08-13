import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Film, Sparkles, Radio, Video, Clapperboard, Play, X, Bell } from "lucide-react";
import { useState, useEffect } from "react";

const animeMovie = "/memories/anime_movie_screening.jpg";

export const Route = createFileRoute("/updates")({
  head: () => ({
    meta: [
      { title: "Official Releases & Updates — OHAYŌ JAPAN 2026" },
      {
        name: "description",
        content: "Official Date Launch Video, Teaser, Trailer Announcement, and Anime Movie Screening Highlights for OHAYŌ JAPAN 2026!",
      },
      { property: "og:title", content: "Official Releases & Updates — OHAYŌ JAPAN 2026" },
      { property: "og:description", content: "KL University × OHAYŌ JAPAN 2026" },
    ],
  }),
  component: UpdatesPage,
});

interface MediaVideo {
  id: string;
  badge: string;
  title: string;
  jpTitle: string;
  description: string;
  embedUrl: string;
  driveUrl: string;
  poster: string;
}

const mediaVideos: MediaVideo[] = [
  {
    id: "date-launch",
    badge: "OFFICIAL DATE LAUNCH",
    title: "OHAYŌ JAPAN 2026 Official Date Announcement",
    jpTitle: "公式開催日発表映像",
    description: "Watch the grand Date Launch ceremony unveiling the official dates, cultural exhibitions, and performance lineup for OHAYŌ JAPAN 2026!",
    embedUrl: "https://drive.google.com/file/d/1GvuS8hkP6-BuOvINrJNqxb75L5dpndm3/preview",
    driveUrl: "https://drive.google.com/file/d/1GvuS8hkP6-BuOvINrJNqxb75L5dpndm3/view?usp=drive_link",
    poster: "/memories/inauguration_wide.jpg",
  },
  {
    id: "teaser",
    badge: "OFFICIAL TEASER",
    title: "OHAYŌ JAPAN 2026 Official Teaser",
    jpTitle: "公式ティーザー",
    description: "Experience the vibrant spirit of Japanese culture, cosplay showcases, martial arts, fusion dances, and anime screening!",
    embedUrl: "https://drive.google.com/file/d/1Q1WtTXXXPuktsa9a528VDT0skqdHfEDW/preview",
    driveUrl: "https://drive.google.com/file/d/1Q1WtTXXXPuktsa9a528VDT0skqdHfEDW/view?usp=drive_link",
    poster: "/memories/team_finale.jpg",
  },
  {
    id: "glimpse-2k24",
    badge: "GLIMPSE OF 2K24",
    title: "OHAYŌ JAPAN 2k24 Highlights",
    jpTitle: "2k24 ハイライト映像",
    description: "Relive the unforgettable memories, language workshops, martial arts, tea ceremonies, and student celebrations from OHAYŌ JAPAN 2k24!",
    embedUrl: "https://drive.google.com/file/d/1PEwsyO8ZnXHDv_hkTEKPzE2WeOrdLjUn/preview",
    driveUrl: "https://drive.google.com/file/d/1PEwsyO8ZnXHDv_hkTEKPzE2WeOrdLjUn/view?usp=drive_link",
    poster: "/memories/guest_arrival.jpg",
  },
];

interface Movie {
  id: string;
  title: string;
  jpTitle: string;
  director: string;
  genre: string;
  description: string;
  image: string;
  trailerUrl: string;
}

const movies: Movie[] = [
  {
    id: "a-silent-voice",
    title: "A Silent Voice",
    jpTitle: "聲の形",
    director: "Naoko Yamada (Kyoto Animation)",
    genre: "Drama • Coming-of-Age • Emotional",
    description: "A grade school student with impaired hearing is bullied by a classmate. Years later, he sets off on a journey of redemption to make amends and heal old wounds.",
    image: "/movies/a_silent_voice.png",
    trailerUrl: "https://www.youtube.com/embed/cw8G3h0T2YQ",
  },
  {
    id: "weathering-with-you",
    title: "Weathering With You",
    jpTitle: "天気の子",
    director: "Makoto Shinkai (CoMix Wave Films)",
    genre: "Romance • Fantasy • Drama",
    description: "A high-school boy who runs away to Tokyo befriends a girl who appears to have the magical ability to manipulate the weather and bring sunshine to the city.",
    image: "/movies/weathering_with_you.jpg",
    trailerUrl: "https://www.youtube.com/embed/psZ1g9fMfeo",
  },
  {
    id: "i-want-to-eat-your-pancreas",
    title: "I Want to Eat Your Pancreas",
    jpTitle: "君の膵臓をたべたい",
    director: "Shin'ichirō Ushijima (Studio VOLN)",
    genre: "Romance • Drama • Slice of Life",
    description: "An aloof high school student discovers his popular classmate's secret terminal pancreatic illness, forming an unexpectedly deep bond during her final months.",
    image: "/movies/i_want_to_eat_your_pancreas.jpg",
    trailerUrl: "https://www.youtube.com/embed/MmoBvmJA9XI",
  },
  {
    id: "the-girl-who-leapt-through-time",
    title: "The Girl Who Leapt Through Time",
    jpTitle: "時をかける少女",
    director: "Mamoru Hosoda (Madhouse)",
    genre: "Sci-Fi • Time Travel • Romance",
    description: "A teenage girl gains the power to travel back in time and uses it for trivial desires, only to discover that her choices have unexpected consequences on those she cares about.",
    image: "/movies/the_girl_who_leapt_through_time.jpg",
    trailerUrl: "https://www.youtube.com/embed/eWDFz1Tkh1E",
  },
  {
    id: "the-tunnel-to-summer",
    title: "The Tunnel to Summer, the Exit of Goodbyes",
    jpTitle: "夏へのトンネル、さよならの出口",
    director: "Tomohisa Taguchi (CLAP)",
    genre: "Sci-Fi • Mystery • Romance",
    description: "Two high school students investigate the mysterious Urashima Tunnel, which promises your heart's desire in exchange for years of your life.",
    image: "/movies/the_tunnel_to_summer.jpg",
    trailerUrl: "https://www.youtube.com/embed/0T26w5g_k_M",
  },
  {
    id: "your-name",
    title: "Your Name",
    jpTitle: "君の名は。",
    director: "Makoto Shinkai",
    genre: "Romance • Fantasy • Drama",
    description: "Two strangers find themselves connected in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
    image: "/movies/your_name.png",
    trailerUrl: "https://www.youtube.com/embed/xU47nhruN-Q",
  },
  {
    id: "spirited-away",
    title: "Spirited Away",
    jpTitle: "千と千尋の神隠し",
    director: "Hayao Miyazaki (Studio Ghibli)",
    genre: "Fantasy • Masterpiece",
    description: "10-year-old Chihiro wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts.",
    image: "/movies/spirited_away.png",
    trailerUrl: "https://www.youtube.com/embed/ByXuk9QqQkk",
  },
  {
    id: "bubble",
    title: "Bubble",
    jpTitle: "バブル",
    director: "Tetsurō Araki (Wit Studio)",
    genre: "Sci-Fi • Parkour • Fantasy",
    description: "In an abandoned Tokyo overrun by gravity-defying bubbles, a gifted young man meets a mysterious girl with strange powers in a post-apocalyptic parkour adventure.",
    image: "/movies/bubble.png",
    trailerUrl: "https://www.youtube.com/embed/3Yp0c_p5VvY",
  },
];

function UpdatesPage() {
  const [selectedVideo, setSelectedVideo] = useState<MediaVideo | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedVideo(null);
        setSelectedMovie(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-24">
      {/* Page Header */}
      <Reveal className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-crimson/20 px-4 sm:px-5 py-1.5 sm:py-2 border border-gold/40 text-gold text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
          <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-gold animate-pulse" />
          OHAYŌ JAPAN LATEST ANNOUNCEMENTS
        </div>
        <h1 className="gold-text font-display text-3xl sm:text-5xl lg:text-6xl tracking-wide uppercase">
          Official Releases & Updates
        </h1>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-cream/70 max-w-2xl mx-auto font-medium leading-relaxed">
          Stay informed on official video releases, festival announcements, and our featured anime movie screening lineup!
        </p>
      </Reveal>

      {/* TOP MOST ANNOUNCEMENT BANNER — LATEST ANNOUNCEMENT */}
      <Reveal delay={100} className="mt-8 sm:mt-10">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl glass p-4 sm:p-6 lg:p-8 border-2 border-gold/60 shadow-[0_0_50px_rgba(255,215,0,0.35)] bg-gradient-to-r from-zinc-950 via-crimson/25 to-zinc-950">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-crimson/40 border-2 border-gold/60 shadow-lg text-gold">
              <Radio className="h-7 w-7 text-gold animate-pulse" />
            </div>
            <div className="space-y-1 flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-0.5 text-[10px] sm:text-xs font-bold text-gold border border-gold/40 tracking-widest uppercase mb-1">
                <Bell className="h-3 w-3 text-gold animate-bounce" />
                LATEST ANNOUNCEMENT
              </div>
              <h2 className="font-display text-lg sm:text-2xl font-extrabold text-cream gold-text uppercase">
                Trailer Launch in 1st Week of September!
              </h2>
              <p className="text-xs sm:text-sm text-cream/90 font-medium leading-relaxed">
                The official full festival trailer for OHAYŌ JAPAN 2026 will launch in the <span className="text-gold font-bold underline">1st week of September</span>. Get ready for more excitement!
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* OFFICIAL RELEASES & UPDATES — VIDEO GRID LAYOUT */}
      <section className="mt-10 sm:mt-14">
        <div className="flex items-center gap-2.5 mb-4 sm:mb-6">
          <Video className="h-5 w-5 text-gold animate-pulse" />
          <h2 className="font-display text-xl sm:text-2xl font-bold text-gold uppercase tracking-wider">
            OFFICIAL RELEASES & UPDATES
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent ml-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {mediaVideos.map((video, idx) => (
            <Reveal key={video.id} delay={idx * 120}>
              <div
                onClick={() => setSelectedVideo(video)}
                className="glass lift group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-gold/40 hover:border-gold p-3.5 sm:p-5 shadow-[0_0_35px_rgba(255,215,0,0.2)] hover:shadow-[0_0_55px_rgba(200,16,46,0.6)] transition-all duration-500 cursor-pointer bg-zinc-950/80"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-1 text-[10px] sm:text-xs font-bold text-gold border border-gold/40 uppercase tracking-widest">
                    <Sparkles className="h-3 w-3 text-gold" />
                    {video.badge}
                  </span>
                  <span className="text-[10px] sm:text-xs font-semibold text-gold/80 group-hover:text-gold uppercase tracking-wider flex items-center gap-1">
                    PLAY FULLSCREEN ↗
                  </span>
                </div>

                {/* Video Frame with Center Play Button */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-black border border-gold/30">
                  <img
                    src={video.poster}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Center Play Button */}
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="relative transition-transform duration-300 group-hover:scale-125">
                      {/* Glow ring */}
                      <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-gold/50 blur-md animate-pulse" />
                      {/* Play Icon Circle */}
                      <div className="relative flex h-14 w-14 sm:h-18 sm:w-18 items-center justify-center rounded-full bg-gradient-to-br from-gold via-amber-400 to-crimson text-black shadow-[0_0_35px_rgba(255,215,0,0.8)] border-2 border-white/90">
                        <Play className="h-7 w-7 sm:h-9 sm:w-9 text-black fill-black ml-1 drop-shadow-md" />
                      </div>
                    </div>
                  </div>

                  {/* Title overlay inside frame */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <h3 className="font-display text-sm sm:text-base font-bold text-cream drop-shadow-md line-clamp-1 group-hover:text-gold transition-colors">
                      {video.title}
                    </h3>
                    <p className="font-jp text-[10px] sm:text-xs text-gold/90 font-medium">
                      {video.jpTitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-3.5">
                  <p className="text-xs text-cream/70 line-clamp-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED EVENT ANNOUNCEMENT BANNER */}
      <Reveal delay={200} className="mt-12 sm:mt-16">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl glass p-4 sm:p-8 lg:p-10 border border-gold/40 shadow-[0_0_50px_rgba(200,16,46,0.3)]">
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
            <div className="shrink-0 rounded-xl sm:rounded-2xl overflow-hidden border border-gold/30 w-full md:w-64 aspect-[16/10]">
              <img
                src={animeMovie}
                alt="Anime Movie Screening"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2 sm:space-y-3 text-left flex-1">
              <div className="flex items-center gap-2">
                <Radio className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-crimson animate-pulse" />
                <span className="text-[10px] sm:text-xs font-bold text-gold tracking-widest uppercase">
                  Featured Event Announcement
                </span>
              </div>
              <h2 className="font-display text-xl sm:text-2xl lg:text-3xl text-cream font-bold">
                Official Anime Movie Screening
              </h2>
              <p className="text-xs sm:text-sm text-cream/75 leading-relaxed">
                As part of OHAYŌ JAPAN 2026, we are hosting an official anime movie screening at KL University campus. Explore the featured titles below!
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ANIME MOVIE SCREENING SECTION */}
      <section className="mt-12 sm:mt-16">
        <Reveal className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-crimson font-jp text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em]">
            <Film className="h-3.5 w-3.5 sm:h-4 sm:w-4" /> 公式アニメ映画上映
          </div>
          <h2 className="mt-2 font-display text-2xl sm:text-4xl gold-text tracking-wide uppercase">
            OFFICIAL ANIME MOVIE SCREENING
          </h2>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-cream/60 font-medium">
            Featured cinematic masterpieces scheduled for screening at OHAYŌ JAPAN 2026
          </p>
        </Reveal>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {movies.map((movie, index) => (
            <Reveal key={movie.id} delay={index * 80}>
              <div
                onClick={() => setSelectedMovie(movie)}
                className="glass lift group relative flex h-full flex-col overflow-hidden rounded-2xl border-2 border-gold/40 hover:border-gold p-3.5 sm:p-5 shadow-[0_0_25px_rgba(255,215,0,0.15)] hover:shadow-[0_0_45px_rgba(200,16,46,0.5)] transition-all duration-500 bg-zinc-950/90 cursor-pointer"
              >
                {/* MOVIE LOGO / POSTER FRAME — Distinct framed box positioned directly above Movie Name */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border-2 border-gold/60 bg-black shadow-[0_0_20px_rgba(255,215,0,0.3)] group-hover:border-gold mb-3.5">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />

                  {/* Center Play Button on hover */}
                  <div className="absolute inset-0 grid place-items-center opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="relative transition-transform duration-300 group-hover:scale-125">
                      <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-gold/50 blur-md animate-pulse" />
                      <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold via-amber-400 to-crimson text-black shadow-[0_0_30px_rgba(255,215,0,0.8)] border-2 border-white/90">
                        <Play className="h-6 w-6 sm:h-8 sm:w-8 text-black fill-black ml-1 drop-shadow-md" />
                      </div>
                    </div>
                  </div>

                  <span className="absolute top-2.5 left-2.5 rounded-full bg-black/85 px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-gold border border-gold/50 backdrop-blur-md uppercase tracking-wider">
                    {movie.genre}
                  </span>
                  <span className="absolute bottom-2.5 right-2.5 rounded-full bg-crimson/90 px-2 py-0.5 text-[9px] sm:text-[10px] font-bold text-cream border border-gold/40 backdrop-blur-md flex items-center gap-1 shadow-md">
                    <Play className="h-3 w-3 text-gold fill-gold" /> TRAILER ↗
                  </span>
                </div>

                {/* MOVIE TITLE & DETAILS — Positioned Directly Below the Picture Frame */}
                <div className="flex flex-1 flex-col">
                  <div className="border-b border-gold/20 pb-2.5 mb-2.5">
                    <h3 className="font-display text-base sm:text-lg font-extrabold text-cream gold-text group-hover:text-gold transition-colors leading-snug">
                      {movie.title}
                    </h3>
                    <p className="font-jp text-xs text-gold/90 font-semibold tracking-wide mt-0.5">
                      {movie.jpTitle}
                    </p>
                  </div>

                  <p className="text-xs text-cream/70 flex-1 line-clamp-3 leading-relaxed">
                    {movie.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-gold/20 flex items-center justify-between">
                    <p className="text-[11px] text-cream/60 italic">
                      Director: <span className="text-gold/90 font-semibold">{movie.director}</span>
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

      {/* FULLSCREEN AUTO-PLAYING VIDEO LIGHTBOX MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/95 backdrop-blur-xl p-3 sm:p-6 animate-fade-in cursor-pointer"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="glass relative w-full max-w-5xl overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-gold p-3 sm:p-6 shadow-[0_0_70px_rgba(255,215,0,0.5)] bg-zinc-950/95 cursor-default flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Header Bar */}
            <div className="flex items-center justify-between gap-4 mb-3 sm:mb-4 pr-10">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-0.5 text-[10px] sm:text-xs font-bold text-gold border border-gold/40 uppercase tracking-widest mb-1">
                  <Sparkles className="h-3 w-3 text-gold animate-pulse" />
                  {selectedVideo.badge}
                </div>
                <h3 className="font-display text-base sm:text-2xl font-bold text-cream gold-text uppercase">
                  {selectedVideo.title}
                </h3>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="absolute right-3 top-3 sm:right-4 sm:top-4 z-20 grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-full bg-crimson text-cream hover:bg-gold hover:text-black transition-all border border-gold/40 shadow-xl cursor-pointer"
                aria-label="Close full screen video"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* Fullscreen Video iFrame Container with Autoplay */}
            <div className="relative aspect-[16/9] w-full min-h-[250px] sm:min-h-[440px] max-h-[78vh] overflow-hidden rounded-xl sm:rounded-2xl border border-gold/40 bg-black shadow-2xl">
              <iframe
                src={`${selectedVideo.embedUrl}?autoplay=1`}
                title={selectedVideo.title}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>

            {/* Direct Google Drive Link Option */}
            <div className="mt-3 flex items-center justify-between text-xs text-cream/70">
              <p className="hidden sm:block font-jp text-gold/80">{selectedVideo.jpTitle}</p>
              <a
                href={selectedVideo.driveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gold hover:underline font-bold text-[11px] sm:text-xs ml-auto"
              >
                Open in Google Drive ↗
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FULLSCREEN MOVIE TRAILER LIGHTBOX MODAL */}
      {selectedMovie && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/95 backdrop-blur-xl p-3 sm:p-6 animate-fade-in cursor-pointer"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            className="glass relative w-full max-w-5xl overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-gold p-4 sm:p-6 shadow-[0_0_70px_rgba(255,215,0,0.5)] bg-zinc-950/95 cursor-default flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 mb-3 sm:mb-4 pr-10">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-gold/20 px-3 py-0.5 text-[10px] sm:text-xs font-bold text-gold border border-gold/40 uppercase tracking-widest mb-1">
                  <Film className="h-3 w-3 text-gold" />
                  {selectedMovie.genre} • OFFICIAL TRAILER
                </div>
                <h3 className="font-display text-xl sm:text-3xl font-extrabold text-cream gold-text uppercase">
                  {selectedMovie.title}
                </h3>
                <p className="font-jp text-xs sm:text-sm text-gold/90 font-medium">
                  {selectedMovie.jpTitle} — Directed by {selectedMovie.director}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedMovie(null)}
                className="absolute right-3 top-3 sm:right-4 sm:top-4 z-20 grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-full bg-crimson text-cream hover:bg-gold hover:text-black transition-all border border-gold/40 shadow-xl cursor-pointer"
                aria-label="Close trailer view"
              >
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>

            {/* FULLSCREEN YOUTUBE TRAILER IFRAME WITH AUTOPLAY */}
            <div className="relative aspect-[16/9] w-full min-h-[250px] sm:min-h-[440px] max-h-[78vh] overflow-hidden rounded-xl sm:rounded-2xl border-2 border-gold/50 bg-black shadow-2xl">
              <iframe
                src={`${selectedMovie.trailerUrl}?autoplay=1&rel=0&enablejsapi=1`}
                title={`${selectedMovie.title} Official Trailer`}
                className="absolute inset-0 h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
              />
            </div>

            <p className="mt-4 text-xs sm:text-sm text-cream/80 leading-relaxed font-medium">
              {selectedMovie.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
