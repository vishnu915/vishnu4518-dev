import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Quote } from "lucide-react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { TESTIMONIALS } from "@/constants/portfolio";
import { SectionHeading } from "@/components/fx/reveal";
import { useHydrated } from "@/hooks/use-hydrated";

function Card({ item }: { item: (typeof TESTIMONIALS)[number] }) {
  return (
    <figure className="glass glow-border h-full rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_90px_-30px_var(--glow)]">
      <Quote size={26} className="text-primary" />
      <blockquote className="mt-5 text-base leading-relaxed text-pretty text-muted-foreground">
        “{item.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          className="grid h-11 w-11 place-items-center rounded-full text-sm font-semibold text-primary-foreground"
          style={{ background: "var(--gradient-brand)" }}
        >
          {item.name.charAt(0)}
        </span>
        <span>
          <span className="block text-sm font-semibold">{item.name}</span>
          <span className="block text-xs text-muted-foreground">{item.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const hydrated = useHydrated();

  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Testimonials"
          title="What teams say"
          subtitle="Feedback from the engineers and product leaders I've built alongside."
        />

        {hydrated ? (
          <Swiper
            modules={[Autoplay, EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slidesPerView={1.1}
            spaceBetween={24}
            autoplay={{ delay: 4200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 140,
              modifier: 1.6,
              slideShadows: false,
            }}
            breakpoints={{ 768: { slidesPerView: 2.1 }, 1180: { slidesPerView: 2.6 } }}
            className="!pb-14"
          >
            {TESTIMONIALS.map((item) => (
              <SwiperSlide key={item.name} className="h-auto">
                <Card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {TESTIMONIALS.slice(0, 2).map((item) => (
              <Card key={item.name} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
