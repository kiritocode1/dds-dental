import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const PHONE_DISPLAY = "+91 96730 04407";
const PHONE_HREF = "tel:+919673004407";
const WHATSAPP_HREF = "https://wa.me/919673004407";
const MAPS_HREF = "https://maps.app.goo.gl/ChYfkqan8tW9Thmf6";
const MAPS_EMBED =
  "https://www.google.com/maps?q=401+Eden+Hall+Model+Colony+Shivaji+Nagar+Pune+411016&output=embed";
const EMAIL = "dr.pritimunde@gmail.com";
const ADDRESS_LINES = [
  "401, Eden Hall",
  "Model Colony, Shivaji Nagar",
  "Pune, Maharashtra 411016",
];

const services = [
  {
    name: "General Dentistry",
    body:
      "Routine examinations, hygiene, fillings and the everyday care that keeps teeth quietly healthy for years.",
  },
  {
    name: "Dental Aesthetics",
    body:
      "Veneers, whitening and full-mouth smile design, planned digitally and finished by hand.",
  },
  {
    name: "Implantology",
    body:
      "Single and full-arch implants placed with CBCT planning and, where suitable, same-day restorations.",
  },
  {
    name: "Micro Surgery",
    body:
      "Microscope-enhanced endodontics and minimally invasive procedures, for predictable results with less tissue disturbed.",
  },
  {
    name: "Dental Prosthetics",
    body:
      "CAD/CAM crowns, bridges and prostheses, scanned in-house with 3-Shape and milled to fit precisely.",
  },
  {
    name: "Dental Surgery",
    body:
      "Extractions, bone grafting and surgical care performed under strict sterilisation and modern protocols.",
  },
];

const careNotes = [
  {
    src: "/doctor/brushing-explaination.mp4",
    title: "How to brush, properly.",
    caption:
      "A short demonstration of the angle, the pressure and the order most people get wrong.",
  },
  {
    src: "/doctor/rinsing-teeth-crevies.mp4",
    title: "Rinsing the places brushing misses.",
    caption:
      "What to do after eating, when a brush isn’t to hand, to keep the crevices clean.",
  },
  {
    src: "/doctor/doctor-recommendations.mp4",
    title: "A few small recommendations.",
    caption:
      "Habits Dr. Munde mentions to most patients, the ones that actually matter.",
  },
];

const galleryImages = [
  { src: "/doctor/gallery-2.jpeg", alt: "Dental treatment room interior at Dentsspa Dental Studio", span: "tall" },
  { src: "/doctor/gallery-3.jpeg", alt: "Patient consultation with Dr. Priti Munde", span: "wide" },
  { src: "/doctor/gallery-4.jpeg", alt: "Clinical examination using modern dental equipment", span: "tall" },
  { src: "/doctor/gallery-5.jpeg", alt: "Digital workflow station with intraoral scanning", span: "wide" },
  { src: "/doctor/gallery-1.jpeg", alt: "Dental procedure underway in the studio", span: "tall" },
  { src: "/doctor/gallery-6.jpeg", alt: "Doctor and team at Dentsspa Dental Studio", span: "wide" },
];

const SITE_URL = "https://dentsspa.in";

const doctorPerson = {
  "@type": "Person",
  "@id": `${SITE_URL}/#dr-priti-munde`,
  name: "Dr. Priti Munde",
  honorificPrefix: "Dr.",
  jobTitle: "Cosmetic Dentist & Implantologist",
  description:
    "Founder & Director of Dentsspa Dental Studio, Pune. Cosmetic dentist and implantologist with 17 years of practice; patients from 28 countries.",
  image: `${SITE_URL}/doctor/1.jpeg`,
  url: SITE_URL,
  worksFor: { "@id": `${SITE_URL}/#clinic` },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Maharashtra University of Health Sciences",
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name: "BDS",
      recognizedBy: {
        "@type": "Organization",
        name: "Maharashtra University of Health Sciences",
      },
      identifier: "A-17135",
    },
  ],
  knowsAbout: [
    "Cosmetic Dentistry",
    "Dental Implants",
    "Digital Smile Design",
    "Endodontics",
    "Prosthodontics",
    "Invisalign",
  ],
  sameAs: ["https://www.facebook.com/DentsspaFirstDentalSpa"],
};

