/**
 * Composição abstrata: contorno de um dente sendo desenhado, seguido de
 * uma curva de sorriso em azul. Puro SVG + CSS (ver .smile-mark* em
 * index.css) — sem bibliotecas de animação.
 */
export default function SmileMark() {
  return (
    <div className="smile-mark" aria-hidden="true">
      <svg viewBox="0 0 320 360" fill="none" className="smile-mark__svg">
        <circle className="smile-mark__dot" cx="64" cy="90" r="2.5" fill="#0077B6" />
        <circle className="smile-mark__dot smile-mark__dot--2" cx="256" cy="120" r="3" fill="#0077B6" />
        <circle className="smile-mark__dot smile-mark__dot--3" cx="242" cy="270" r="2" fill="#171717" />
        <circle className="smile-mark__dot smile-mark__dot--4" cx="70" cy="250" r="2.5" fill="#171717" />

        <path
          className="smile-mark__tooth"
          d="M120 46C120 28 138 18 160 30C182 18 200 28 200 46C206 100 190 158 168 196C162 206 158 206 152 196C130 158 114 100 120 46Z"
          stroke="#171717"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        <path
          className="smile-mark__smile"
          d="M96 246C118 280 202 280 224 246"
          stroke="#0077B6"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
