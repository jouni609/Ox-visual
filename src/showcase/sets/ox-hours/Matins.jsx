import { motion } from 'framer-motion';
import './matins.css';

const STARS = [
  { l: 5, t: 6, s: 2, d: 0 },
  { l: 12, t: 18, s: 1.4, d: 1.1 },
  { l: 19, t: 9, s: 2.2, d: 2.3 },
  { l: 27, t: 22, s: 1.2, d: 0.6 },
  { l: 34, t: 5, s: 1.8, d: 1.8 },
  { l: 41, t: 15, s: 1.3, d: 3.1 },
  { l: 48, t: 8, s: 2.4, d: 0.9 },
  { l: 56, t: 20, s: 1.5, d: 2.7 },
  { l: 63, t: 6, s: 1.9, d: 1.4 },
  { l: 70, t: 16, s: 1.2, d: 3.6 },
  { l: 78, t: 9, s: 2.1, d: 0.3 },
  { l: 85, t: 21, s: 1.4, d: 2.1 },
  { l: 91, t: 7, s: 1.7, d: 1.6 },
  { l: 95, t: 17, s: 1.2, d: 2.9 },
  { l: 23, t: 31, s: 1.1, d: 3.4 },
  { l: 74, t: 29, s: 1.3, d: 0.8 },
];