const clinicEntity = {
  "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
  "@id": `${SITE_URL}/#clinic`,
  name: "Dentsspa Dental Studio",
  alternateName: "First Dental Spa Clinic",
  slogan: "First Dental Spa Clinic",
  description:
    "Dental clinic in Model Colony, Shivaji Nagar, Pune, led by Dr. Priti Munde, BDS. Cosmetic dentistry, implants, digital smile design and general dental care since 2011.",
  url: SITE_URL,
  logo: `${SITE_URL}/Logo.png`,
  image: [
    `${SITE_URL}/doctor/1.jpeg`,
    `${SITE_URL}/doctor/17.jpeg`,
    `${SITE_URL}/doctor/gallery-2.jpeg`,
    `${SITE_URL}/doctor/gallery-3.jpeg`,
  ],
  telephone: "+919673004407",
  email: EMAIL,
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Debit Card, UPI",
  foundingDate: "2011",
  founder: doctorPerson,
  employee: doctorPerson,
  address: {
    "@type": "PostalAddress",
    streetAddress: "401, Eden Hall, Model Colony",
    addressLocality: "Shivaji Nagar",
    addressRegion: "Maharashtra",
    postalCode: "411016",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 18.5345, longitude: 73.8389 },
  areaServed: [
    { "@type": "City", name: "Pune" },
    { "@type": "AdministrativeArea", name: "Maharashtra" },
  ],
  hasMap: MAPS_HREF,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  medicalSpecialty: [
    "CosmeticDentistry",
    "Endodontic",
    "Prosthodontics",
    "OralAndMaxillofacialSurgery",
  ],
  availableService: [
    { "@type": "MedicalProcedure", name: "General Dentistry" },
    { "@type": "MedicalProcedure", name: "Dental Aesthetics & Veneers" },
    { "@type": "MedicalProcedure", name: "Dental Implants" },
    { "@type": "MedicalProcedure", name: "Microscope-enhanced Endodontics" },
    { "@type": "MedicalProcedure", name: "Dental Prosthetics" },
    { "@type": "MedicalProcedure", name: "Dental Surgery" },
    { "@type": "MedicalProcedure", name: "Invisalign Clear Aligners" },
    { "@type": "MedicalProcedure", name: "Digital Smile Design" },
  ],
  sameAs: ["https://www.facebook.com/DentsspaFirstDentalSpa"],
};

const websiteEntity = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Dentsspa Dental Studio",
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#clinic` },
};

const breadcrumbEntity = {
  "@type": "BreadcrumbList",
  "@id": `${SITE_URL}/#breadcrumb`,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [clinicEntity, doctorPerson, websiteEntity, breadcrumbEntity],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data for SEO
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Intro />
        <Doctor />
        <CareNotes />
        <Services />
        <Gallery />
        <Awards />
        <Visit />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 no-underline"
          aria-label="Dentsspa Dental Studio, home"
        >
          <Image
            src="/Logo.png"
            alt=""
            width={160}
            height={40}
            priority
            className="h-7 w-auto"
          />
        </Link>
        <nav aria-label="Primary actions" className="flex items-center gap-1 sm:gap-2">
          <Link
            href={PHONE_HREF}
            className="hidden text-sm text-foreground/80 hover:text-foreground sm:inline-block"
          >
            {PHONE_DISPLAY}
          </Link>
          <span aria-hidden className="hidden h-3 w-px bg-border sm:block" />
          <Link
            href={MAPS_HREF}
            target="_blank"
            rel="noopener"
            className="text-sm font-medium underline-offset-[6px] hover:underline"
          >
            Directions
          </Link>
          <Link
            href={PHONE_HREF}
            className={buttonVariants({ size: "sm", className: "ml-2 min-h-11 no-underline" })}
          >
            Call clinic
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-10 sm:px-8 sm:pt-16 lg:grid-cols-12 lg:gap-16 lg:pb-28 lg:pt-24"
    >
      <div className="lg:col-span-7 lg:pr-6 reveal-quick">
        <p className="mb-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span aria-hidden className="block h-px w-8 bg-foreground/40" />
          Dental clinic, Shivaji Nagar, Pune
        </p>
        <h1
          id="hero-title"
          className="text-balance font-heading text-4xl leading-[1.04] tracking-tight sm:text-5xl lg:text-[64px]"
        >
          Dentistry, practised quietly and well, in the heart of Pune.
        </h1>
        <p className="editorial-measure mt-7 text-pretty text-base text-muted-foreground sm:text-[17px] sm:leading-[1.65]">
          Dentsspa Dental Studio has cared for patients in Model Colony since
          2011, led by{" "}
          <span className="text-foreground">Dr. Priti Munde, BDS</span>, a
          cosmetic dentist and implantologist with seventeen years of practice
          and patients from twenty-eight countries.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm">
          <Link
            href={PHONE_HREF}
            className="inline-flex min-h-11 items-center font-medium underline underline-offset-[6px]"
          >
            {PHONE_DISPLAY}
          </Link>
          <Link
            href={MAPS_HREF}
            target="_blank"
            rel="noopener"
            className="inline-flex min-h-11 items-center text-muted-foreground underline-offset-[6px] hover:text-foreground hover:underline"
          >
            Open in Google Maps
            <span aria-hidden className="ml-1.5">↗</span>
          </Link>
        </div>
      </div>

      <div className="relative lg:col-span-5">
        <figure className="reveal">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-muted sm:aspect-[4/5] lg:aspect-[5/7]">
            <Image
              src="/doctor/1.jpeg"
              alt="Dr. Priti Munde at Dentsspa Dental Studio, Pune"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, (min-width: 640px) 80vw, 100vw"
              className="object-cover object-[center_top]"
            />
          </div>
          <figcaption className="mt-3 text-xs text-muted-foreground">
            Dr. Priti Munde, Founder & Director.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section
      aria-labelledby="intro-title"
      className="border-y border-border/70 bg-secondary/40"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4 reveal-quick">
          <h2
            id="intro-title"
            className="font-heading text-3xl leading-tight tracking-tight sm:text-4xl"
          >
            Calm, careful, considered.
          </h2>
        </div>
        <div className="lg:col-span-8 reveal">
          <p className="editorial-measure text-pretty text-base text-foreground/85 sm:text-[17px] sm:leading-[1.7]">
            Our practice is unhurried by design. We work in a single, well-lit
            studio rather than a chain, and we treat one patient at a time.
            Treatment plans are explained in plain language, costs are shared
            in writing before any work begins, and recovery is considered as
            carefully as the procedure itself.
          </p>
          <p className="editorial-measure mt-5 text-pretty text-base text-muted-foreground sm:text-[17px] sm:leading-[1.7]">
            The studio is equipped for modern, digital workflows, including
            CBCT, 3-Shape intraoral scanning and in-office milling, but
            technology is in service of the appointment, not the other way
            around.
          </p>
        </div>
      </div>
    </section>
  );
}

