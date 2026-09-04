import './ankole.css'

export default function Ankole() {
  return (
    <div className="th-ox-epoch ox-epoch-k-page">
      <div className="ox-epoch-k-frame" aria-hidden="true" />

      <div className="ox-epoch-k-top">
        <p className="ox-epoch-k-kicker">Nkore · The Great Lakes of Africa</p>
        <h1 className="ox-epoch-k-h1">Crown of Horns</h1>
      </div>

      <div className="ox-epoch-k-hero">
        <svg
          className="ox-epoch-k-art"
          viewBox="0 0 760 720"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          <g className="ox-epoch-k-rings">
            <circle cx="380" cy="340" r="150" fill="none" stroke="#C99B3F" strokeOpacity="0.22" strokeWidth="2" />
            <circle cx="380" cy="340" r="192" fill="none" stroke="#C99B3F" strokeOpacity="0.14" strokeWidth="1.5" />
            <circle
              className="ox-epoch-k-spin"
              cx="380"
              cy="340"
              r="234"
              fill="none"
              stroke="#C99B3F"
              strokeOpacity="0.12"
              strokeWidth="2"
              strokeDasharray="3 14"
            />
            <circle cx="380" cy="340" r="278" fill="none" stroke="#C99B3F" strokeOpacity="0.07" strokeWidth="1.5" />
          </g>

          <g className="ox-epoch-k-head">
            <path
              d="M364,242 C270,250 190,270 140,240 C112,224 98,200 94,172 C104,196 118,216 140,232 C186,262 270,286 364,290 Z"
              fill="#E7DCC0"
              stroke="#241608"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <g transform="translate(760,0) scale(-1,1)">
              <path
                d="M364,242 C270,250 190,270 140,240 C112,224 98,200 94,172 C104,196 118,216 140,232 C186,262 270,286 364,290 Z"
                fill="#D9CBA8"
                stroke="#241608"
                strokeWidth="5"
                strokeLinejoin="round"
              />
            </g>
            <ellipse cx="322" cy="252" rx="24" ry="17" transform="rotate(-12 322 252)" fill="#C99B3F" stroke="#241608" strokeWidth="4" />
            <ellipse cx="438" cy="252" rx="24" ry="17" transform="rotate(12 438 252)" fill="#B48530" stroke="#241608" strokeWidth="4" />

            <path
              d="M310,296 C276,290 244,294 222,308 C244,318 278,322 306,314 Z"
              fill="#E7DCC0"
              stroke="#241608"
              strokeWidth="4.5"
              strokeLinejoin="round"
            />
            <g transform="translate(760,0) scale(-1,1)">
              <path
                d="M310,296 C276,290 244,294 222,308 C244,318 278,322 306,314 Z"
                fill="#E7DCC0"
                stroke="#241608"
                strokeWidth="4.5"
                strokeLinejoin="round"
              />
            </g>

            <path
              d="M312,246 C296,300 292,352 306,392 C316,424 334,448 356,462 L404,462 C426,448 444,424 454,392 C468,352 464,300 448,246 Z"
              fill="#EFE5CB"
              stroke="#241608"
              strokeWidth="5"
              strokeLinejoin="round"
            />

            <path d="M338,252 C344,230 358,220 380,218 C402,220 416,230 422,252 C406,240 394,236 380,236 C366,236 354,240 338,252 Z" fill="#241608" />

            <g className="ox-epoch-k-eye">
              <ellipse cx="334" cy="346" rx="14" ry="10" transform="rotate(-10 334 346)" fill="#1E1208" />
              <circle cx="339" cy="342" r="2.8" fill="#F5EDD8" />
            </g>
            <g className="ox-epoch-k-eye">
              <ellipse cx="426" cy="346" rx="14" ry="10" transform="rotate(10 426 346)" fill="#1E1208" />
              <circle cx="421" cy="342" r="2.8" fill="#F5EDD8" />
            </g>

            <path
              d="M318,452 C312,488 322,520 344,536 C362,548 398,548 416,536 C438,520 448,488 442,452 C420,462 340,462 318,452 Z"
              fill="#8A6A58"
              stroke="#241608"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <path d="M350,488 C344,494 344,502 350,508 C355,503 355,493 350,488 Z" fill="#241608" />
            <path d="M410,488 C416,494 416,502 410,508 C405,503 405,493 410,488 Z" fill="#241608" />
            <path d="M380,512 C384,518 384,524 380,528" stroke="#241608" strokeWidth="4" fill="none" strokeLinecap="round" />
            <path d="M330,436 C338,442 348,445 358,446" stroke="#241608" strokeWidth="3" fill="none" opacity="0.5" strokeLinecap="round" />
            <path d="M430,436 C422,442 412,445 402,446" stroke="#241608" strokeWidth="3" fill="none" opacity="0.5" strokeLinecap="round" />
          </g>
        </svg>
      </div>

      <div className="ox-epoch-k-lede">
        <p>
          In the highlands between Lakes Edward and Kivu, cattle are ledger, bank and
          aristocracy at once. The Ankole cow is the dynasty itself: her horns are polished
          with butter and ash, and the praise-poems sung to her outrun the memory of the
          kings who gave her their name.
        </p>
      </div>

      <ul className="ox-epoch-k-stats">
        <li><strong>2.4 m</strong><span>horn span, tip to tip</span></li>
        <li><strong>first</strong><span>the calf drinks, the herder waits</span></li>
        <li><strong>cows</strong><span>wealth is counted, never spent</span></li>
      </ul>

      <p className="ox-epoch-k-note">
        Herders sleep among the herd. A cow's name is inherited like a title, and to kill
        one without rite was once a crime against the crown.
      </p>

      <div className="ox-epoch-k-sig" role="note" aria-label="Signature">
        <span>SET 03 · DESIGNED BY OMEN ALPHA</span>
      </div>
    </div>
  )
}
