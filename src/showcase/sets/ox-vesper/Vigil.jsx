import { motion } from 'framer-motion';
import './vigil.css';

const STARS = [
  { top: '8%', left: '12%', size: 2 },
  { top: '15%', left: '28%', size: 1.5 },
  { top: '6%', left: '42%', size: 2.5 },
  { top: '18%', left: '58%', size: 1.5 },
  { top: '10%', left: '74%', size: 2 },
  { top: '22%', left: '88%', size: 1.5 },
  { top: '28%', left: '6%', size: 1.5 },
  { top: '34%', left: '92%', size: 2 },
  { top: '12%', left: '95%', size: 1 },
  { top: '4%', left: '65%', size: 2 },
  { top: '25%', left: '38%', size: 1 },
  { top: '19%', left: '81%', size: 1.5 }
];

const FIREFLIES = [
  { id: 1, className: 'ox-vesper-vigil-firefly-1' },
  { id: 2, className: 'ox-vesper-vigil-firefly-2' },
  { id: 3, className: 'ox-vesper-vigil-firefly-3' },
  { id: 4, className: 'ox-vesper-vigil-firefly-4' },
  { id: 5, className: 'ox-vesper-vigil-firefly-5' },
  { id: 6, className: 'ox-vesper-vigil-firefly-6' },
  { id: 7, className: 'ox-vesper-vigil-firefly-7' },
  { id: 8, className: 'ox-vesper-vigil-firefly-8' }
];

