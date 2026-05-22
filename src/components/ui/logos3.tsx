"use client";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "My Stack",
  logos = [
    {
      id: "logo-ts",
      description: "TypeScript",
      image: "https://cdn.simpleicons.org/typescript/3178C6",
      className: "h-6 w-auto",
    },
    {
      id: "logo-js",
      description: "JavaScript",
      image: "https://cdn.simpleicons.org/javascript/F7DF1E",
      className: "h-6 w-auto",
    },
    {
      id: "logo-python",
      description: "Python",
      image: "https://cdn.simpleicons.org/python/3776AB",
      className: "h-6 w-auto",
    },
    {
      id: "logo-postgres",
      description: "Postgres",
      image: "https://cdn.simpleicons.org/postgresql/4169E1",
      className: "h-6 w-auto",
    },
    {
      id: "logo-prisma",
      description: "Prisma",
      image: "https://cdn.simpleicons.org/prisma/2D3748",
      className: "h-6 w-auto",
    },
    {
      id: "logo-nextjs",
      description: "NextJS",
      image: "https://cdn.simpleicons.org/nextdotjs/203022",
      className: "h-6 w-auto",
    },
    {
      id: "logo-tailwind",
      description: "Tailwind",
      image: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
      className: "h-6 w-auto",
    }
  ],
}: Logos3Props) => {
  return (
    <section className="py-20 w-full relative z-20 bg-bg-sand overflow-hidden">
      <div className="w-full flex flex-col items-center text-center">
        <h3 className="mb-10 text-xs font-semibold uppercase tracking-[0.3em] text-brand-green/60 select-none">
          {heading}
        </h3>
        
        {/* Continuous looping hardware-accelerated CSS marquee wrapper */}
        <div className="marquee-container w-full max-w-5xl mx-auto">
          <div className="marquee-track flex gap-4 pr-4">
            {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
              <div 
                key={`${logo.id}-${index}`} 
                className="flex shrink-0 items-center justify-center gap-3 border border-brand-green/10 bg-[#F1EFEA]/40 backdrop-blur-md px-6 py-3 rounded-full transform hover:scale-105 hover:border-brand-green/20 hover:bg-[#F1EFEA]/80 transition-all duration-300 select-none shadow-sm"
              >
                <img
                  src={logo.image}
                  alt={logo.description}
                  className={logo.className}
                  loading="lazy"
                />
                <span className="font-sans text-[11px] font-bold text-brand-green tracking-[0.15em] uppercase">
                  {logo.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
export type { Logo, Logos3Props };