function BellRoundel() {
  return (
    <div className="matins-bell" aria-hidden="true">
      <svg viewBox="0 0 64 64" focusable="false">
        <circle cx="32" cy="32" r="30" fill="none" stroke="#B98A2F" strokeWidth="1.5" />
        <circle cx="32" cy="32" r="26" fill="none" stroke="#B98A2F" strokeWidth="0.75" opacity="0.6" />
        <motion.g
          style={{ originX: '32px', originY: '13px' }}
          animate={{ rotate: [-9, 9, -9] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M32 12 L32 17" stroke="#B98A2F" strokeWidth="2" />
          <path d="M24 34 C24 22 27 17 32 17 C37 17 40 22 40 34 L43.5 38.5 L20.5 38.5 Z" fill="#B98A2F" />
          <circle cx="32" cy="43" r="3" fill="#B98A2F" />
        </motion.g>
      </svg>
    </div>
  );
}

function Landscape() {
  return (
    <svg
      className="matins-landscape"
      viewBox="0 0 960 420"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 340 C160 316 340 312 520 322 C700 332 840 330 960 316 L960 420 L0 420 Z" fill="#262D52" />
      <path d="M0 372 C200 356 420 358 640 368 C800 374 900 372 960 364 L960 420 L0 420 Z" fill="#1B2040" />
      <path d="M84 340 C84 318 100 304 120 304 C140 304 154 318 154 336 L150 340 Z" fill="#181D3A" />
      <path d="M150 342 C150 328 160 318 174 318 C188 318 196 328 196 340 Z" fill="#161B36" />
      <path d="M700 396 L700 300 L762 256 L824 300 L824 396 Z" fill="#141830" />
      <path d="M688 302 L762 250 L836 302 L828 312 L762 266 L696 312 Z" fill="#10142A" />
      <path d="M748 396 L748 344 Q762 332 776 344 L776 396 Z" fill="#3A4370" opacity="0.85" />
      <circle cx="762" cy="286" r="5" fill="#3A4370" opacity="0.8" />
      <path d="M404 328 L408 382 L420 382 L422 330 Z" fill="#10142A" />
      <path d="M636 332 L640 382 L652 382 L654 330 Z" fill="#10142A" />
      <path
        d="M306 216 C294 204 284 190 278 178 C262 174 246 168 232 158 C222 166 214 176 209 187 C203 200 199 213 197 226 C195 241 193 253 197 263 C201 273 213 279 229 279 C247 279 259 271 265 261 C273 269 283 275 293 277 C299 293 307 301 317 305 C331 301 341 293 347 285 C353 301 359 315 367 323 C371 337 373 353 373 367 L373 386 L388 386 L390 362 C392 348 395 336 399 326 C421 334 449 338 481 339 C541 342 601 340 649 333 C657 347 661 361 663 375 L663 386 L677 386 L679 371 C681 355 685 341 693 329 C701 317 709 301 713 287 C707 269 695 257 677 251 C641 241 561 239 481 245 C421 249 361 247 323 231 C315 227 309 222 306 216 Z"
        fill="#1C2138"
      />
      <path d="M713 287 C725 295 731 311 731 331 C731 351 727 367 721 379 C717 383 711 383 709 377 C715 363 719 349 719 331 C719 315 715 301 707 293 Z" fill="#1C2138" />
      <ellipse cx="715" cy="383" rx="9" ry="7" fill="#10142A" />
      <path d="M233 158 C219 143 203 135 187 137 C177 139 171 145 169 153 C179 149 191 150 201 156 C211 162 221 164 231 162 Z" fill="#7C7FA6" />
      <path d="M245 152 C241 138 245 124 255 116 C259 124 259 136 255 146 C252 151 248 154 245 152 Z" fill="#6A6D94" />
      <path d="M256 162 C266 153 279 152 288 159 C280 168 265 169 256 162 Z" fill="#1C2138" />
      <circle cx="228" cy="205" r="4.5" fill="#C7CBE4" />
      <circle cx="207" cy="253" r="3" fill="#0E1126" />
      <path d="M366 386 L396 386 L396 394 L366 394 Z" fill="#0E1126" />
      <path d="M656 386 L686 386 L686 394 L656 394 Z" fill="#0E1126" />
      <path d="M400 382 L426 382 L426 389 L400 389 Z" fill="#0B0E20" />
      <path d="M632 382 L658 382 L658 389 L632 389 Z" fill="#0B0E20" />
      <rect x="0" y="396" width="960" height="24" fill="#12162C" />
    </svg>
  );
}

function Breath() {
  return (
    <div className="matins-breath" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="matins-puff"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0], x: [-4, -34], y: [0, -16], scale: [0.55, 1.5] }}
          transition={{ duration: 4.4, repeat: Infinity, delay: i * 1.4, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}

export default function Matins() {
  return (
    <div className="th-matins">
      <div className="matins-sky" aria-hidden="true">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="matins-star"
            style={{ left: `${s.l}%`, top: `${s.t}%`, width: s.s, height: s.s, animationDelay: `${s.d}s` }}
          />
        ))}
        <motion.span
          className="matins-venus"
          animate={{ opacity: [0.95, 0.45, 0.95] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="matins-dawn" />
      </div>

      <div className="matins-scene" aria-hidden="true">
        <Landscape />
        <div className="matins-mist matins-mist--far" />
        <div className="matins-mist matins-mist--near" />
        <Breath />
      </div>

      <motion.section
        className="matins-folio"
        initial={{ opacity: 0, y: 46 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <BellRoundel />
        <p className="matins-kicker">THE BOOK OF HOURS OF THE OX · FOLIO I</p>
        <h1 className="matins-title">Matins</h1>
        <p className="matins-rubric">The night office, before first light</p>
        <p className="matins-antiphon" lang="la">
          Diluculo surgam, et ibo ad bovem meum.
        </p>
        <p className="matins-antiphon-en">I shall rise before dawn, and go to my ox.</p>
        <div className="matins-rule" aria-hidden="true" />
        <p className="matins-lede">
          <span className="matins-dropcap" aria-hidden="true">W</span>
          hile the stars are still out, the byre is already awake. The ox rises from its litter of
          straw, shakes the night off its shoulders, and breathes a little weather into the cold.
          There is no bell yet, no yoke, no road — only the hour itself, and the steady animal
          standing at the edge of it, waiting for the light to keep its promise.
        </p>
        <p className="matins-note">
          First light at the byre gate · the herd on its feet · breath hanging in the dark
        </p>
      </motion.section>

      <footer className="matins-footer">
        <div className="matins-colophon">
          <span className="matins-colophon-ring" aria-hidden="true" />
          <p className="matins-colophon-l1">SET XIV · DESIGNED BY QWEN 3.8 MAX</p>
          <p className="matins-colophon-l2">SCRIPTUM AD MATUTINUM · OX HOURS</p>
        </div>
      </footer>
    </div>
  );
}