function GuardianOxSvg() {
  return (
    <svg
      className="ox-vesper-vigil-ox-svg"
      viewBox="0 0 960 620"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="ox-vesper-vigil-sky-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#14162B" />
          <stop offset="50%" stopColor="#242C48" />
          <stop offset="80%" stopColor="#354668" />
          <stop offset="100%" stopColor="#222B42" />
        </linearGradient>

        <linearGradient id="ox-vesper-vigil-glow-grad" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#F0E4D4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F0E4D4" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="ox-vesper-vigil-body-grad" x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#D8A576" />
          <stop offset="25%" stopColor="#C4956A" />
          <stop offset="65%" stopColor="#8F5D34" />
          <stop offset="100%" stopColor="#543015" />
        </linearGradient>

        <linearGradient id="ox-vesper-vigil-head-grad" x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#E2B083" />
          <stop offset="35%" stopColor="#C4956A" />
          <stop offset="70%" stopColor="#8A5830" />
          <stop offset="100%" stopColor="#4E2B12" />
        </linearGradient>

        <linearGradient id="ox-vesper-vigil-dewlap-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A87244" />
          <stop offset="50%" stopColor="#825028" />
          <stop offset="100%" stopColor="#4E2A10" />
        </linearGradient>

        <linearGradient id="ox-vesper-vigil-fore-grad" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#C4956A" />
          <stop offset="50%" stopColor="#8C5B32" />
          <stop offset="100%" stopColor="#4A2B14" />
        </linearGradient>

        <linearGradient id="ox-vesper-vigil-hind-grad" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#C4956A" />
          <stop offset="50%" stopColor="#8C5B32" />
          <stop offset="100%" stopColor="#4A2B14" />
        </linearGradient>

        <linearGradient id="ox-vesper-vigil-horn-l-grad" x1="0" y1="1" x2="0.8" y2="0">
          <stop offset="0%" stopColor="#4E331A" />
          <stop offset="35%" stopColor="#9C7348" />
          <stop offset="75%" stopColor="#E6C8A5" />
          <stop offset="100%" stopColor="#2A1B0E" />
        </linearGradient>

        <linearGradient id="ox-vesper-vigil-horn-r-grad" x1="0" y1="1" x2="0.8" y2="0">
          <stop offset="0%" stopColor="#4E331A" />
          <stop offset="35%" stopColor="#9C7348" />
          <stop offset="75%" stopColor="#E6C8A5" />
          <stop offset="100%" stopColor="#2A1B0E" />
        </linearGradient>

        <linearGradient id="ox-vesper-vigil-rim-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F0E4D4" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#F5DFB8" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#C4956A" stopOpacity="0.2" />
        </linearGradient>

        <linearGradient id="ox-vesper-vigil-ridge-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3E5442" />
          <stop offset="40%" stopColor="#2C3D30" />
          <stop offset="100%" stopColor="#141D17" />
        </linearGradient>

        <linearGradient id="ox-vesper-vigil-ground-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6B8F71" />
          <stop offset="30%" stopColor="#3B5440" />
          <stop offset="100%" stopColor="#17221A" />
        </linearGradient>

        <filter id="ox-vesper-vigil-soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" />
        </filter>
      </defs>

      <rect width="960" height="620" fill="url(#ox-vesper-vigil-sky-grad)" />

      <circle cx="810" cy="110" r="32" fill="#F0E4D4" opacity="0.9" />
      <circle cx="822" cy="104" r="30" fill="#242C48" />
      <circle cx="810" cy="110" r="48" fill="none" stroke="#F0E4D4" strokeWidth="1" opacity="0.2" />
      <circle cx="160" cy="95" r="3" fill="#FFF8E7" opacity="0.95" />
      <polygon points="160,86 162,93 169,95 162,97 160,104 158,97 151,95 158,93" fill="#FFF8E7" opacity="0.8" />

      <path
        d="M 0 410 Q 240 375 480 395 Q 720 415 960 380 L 960 620 L 0 620 Z"
        fill="url(#ox-vesper-vigil-ridge-grad)"
        opacity="0.92"
      />

      <g fill="#212F25" opacity="0.85">
        <polygon points="680,390 690,345 700,390" />
        <polygon points="695,395 705,355 715,395" />
        <polygon points="710,392 722,340 734,392" />
        <polygon points="730,396 740,360 750,396" />
        <polygon points="745,390 758,348 770,390" />
        <polygon points="765,395 775,362 785,395" />
        <polygon points="850,385 860,350 870,385" />
        <polygon points="865,388 875,342 885,388" />
        <polygon points="880,385 892,352 904,385" />
      </g>

      <path
        d="M 0 480 Q 280 450 560 465 Q 780 480 960 460 L 960 620 L 0 620 Z"
        fill="url(#ox-vesper-vigil-ground-grad)"
      />

      <g>
        <ellipse cx="530" cy="564" rx="330" ry="24" fill="#0C1014" opacity="0.65" filter="url(#ox-vesper-vigil-soft-shadow)" />
        <ellipse cx="365" cy="564" rx="130" ry="16" fill="#0A0D10" opacity="0.75" filter="url(#ox-vesper-vigil-soft-shadow)" />
        <ellipse cx="715" cy="564" rx="140" ry="16" fill="#0A0D10" opacity="0.75" filter="url(#ox-vesper-vigil-soft-shadow)" />
      </g>

      <motion.g
        animate={{
          scale: [1, 1.006, 1],
          y: [0, -2, 0]
        }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ transformOrigin: '480px 480px' }}
      >
        <g>
          <path
            d="M 680 340 C 720 380 735 440 725 490 L 730 555 L 698 555 L 692 490 C 690 440 670 400 655 350 Z"
            fill="#4A2B14"
          />
          <path d="M 698 555 L 730 555 L 728 565 L 696 565 Z" fill="#1F130B" />

          <path
            d="M 395 330 C 408 380 412 440 410 490 L 415 555 L 385 555 L 380 490 C 378 440 370 380 365 330 Z"
            fill="#4A2B14"
          />
          <path d="M 385 555 L 415 555 L 413 565 L 383 565 Z" fill="#1F130B" />

          <path
            d="M 335 220 C 365 190, 420 170, 475 175 C 540 180, 620 190, 680 185 C 740 182, 800 210, 815 270 C 825 310, 818 360, 805 395 C 790 425, 765 440, 735 435 C 670 440, 570 455, 465 450 C 390 445, 345 410, 315 355 C 298 320, 290 280, 310 245 C 320 230, 328 225, 335 220 Z"
            fill="url(#ox-vesper-vigil-body-grad)"
          />

          <path
            d="M 440 220 C 480 235 520 280 500 360 C 485 410 440 430 400 435 C 380 395 375 330 405 270 C 418 245 428 230 440 220 Z"
            fill="#B27E52"
            opacity="0.45"
          />

          <path
            d="M 685 260 C 750 280, 785 340, 765 410 C 755 440, 760 470, 750 505 L 745 560 L 702 562 L 706 505 C 705 460, 685 415, 665 380 C 645 345, 655 295, 685 260 Z"
            fill="url(#ox-vesper-vigil-hind-grad)"
          />
          <path d="M 702 562 L 745 560 L 742 572 L 698 574 Z" fill="#24180F" />
          <path d="M 702 562 L 745 560" stroke="#F0E4D4" strokeWidth="1.2" opacity="0.4" />

          <path
            d="M 360 250 C 405 275, 420 340, 400 395 C 390 430, 375 465, 365 500 L 360 560 L 318 560 L 324 500 C 330 455, 325 405, 320 360 C 330 310, 342 275, 360 250 Z"
            fill="url(#ox-vesper-vigil-fore-grad)"
          />
          <path d="M 318 560 L 360 560 L 357 572 L 314 572 Z" fill="#24180F" />
          <path d="M 318 560 L 360 560" stroke="#F0E4D4" strokeWidth="1.2" opacity="0.4" />

          <path
            d="M 808 265 C 820 330, 810 410, 798 475 L 790 475 C 802 410, 810 330, 798 265 Z"
            fill="#5C381A"
          />
          <path
            d="M 796 465 C 815 490, 818 535, 804 568 C 792 585, 775 575, 782 545 C 786 525, 782 495, 796 465 Z"
            fill="#3D2410"
          />
          <path
            d="M 798 480 C 808 505, 810 535, 800 558 C 794 568, 785 562, 789 542 C 792 525, 788 505, 798 480 Z"
            fill="#5C381A"
          />

          <path
            d="M 285 330 C 265 375, 260 420, 282 458 C 300 480, 330 485, 352 468 C 332 445, 320 410, 315 370 C 310 340, 298 330, 285 330 Z"
            fill="url(#ox-vesper-vigil-dewlap-grad)"
          />
          <path
            d="M 302 390 C 290 430, 295 465, 318 485 C 335 498, 360 488, 366 470 C 348 452, 336 430, 330 398 Z"
            fill="#6B401F"
            opacity="0.8"
          />

          <path
            d="M 248 235 C 230 268, 235 320, 258 355 C 275 378, 310 388, 340 380 C 368 372, 385 342, 382 305 C 380 265, 368 232, 345 220 C 312 210, 275 212, 248 235 Z"
            fill="url(#ox-vesper-vigil-head-grad)"
          />

          <path
            d="M 262 328 C 255 350, 268 375, 292 380 C 318 382, 342 372, 348 348 C 350 330, 335 320, 305 320 C 280 320, 265 324, 262 328 Z"
            fill="#2E1C10"
          />
          <path d="M 276 352 C 273 358, 282 364, 288 358 C 290 354, 283 350, 276 352 Z" fill="#140C07" />
          <path d="M 320 352 C 314 350, 322 364, 328 358 C 330 354, 324 350, 320 352 Z" fill="#140C07" />

          <path d="M 248 266 Q 256 258 266 264 Q 268 274 260 276 Q 250 275 248 266 Z" fill="#140C07" />
          <circle cx="258" cy="266" r="2.2" fill="#FFF4D6" />
          <circle cx="260" cy="268" r="1" fill="#C4956A" />

          <path d="M 348 262 Q 356 255 365 260 Q 366 270 358 273 Q 349 271 348 262 Z" fill="#140C07" />
          <circle cx="356" cy="263" r="2.2" fill="#FFF4D6" />
          <circle cx="358" cy="265" r="1" fill="#C4956A" />

          <path
            d="M 238 240 C 205 235, 182 250, 194 268 C 208 278, 230 268, 244 252 Z"
            fill="#8C5B32"
          />
          <path
            d="M 230 244 C 208 242, 194 252, 202 264 C 212 270, 225 264, 234 252 Z"
            fill="#4A2B14"
          />

          <path
            d="M 358 240 C 390 235, 412 250, 400 268 C 388 278, 365 268, 352 252 Z"
            fill="#8C5B32"
          />
          <path
            d="M 365 244 C 388 242, 400 252, 394 264 C 384 270, 370 264, 362 252 Z"
            fill="#4A2B14"
          />

          <path
            d="M 270 220 Q 300 245 330 220 Q 312 252 295 248 Q 280 240 270 220 Z"
            fill="#5C381A"
          />

          <path
            d="M 260 225 C 230 205, 175 180, 130 142 C 108 122, 102 96, 120 78 C 132 66, 150 75, 160 92 C 180 125, 222 170, 272 208 Z"
            fill="url(#ox-vesper-vigil-horn-l-grad)"
          />
          <path
            d="M 338 218 C 378 195, 435 168, 485 125 C 508 102, 516 78, 500 62 C 486 48, 468 58, 458 78 C 435 118, 385 165, 328 200 Z"
            fill="url(#ox-vesper-vigil-horn-r-grad)"
          />

          <path d="M 245 210 C 228 196 200 178 180 156" fill="none" stroke="#24180F" strokeWidth="1.8" opacity="0.6" />
          <path d="M 215 180 C 198 165 175 145 155 125" fill="none" stroke="#24180F" strokeWidth="1.8" opacity="0.6" />
          <path d="M 358 202 C 385 184 415 160 440 134" fill="none" stroke="#24180F" strokeWidth="1.8" opacity="0.6" />
          <path d="M 390 174 C 418 152 445 128 468 102" fill="none" stroke="#24180F" strokeWidth="1.8" opacity="0.6" />

          <path
            d="M 120 78 C 132 66, 150 75, 160 92 C 180 125, 222 170, 272 208 C 295 212, 335 220, 365 190 C 420 170, 475 175, 540 180 C 620 190, 680 185, 740 182 C 800 210, 815 270, 825 310"
            fill="none"
            stroke="url(#ox-vesper-vigil-rim-grad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            opacity="0.88"
          />
        </g>
      </motion.g>

      <g stroke="#6B8F71" strokeWidth="2" strokeLinecap="round">
        <line x1="280" y1="565" x2="284" y2="538" />
        <line x1="288" y1="568" x2="294" y2="532" />
        <line x1="295" y1="565" x2="305" y2="542" />

        <line x1="365" y1="572" x2="370" y2="548" />
        <line x1="375" y1="574" x2="382" y2="544" />

        <line x1="680" y1="574" x2="685" y2="546" />
        <line x1="690" y1="576" x2="698" y2="540" />
        <line x1="748" y1="572" x2="754" y2="545" />
        <line x1="758" y1="575" x2="768" y2="542" />
      </g>
    </svg>
  );
}

