import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Play, X } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

// ---------------------------------------------------------------------------
// 👇 JUST EDIT THIS LIST — paste any public YouTube link (any format works).
// No backend, no API key. Add a title yourself since we're not calling
// the YouTube API to fetch it automatically.
// ---------------------------------------------------------------------------
const VIDEO_LINKS = [
  {
    url: "https://www.youtube.com/shorts/UVfFySJDLdk",
    title: "Don’t ignore your Low back pain ⚡️#lowbackpain #shorts",
  },
  {
    url: "https://www.youtube.com/shorts/sWybx5mE_r0",
    title: "Rhomboid pain relief stretch 👍🏻#rhomboids #upperbackpainrelief",
  },
  {
    url: "https://www.youtube.com/shorts/x154m7ju7qg",
    title: "Unlock Neck tension ✅ #neckpain #necktension #viral #stretch #youtubeshorts #physiotherapy",
  },
    {
    url: "https://www.youtube.com/shorts/M7U1S5wxzOI",
    title: "Sciatica pain relief stretch 💯 #relief #backpain #sciatica #youtubeshorts #shorts #foryou #viral",
  },
    {
    url: "https://www.youtube.com/shorts/7EDCkUSCGTA",
    title: "Diabetes control karne ke liye best exercises!✅#diabetes #sugar #glucosemanagement #trending",
  },
    {
    url: "https://www.youtube.com/shorts/izNXKNDrusk",
    title: "Correct your posture and look taller✅ #posturefix #posturecorrection #physiotherapy #viral #shorts",
  },
];

// ---------------------------------------------------------------------------
// Extracts the 11-character video ID from any common YouTube URL shape:
// - https://www.youtube.com/watch?v=ID
// - https://youtu.be/ID
// - https://www.youtube.com/embed/ID
// - https://www.youtube.com/shorts/ID
// ---------------------------------------------------------------------------
function extractVideoId(url) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1);
    }

    if (parsed.pathname.startsWith("/embed/")) {
      return parsed.pathname.split("/embed/")[1];
    }

    if (parsed.pathname.startsWith("/shorts/")) {
      return parsed.pathname.split("/shorts/")[1];
    }

    return parsed.searchParams.get("v");
  } catch {
    return null; // invalid URL — skipped later
  }
}

// Free thumbnail — no API key required for any public video.
function thumbnailFor(videoId) {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

// ---------------------------------------------------------------------------
// Single video card
// ---------------------------------------------------------------------------
function VideoCard({ video, onPlay }) {
  return (
    <motion.button
      type="button"
      onClick={() => onPlay(video)}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group block w-full text-left rounded-2xl overflow-hidden bg-[var(--surface)]
                 border border-black/5 dark:border-white/5 shadow-sm hover:shadow-xl
                 hover:shadow-[var(--accent)]/10 transition-shadow duration-300"
    >
      <div className="relative aspect-video overflow-hidden bg-black">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500
                     group-hover:scale-105"
        />
        <div
          className="absolute inset-0 flex items-center justify-center
                     bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span
            className="flex h-14 w-14 items-center justify-center rounded-full
                       bg-[var(--accent)] text-white shadow-lg
                       scale-90 group-hover:scale-100 transition-transform duration-300"
          >
            <Play className="h-6 w-6 translate-x-[1px]" fill="currentColor" />
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="line-clamp-2 font-semibold text-[var(--text)] leading-snug">
          {video.title}
        </h3>
      </div>
    </motion.button>
  );
}

// ---------------------------------------------------------------------------
// Lightbox modal — iframe only mounts once a video is clicked
// ---------------------------------------------------------------------------
function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-black shadow-2xl"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close video"
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center
                       rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerate-compute; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ---------------------------------------------------------------------------
// Main section — pure frontend, no fetch, no backend, no API key
// ---------------------------------------------------------------------------
export default function YoutubeContent() {
  const [activeVideo, setActiveVideo] = useState(null);

  // Parse the hardcoded links once, skip anything malformed.
  const videos = useMemo(() => {
    return VIDEO_LINKS.map(({ url, title }) => {
      const videoId = extractVideoId(url);
      if (!videoId) return null;
      return {
        videoId,
        title,
        thumbnailUrl: thumbnailFor(videoId),
      };
    }).filter(Boolean);
  }, []);

  const handlePlay = useCallback((video) => setActiveVideo(video), []);
  const handleClose = useCallback(() => setActiveVideo(null), []);

  return (
    <section
      id="videos"
      className="relative px-6 py-20 md:py-28 bg-[var(--bg)] transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14 text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
            Patient Education
          </span>
          <h2 className="mt-2 text-3xl md:text-5xl font-bold text-[var(--text)]">
            Watch &amp; Learn
          </h2>
          <p className="mt-3 text-[var(--text)]/70 max-w-xl mx-auto">
            Exercise demos, recovery tips, and clinic updates.
          </p>
        </motion.div>

        {videos.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <Swiper
              modules={[Autoplay, Navigation]}
              spaceBetween={24}
              slidesPerView={1.1}
              navigation
              autoplay={{ delay: 4500, disableOnInteraction: true }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
              }}
              className="!pb-2"
            >
              {videos.map((video, i) => (
                <SwiperSlide key={`${video.videoId}-${i}`}>
                  <VideoCard video={video} onPlay={handlePlay} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        ) : (
          <p className="text-center text-[var(--text)]/60 py-16">
            No videos added yet — paste some links into VIDEO_LINKS.
          </p>
        )}
      </div>

      <VideoModal video={activeVideo} onClose={handleClose} />
    </section>
  );
}