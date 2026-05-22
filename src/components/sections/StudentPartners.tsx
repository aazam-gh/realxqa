import { homeContent } from '@/content/home'

export function StudentPartners() {
  return (
    <section className="bg-white px-5 pb-8 pt-2 sm:px-7 sm:pb-10 sm:pt-3">
      <div className="mx-auto max-w-[428px]">
        {/* <p className="text-center text-[11px] font-medium text-(--realx-muted)">
          {homeContent.partners.eyebrow}
        </p> */}
        <div className="grid grid-cols-3 items-center gap-4">
          {homeContent.partners.logos.map((logo) => (
            <div className="grid place-items-center" key={logo.src}>
              <img
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                loading="lazy"
                className="max-h-16 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
