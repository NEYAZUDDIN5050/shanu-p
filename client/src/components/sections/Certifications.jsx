import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { useMemo, useState, useCallback } from 'react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { fallbackCertifications } from '../../data/fallbackCertifications';
import Lightbox from '../ui/Lightbox';

import 'swiper/css';

function CertificationCard({ item, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className="group flex h-full w-[220px] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-sm transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[var(--shadow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:w-[260px]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-elevated">
        <img
          src={item.imageUrl}
          alt={item.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/20 group-hover:opacity-100">
          <span className="rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-text">
            View full size
          </span>
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="line-clamp-2 font-heading text-sm font-semibold text-text">{item.title}</p>
        {item.issuer && (
          <p className="mt-1 line-clamp-1 text-xs text-text-muted">{item.issuer}</p>
        )}
      </div>
    </button>
  );
}

export default function Certifications() {
  const [lightboxItem, setLightboxItem] = useState(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['certifications'],
    // queryFn: fetchCertifications,
  });

  const items = useMemo(() => {
    if (data?.length) return data;
    if (isError || (!isLoading && !data?.length)) return fallbackCertifications;
    return [];
  }, [data, isError, isLoading]);

  const loopItems = useMemo(
    () => (items.length < 8 ? [...items, ...items, ...items] : items),
    [items]
  );

  return (
    <section
      id="certifications"
      className="scroll-mt-20 border-b border-border px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="mb-3 inline-block rounded-full bg-surface-elevated px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            Credentials
          </span>
          <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">
            Certifications &amp; qualifications
          </h2>
          <p className="mt-4 text-text-muted">
            Recognized training and credentials that uphold the highest standards of
            physiotherapy care. Hover to pause — click any badge for full view.
          </p>
       
        </motion.div>

        {isLoading ? (
          <div className="flex gap-4 overflow-hidden">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="h-64 w-[260px] shrink-0 animate-pulse rounded-2xl bg-surface-elevated"
              />
            ))}
          </div>
        ) : (
          <div className="cert-slider-mask relative -mx-4 px-4 sm:-mx-6 sm:px-6">
            <Swiper
              modules={[Autoplay, FreeMode]}
              slidesPerView="auto"
              spaceBetween={16}
              loop
              freeMode={{ enabled: true, momentum: false }}
              speed={8000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              className="certifications-swiper py-2"
            >
              {loopItems.map((item, index) => (
                <SwiperSlide key={`${item._id}-${index}`} className="!w-auto">
                  <CertificationCard item={item} onOpen={setLightboxItem} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>

      <Lightbox
        open={Boolean(lightboxItem)}
        onClose={() => setLightboxItem(null)}
        imageUrl={lightboxItem?.imageUrl}
        title={lightboxItem?.title}
        subtitle={lightboxItem?.issuer}
      />
    </section>
  );
}