function CowbellTagSignature() {
  return (
    <div className="ox-vesper-vigil-cowbell-wrap" aria-label="Set signature: SET XVI · DESIGNED BY CLAUDE OPUS">
      <svg
        className="ox-vesper-vigil-cowbell-svg"
        viewBox="0 0 340 132"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="ox-vesper-vigil-brass-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F3DA7A" />
            <stop offset="30%" stopColor="#C99738" />
            <stop offset="70%" stopColor="#8A5C1E" />
            <stop offset="100%" stopColor="#4A2F08" />
          </linearGradient>

          <linearGradient id="ox-vesper-vigil-brass-face" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DFC068" />
            <stop offset="20%" stopColor="#C99738" />
            <stop offset="60%" stopColor="#9C6F24" />
            <stop offset="100%" stopColor="#6E4812" />
          </linearGradient>
        </defs>

        <path
          d="M 170 8 C 158 8 150 16 150 26 L 150 36 L 190 36 L 190 26 C 190 16 182 8 170 8 Z"
          fill="none"
          stroke="url(#ox-vesper-vigil-brass-grad)"
          strokeWidth="4.5"
        />

        <path
          d="M 28 38 L 312 38 C 318 38 322 42 320 48 L 298 120 C 296 126 290 130 284 130 L 56 130 C 50 130 44 126 42 120 L 20 48 C 18 42 22 38 28 38 Z"
          fill="url(#ox-vesper-vigil-brass-face)"
          stroke="#382206"
          strokeWidth="2.5"
        />

        <path
          d="M 36 46 L 304 46 L 286 122 L 54 122 Z"
          fill="none"
          stroke="#5C3B0E"
          strokeWidth="1.2"
          strokeDasharray="5 3"
        />

        <circle cx="44" cy="54" r="3" fill="#2E1B05" />
        <circle cx="44" cy="54" r="1.2" fill="#DFC068" />
        <circle cx="296" cy="54" r="3" fill="#2E1B05" />
        <circle cx="296" cy="54" r="1.2" fill="#DFC068" />
        <circle cx="62" cy="114" r="3" fill="#2E1B05" />
        <circle cx="62" cy="114" r="1.2" fill="#DFC068" />
        <circle cx="278" cy="114" r="3" fill="#2E1B05" />
        <circle cx="278" cy="114" r="1.2" fill="#DFC068" />

        <text
          x="170"
          y="78"
          textAnchor="middle"
          fill="#241604"
          fontFamily="'Bebas Neue', sans-serif"
          fontSize="18.5"
          letterSpacing="0.22em"
        >
          SET XVI · DESIGNED BY CLAUDE OPUS
        </text>

        <text
          x="170"
          y="100"
          textAnchor="middle"
          fill="#4A2F08"
          fontFamily="'Figtree', sans-serif"
          fontWeight="600"
          fontSize="10"
          letterSpacing="0.28em"
        >
          HERD SENTINEL · AD VESPERUM
        </text>
      </svg>
    </div>
  );
}

