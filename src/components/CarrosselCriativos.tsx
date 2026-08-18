import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { criativos } from "@/data/ofertas";

export function CarrosselCriativos() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative">
      <Carousel setApi={setApi} opts={{ loop: true, align: "center" }} className="w-full">
        <CarouselContent>
          {criativos.map((c) => (
            <CarouselItem key={c.url} className="basis-[86%] sm:basis-[60%] lg:basis-[42%]">
              <div className="overflow-hidden border-2 border-border bg-card">
                <img
                  src={c.url}
                  alt={c.alt}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-2 size-11 border-none bg-brand text-brand-foreground hover:bg-brand hover:brightness-110 sm:-left-5" />
        <CarouselNext className="-right-2 size-11 border-none bg-brand text-brand-foreground hover:bg-brand hover:brightness-110 sm:-right-5" />
      </Carousel>

      <div className="mt-6 flex items-center justify-center gap-2">
        {criativos.map((c, i) => (
          <button
            key={c.url}
            type="button"
            aria-label={`Ir para o criativo ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={
              i === current
                ? "h-1.5 w-10 bg-brand transition-all"
                : "h-1.5 w-4 bg-muted transition-all hover:bg-muted-foreground"
            }
          />
        ))}
      </div>
    </div>
  );
}