function Doctor() {
  return (
    <section
      id="doctor"
      aria-labelledby="doctor-title"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <figure className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-muted reveal">
            <Image
              src="/doctor/17.jpeg"
              alt="Dr. Priti Munde reviewing a patient's treatment plan"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </figure>
        <div className="lg:col-span-7 lg:pt-6 reveal">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            The doctor
          </p>
          <h2
            id="doctor-title"
            className="mt-5 font-heading text-3xl leading-[1.1] tracking-tight sm:text-[44px]"
          >
            Dr. Priti Munde, BDS.
          </h2>
          <p className="mt-2 text-base text-muted-foreground">
            Cosmetic Dentist & Implantologist · Founder, Dentsspa Dental Studio.
          </p>

          <blockquote className="mt-9">
            <p className="font-heading text-pretty text-xl italic leading-snug text-foreground/90 sm:text-2xl">
              &ldquo;Making people smile, and feel confident about themselves,
              has been my passion since day one.&rdquo;
            </p>
          </blockquote>

          <dl className="mt-10 grid gap-y-6 gap-x-10 text-sm sm:grid-cols-2">
            <Detail label="Practising since" value="2008" />
            <Detail label="Clinic established" value="2011" />
            <Detail label="Patients seen each year" value="≈ 2,900" />
            <Detail label="Patients from" value="28 countries" />
            <Detail
              label="Registered"
              value="Maharashtra University of Health Sciences, A-17135"
            />
            <Detail
              label="Special interest"
              value="Cosmetic dentistry, implants, Digital Smile Design"
            />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1.5 text-foreground">{value}</dd>
    </div>
  );
}

