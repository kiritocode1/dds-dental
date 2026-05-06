import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Dentsspa Dental Studio — Dr. Priti Munde, BDS · Shivaji Nagar, Pune";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(family: string, weight: number) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`,
    { headers: { "User-Agent": "Mozilla/5.0" } },
  ).then((r) => r.text());
  const url = css.match(/url\((https:[^)]+\.(?:woff2|ttf))\)/)?.[1];
  if (!url) throw new Error(`Font URL not found for ${family} ${weight}`);
  return fetch(url).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const [photoBytes, fraunces, inter] = await Promise.all([
    readFile(join(process.cwd(), "public/doctor/1.jpeg")),
    loadFont("Fraunces", 400),
    loadFont("Inter", 500),
  ]);
  const photoDataUrl = `data:image/jpeg;base64,${photoBytes.toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#FAF8F4",
        color: "#1B201E",
        fontFamily: "Inter",
      }}
    >
      <div
        style={{
          width: "60%",
          height: "100%",
          padding: "72px 64px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#5D6764",
          }}
        >
          <div style={{ width: 40, height: 1, background: "#1B201E" }} />
          Dental clinic · Shivaji Nagar, Pune
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div
            style={{
              fontFamily: "Fraunces",
              fontSize: 76,
              lineHeight: 1.04,
              letterSpacing: -1.4,
              color: "#1B201E",
            }}
          >
            Dentsspa Dental Studio.
          </div>
          <div
            style={{
              fontSize: 26,
              lineHeight: 1.4,
              color: "#3D4744",
              maxWidth: 580,
            }}
          >
            Led by Dr. Priti Munde, BDS. Cosmetic dentistry, implants and
            digital smile design, in Model Colony since 2011.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 18,
            color: "#3D4744",
          }}
        >
          <span>401, Eden Hall, Model Colony</span>
          <span style={{ width: 4, height: 4, background: "#3D4744", borderRadius: 4 }} />
          <span>+91 96730 04407</span>
        </div>
      </div>

      <div
        style={{
          width: "40%",
          height: "100%",
          display: "flex",
          position: "relative",
        }}
      >
        {/* biome-ignore lint/performance/noImgElement: ImageResponse requires <img> */}
        <img
          src={photoDataUrl}
          alt=""
          width="480"
          height="630"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Inter", data: inter, weight: 500, style: "normal" },
        { name: "Fraunces", data: fraunces, weight: 400, style: "normal" },
      ],
    },
  );
}
