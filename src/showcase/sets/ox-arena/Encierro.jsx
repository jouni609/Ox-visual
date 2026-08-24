import { motion } from 'framer-motion'
import './encierro.css'

const TICKER_ITEMS = [
  '08:00 — EL COHETE ANUNCIA LA SUELTA',
  '08:02 — SANTO DOMINGO: LOS TOROS SALEN',
  '08:03 — MERCADERES: PRIMER SPRINT',
  '08:04 — ESTAFETA: LA CUESTA MÁS TEMIDA',
  '08:05 — TELEFÓNICA: LA MANADA SE ESTIRA',
  '08:06 — CALLEJÓN: CUERNOS A UN METRO',
  '08:07 — LA PLAZA: ENCIERRO COMPLETO',
]

const ROUTE = [
  ['SANTO DOMINGO', '08:00'],
  ['AYUNTAMIENTO', '08:02'],
  ['MERCADERES', '08:03'],
  ['ESTAFETA', '08:04'],
  ['TELEFÓNICA', '08:05'],
  ['CALLEJÓN', '08:06'],
  ['PLAZA DE TOROS', '08:07'],
]

function Engraving() {
  return (
    <svg className="ox-arena-encierro-engraving" viewBox="0 0 900 560" aria-hidden="true" focusable="false">
      <path d="M300 280 C250 300 240 340 256 372 C280 410 360 424 460 416 C560 408 620 380 648 340 C668 310 660 284 636 270 C560 248 420 244 300 280 Z" fill="#201D1A" />
      <path d="M620 268 C660 260 690 268 708 290 C726 312 730 336 720 352 C706 368 688 370 672 362 C666 340 654 318 634 306 C626 296 620 282 620 268 Z" fill="#201D1A" />
      <path d="M656 282 C690 268 720 262 748 268 C752 286 726 294 690 298 C676 300 664 298 656 292 Z" fill="#201D1A" />
      <path d="M662 296 C696 288 724 286 750 292 C752 308 730 314 698 312 C684 312 670 306 662 300 Z" fill="#201D1A" />
      <path d="M648 300 C660 292 670 294 672 304 C666 310 654 308 648 300 Z" fill="#201D1A" />
      <path d="M600 400 C630 430 660 460 690 486 C700 494 712 490 708 478 C676 450 644 424 618 402 Z" fill="#201D1A" />
      <path d="M560 408 C584 442 606 474 626 502 C632 512 644 508 640 496 C620 468 600 440 582 414 Z" fill="#201D1A" />
      <path d="M300 400 C270 430 244 462 224 490 C218 500 206 496 210 484 C234 452 260 424 284 402 Z" fill="#201D1A" />
      <path d="M340 406 C316 438 296 470 280 498 C276 508 264 504 268 492 C286 462 306 434 326 408 Z" fill="#201D1A" />
      <path d="M258 322 C200 300 160 266 136 238 C124 226 138 214 150 224 C178 254 214 286 256 304 Z" fill="#201D1A" />
      <circle cx="690" cy="310" r="4" fill="#F4EDDA" />
      <circle cx="724" cy="334" r="3" fill="#F4EDDA" />
      <path d="M716 352 C690 360 664 360 646 354" fill="none" stroke="#F4EDDA" strokeWidth="3" strokeLinecap="round" />
      <path d="M664 372 C676 386 690 392 706 392" fill="none" stroke="#F4EDDA" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M380 300 l 18 10 M 420 296 l 18 10 M 460 300 l 18 10 M 500 308 l 18 10 M 540 320 l 18 10 M 330 330 l 18 10 M 370 336 l 18 10 M 410 342 l 18 10 M 450 348 l 18 10 M 490 354 l 18 10 M 300 360 l 16 10 M 340 368 l 16 10"
        fill="none"
        stroke="#F4EDDA"
        strokeWidth="2.5"
        opacity="0.8"
      />
      <ellipse cx="470" cy="508" rx="240" ry="10" fill="#201D1A" opacity="0.16" />
      <path d="M120 505 l 40 0 M 300 512 l 50 0 M 520 500 l 40 0 M 760 508 l 45 0" stroke="#201D1A" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export default function Encierro() {
  return (
    <div className="th-ox-arena ox-arena-encierro">
      <div className="ox-arena-encierro-ticker" aria-hidden="true">
        <div className="ox-arena-encierro-tickertrack">
          {[0, 1].map((copy) => (
            <div className="ox-arena-encierro-tickercopy" key={copy}>
              {TICKER_ITEMS.map((item) => (
                <span className="ox-arena-encierro-tickeritem" key={item}>
                  {item} <b>·</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="ox-arena-encierro-page"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <header className="ox-arena-encierro-masthead">
          <p className="ox-arena-encierro-masthead-top">DIARIO DE LA FIESTA · SAN FERMÍN · AÑO CII · NÚM. 14.207</p>
          <p className="ox-arena-encierro-masthead-name">La Gaceta de Pamplona</p>
          <div className="ox-arena-encierro-masthead-bottom">
            <span>MARTES 7 DE JULIO · EDICIÓN DE LA MAÑANA</span>
            <span>PRECIO: DOS REALES DE VELLÓN</span>
          </div>
        </header>

        <h1 className="ox-arena-encierro-h1" lang="es">
          Ochocientos setenta y cinco metros de miedo
        </h1>
        <p className="ox-arena-encierro-deck" lang="es">
          El encierro de San Fermín: seis toros bravos, ocho mansos de guía y dos mil mozos
          delante de los cuernos, cada mañana, a las ocho en punto.
        </p>
        <p className="ox-arena-encierro-byline">POR LA REDACCIÓN — PAMPLONA</p>

        <div className="ox-arena-encierro-columns" lang="es">
          <section className="ox-arena-encierro-col">
            <p>
              A las ocho menos cinco, los mozos aprietan el periódico en la mano y se santiguan
              tres veces mirando al nicho de Santo Domingo. A las ocho en punto, el cohete parte
              el aire y los portones se abren: seis toros de casta, ochocientos kilos cada uno,
              lanzados por la cuesta hacia la plaza.
            </p>
            <p>
              Delante corren los mozos — camisa blanca, pañuelo rojo, faja roja — con la única
              defensa del periódico enrollado. La manada tarda tres minutos en cubrir el
              recorrido. El que tropieza no tiene tres segundos.
            </p>
            <p>
              El encierro nació como trabajo: llevar los toros del corral a la plaza. Con los
              siglos el trabajo se volvió prueba, y la prueba se volvió rito. Ayer, como cada 7
              de julio, la ciudad entera despertó con el primer cohete.
            </p>
          </section>

          <section className="ox-arena-encierro-col">
            <div className="ox-arena-encierro-engravingbox">
              <Engraving />
              <p className="ox-arena-encierro-caption" lang="es">
                El toro de casta entra en la calle Estafeta. Grabado al linóleo de la redacción.
              </p>
            </div>

            <div className="ox-arena-encierro-routebox">
              <p className="ox-arena-encierro-routehead">EL RECORRIDO</p>
              <ol className="ox-arena-encierro-route">
                {ROUTE.map(([name, time]) => (
                  <li key={name}>
                    <span className="ox-arena-encierro-route-time">{time}</span>
                    <span className="ox-arena-encierro-route-name">{name}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="ox-arena-encierro-col">
            <div className="ox-arena-encierro-factbox">
              <p className="ox-arena-encierro-facthead">LA FICHA</p>
              <p><b>875 m</b> — del corral de Santo Domingo a la Plaza de Toros.</p>
              <p><b>≈ 3 min</b> — el tiempo de la manada, cuando la manada quiere.</p>
              <p><b>6 + 8</b> — toros bravos y mansos que abren la carrera.</p>
              <p><b>2.000+</b> — mozos, contados por la policía con optimismo.</p>
            </div>
            <div className="ox-arena-encierro-quote" lang="es">
              <p>«El miedo se corre a las ocho, y se gana a las ocho y tres.»</p>
              <p className="ox-arena-encierro-quote-attr">— DICHO DE MOZO VETERANO</p>
            </div>
            <div className="ox-arena-encierro-rulesbox">
              <p className="ox-arena-encierro-facthead">CÓMO SE CORRE</p>
              <p>Correr siempre por delante, nunca en línea recta; mirar la manada, no los pies; y jamás — jamás — tocar al toro.</p>
            </div>
          </section>
        </div>

        <footer className="ox-arena-encierro-imprint" aria-label="Set signature: SET XVII · DESIGNED BY DEEPSEEK V4 PRO">
          <p>IMPRENTA OX ARENA — PAMPLONA · EJEMPLAR GRATUITO</p>
          <p className="ox-arena-encierro-imprint-sig">REDACCIÓN, GRABADOS Y ROTATIVA: SET XVII · DESIGNED BY DEEPSEEK V4 PRO</p>
          <p>REGISTRADO BAJO EL COHETE DE LAS OCHO</p>
        </footer>
      </motion.div>
    </div>
  )
}