export default function Vigil() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <div
      className="th-ox-vesper ox-vesper-vigil"
      style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}
    >
      <div className="ox-vesper-vigil-starfield" aria-hidden="true">
        {STARS.map((star, idx) => (
          <span
            key={idx}
            className="ox-vesper-vigil-star"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`
            }}
          />
        ))}
      </div>

      <div className="ox-vesper-vigil-firefly-layer" aria-hidden="true">
        {FIREFLIES.map((fly) => (
          <div key={fly.id} className={`ox-vesper-vigil-firefly ${fly.className}`}>
            <div className="ox-vesper-vigil-firefly-core" />
          </div>
        ))}
      </div>

      <motion.main
        className="ox-vesper-vigil-main"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.header className="ox-vesper-vigil-header" variants={itemVariants}>
          <div className="ox-vesper-vigil-kicker-row">
            <span className="ox-vesper-vigil-kicker-dot" aria-hidden="true" />
            <span className="ox-vesper-vigil-kicker">THE HERD GUARDIAN</span>
            <span className="ox-vesper-vigil-badge">FACET I · PROTECTION</span>
          </div>

          <div className="ox-vesper-vigil-title-wrap">
            <h1 className="ox-vesper-vigil-h1">VIGIL</h1>
            <p className="ox-vesper-vigil-tagline">
              Standing sentinel at the pasture edge when twilight fades to night.
            </p>
          </div>
        </motion.header>

        <motion.section className="ox-vesper-vigil-hero-stage" variants={itemVariants}>
          <GuardianOxSvg />
        </motion.section>

        <motion.section className="ox-vesper-vigil-content-grid" variants={itemVariants}>
          <div className="ox-vesper-vigil-lede-card">
            <h2 className="ox-vesper-vigil-h2">THE UNBLINKING BULK</h2>
            <p className="ox-vesper-vigil-body">
              As darkness settles over the pasture, the lead ox turns away from the resting herd,
              planting heavy hooves at the fenceline where the timber meets the open grass. Through
              the longest hours of the night, while cows and calves lie quiet in the dew, he remains
              upright — broad brow lowered toward the wind, ears attuned to every rustle of the brush,
              an unyielding bulk between his kin and the shadows.
            </p>
            <p className="ox-vesper-vigil-body">
              Bred through millennia of primal survival and shared labor, his watchfulness is neither
              commanded nor trained; it is the ancient instinct of the herd protector, measured in the
              rhythm of deep breaths and quiet, enduring strength.
            </p>
          </div>

          <aside className="ox-vesper-vigil-fact-card">
            <div className="ox-vesper-vigil-fact-head">
              <span className="ox-vesper-vigil-fact-icon" aria-hidden="true">✦</span>
              <h3 className="ox-vesper-vigil-fact-title">BOVINE SENTINEL INSTINCT</h3>
            </div>
            <p className="ox-vesper-vigil-fact-text">
              In wild and pastoral herds alike, mature lead oxen naturally adopt a sentinel post at
              dusk. They deliberately position their massive bulk along predator corridors, sleeping
              only in brief micro-intervals while maintaining upright muscle tone until morning dawn.
            </p>
            <div className="ox-vesper-vigil-spec-row">
              <div className="ox-vesper-vigil-spec">
                <span className="ox-vesper-vigil-spec-label">STANCE</span>
                <span className="ox-vesper-vigil-spec-val">LOCKED SENTINEL</span>
              </div>
              <div className="ox-vesper-vigil-spec">
                <span className="ox-vesper-vigil-spec-label">WATCH HOUR</span>
                <span className="ox-vesper-vigil-spec-val">DUSK TO DAWN</span>
              </div>
              <div className="ox-vesper-vigil-spec">
                <span className="ox-vesper-vigil-spec-label">POST</span>
                <span className="ox-vesper-vigil-spec-val">HERD BOUNDARY</span>
              </div>
            </div>
          </aside>
        </motion.section>

        <motion.footer className="ox-vesper-vigil-footer" variants={itemVariants}>
          <div className="ox-vesper-vigil-meta">
            <span className="ox-vesper-vigil-meta-edition">OX-VESPER COLLECTION · FOLIO I</span>
            <span className="ox-vesper-vigil-meta-desc">Domestic bovine ethology & nocturnal protective guardianship</span>
          </div>

          <CowbellTagSignature />
        </motion.footer>
      </motion.main>
    </div>
  );
}
