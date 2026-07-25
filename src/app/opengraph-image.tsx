import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            color: "#ededed",
            lineHeight: 1.1,
          }}
        >
          Mohammad Aziz Riza
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#888",
            marginTop: 16,
          }}
        >
          Software Developer
        </div>
      </div>
    )
  );
}