function CareNotes() {
  return (
    <section
      aria-labelledby="care-title"
      className="border-t border-border/70 bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 reveal-quick">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Notes from the chair
            </p>
            <h2
              id="care-title"
              className="mt-5 font-heading text-3xl leading-tight tracking-tight sm:text-[44px]"
            >
              A few short videos, from the doctor.
            </h2>
            <p className="editorial-measure mt-6 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              Small bits of practical advice Dr. Munde records for patients,
              the kind of thing she would otherwise repeat at every
              appointment.
            </p>
          </div>

          <div className="grid gap-8 sm:gap-10 lg:col-span-8 lg:grid-cols-3">
            {careNotes.map((v, i) => (
              <figure
                key={v.src}
                className="reveal-quick"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-foreground/5">
                  <video
                    src={v.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-4">
                  <h3 className="font-heading text-lg leading-snug tracking-tight">
                    {v.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-muted-foreground">
                    {v.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="border-t border-border/70"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4 reveal-quick">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Services
            </p>
            <h2
              id="services-title"
              className="mt-5 font-heading text-3xl leading-tight tracking-tight sm:text-[44px]"
            >
              Six things we do, all of them carefully.
            </h2>
          </div>

          <ol className="lg:col-span-8 lg:pt-3">
            {services.map((s, i) => (
              <li
                key={s.name}
                className="reveal-quick grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-border/70 py-7 sm:grid-cols-[64px_1fr] sm:gap-x-10 sm:py-9 last:border-b"
              >
                <span className="font-heading text-sm tabular-nums text-muted-foreground sm:text-base">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-xl tracking-tight sm:text-2xl">
                    {s.name}
                  </h3>
                  <p className="editorial-measure mt-2 text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section
      aria-labelledby="gallery-title"
      className="border-t border-border/70 bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-12 reveal-quick">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Inside the studio
          </p>
          <h2
            id="gallery-title"
            className="mt-5 font-heading text-3xl tracking-tight sm:text-[44px]"
          >
            The room you&rsquo;ll be sitting in.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-6 sm:gap-5">
          {galleryImages.map((img, i) => (
            <figure
              key={img.src}
              className={[
                "reveal relative overflow-hidden rounded-sm bg-muted",
                img.span === "wide"
                  ? "col-span-2 aspect-[3/2] sm:col-span-4"
                  : "col-span-1 aspect-[4/5] sm:col-span-2",
              ].join(" ")}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Awards() {
  return (
    <section
      aria-labelledby="awards-title"
      className="border-t border-border/70"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4 reveal-quick">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Recognition
          </p>
          <h2
            id="awards-title"
            className="mt-5 font-heading text-3xl tracking-tight sm:text-[44px]"
          >
            Quietly recognised.
          </h2>
        </div>
        <div className="lg:col-span-8 reveal">
          <p className="editorial-measure text-pretty text-base text-foreground/85 sm:text-[17px] sm:leading-[1.7]">
            Over the years, the practice and Dr. Munde have been recognised by
            Famdent, the Indian Health Organisation, the Indian Health
            Professional Awards, the International Dental Excellence Awards,
            the Asia Pacific Dental Excellence Awards and the Indian Dental
            Diva Awards. Awards are useful as a record; the daily work matters
            more.
          </p>
          <div className="mt-10 flex items-center gap-5">
            <Image
              src="/invisalign Logo.png"
              alt="Invisalign certified provider"
              width={120}
              height={28}
              className="h-6 w-auto opacity-70"
            />
            <span className="text-xs text-muted-foreground">
              Certified Invisalign provider.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section
      id="visit"
      aria-labelledby="visit-title"
      className="border-t border-border/70 bg-secondary/40"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 reveal-quick">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Visit
            </p>
            <h2
              id="visit-title"
              className="mt-5 font-heading text-3xl leading-tight tracking-tight sm:text-[44px]"
            >
              We&rsquo;re upstairs at Eden Hall, Model Colony.
            </h2>

            <address className="mt-9 not-italic text-base leading-relaxed text-foreground/90">
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>

            <dl className="mt-10 space-y-5 text-sm">
              <Row label="Hours">
                <span>Monday to Saturday, 10:00 to 20:00</span>
                <span className="block text-muted-foreground">
                  Sunday by appointment
                </span>
              </Row>
              <Row label="Phone">
                <Link
                  href={PHONE_HREF}
                  className="underline underline-offset-[6px]"
                >
                  {PHONE_DISPLAY}
                </Link>
              </Row>
              <Row label="WhatsApp">
                <Link
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener"
                  className="underline underline-offset-[6px]"
                >
                  Message on WhatsApp
                </Link>
              </Row>
              <Row label="Email">
                <Link
                  href={`mailto:${EMAIL}`}
                  className="underline underline-offset-[6px]"
                >
                  {EMAIL}
                </Link>
              </Row>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={MAPS_HREF}
                target="_blank"
                rel="noopener"
                className={buttonVariants({ className: "min-h-11 no-underline" })}
              >
                Get directions
              </Link>
              <Link
                href={PHONE_HREF}
                className={buttonVariants({ variant: "outline", className: "min-h-11 no-underline" })}
              >
                Call {PHONE_DISPLAY}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 reveal">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border/70 bg-muted">
              <iframe
                title="Map: Dentsspa Dental Studio, 401 Eden Hall, Model Colony, Shivaji Nagar, Pune"
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[0.95]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[110px_1fr] items-baseline gap-4">
      <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </dt>
      <dd className="text-foreground">{children}</dd>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dentsspa Dental Studio. All rights
          reserved.
        </p>
        <div className="flex items-center gap-5 text-xs text-muted-foreground">
          <Link
            href="https://www.facebook.com/DentsspaFirstDentalSpa"
            target="_blank"
            rel="noopener"
            className="hover:text-foreground"
          >
            Facebook
          </Link>
          <Link href={`mailto:${EMAIL}`} className="hover:text-foreground">
            {EMAIL}
          </Link>
        </div>
      </div>
    </footer>
  );
}
