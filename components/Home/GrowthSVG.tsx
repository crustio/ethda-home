const color1 = '#fff'
const color2 = '#E08900'
export function GrowthSVG({ className }: { className?: string }) {

  return (
    <svg className={className} viewBox='0 0 582 636' style={{ background: '#000000' }} xmlns='http://www.w3.org/2000/svg'>
      <defs>
        <path width='10' height='10' id='ethda_arrow' d='M0 2L5 8L10 2' strokeLinecap='round' strokeWidth='1.6' />
      </defs>
      <path
        d='M250 30L76 30L76 114M76 210L76 330L223 330M345 330L506 330L506 222M506 120L506 30L333 30'
        stroke={color1}
        strokeWidth='1'
        strokeDasharray='4 4'
        fill='none'
      >
        <animate attributeName='stroke-dashoffset' from='0' to='-80' dur='2s' repeatCount='indefinite' />
      </path>
      <path
        d='M291 260L30 260L30 400M30 470L30 560L62 560M220 560L254 560M291 530L291 352M291 300L291 260L552 260L552 400M552 470L552 560L505 560M350 560L323 560'
        stroke={color2}
        strokeWidth='1'
        strokeDasharray='4 4'
        fill='none'
      >
        <animate attributeName='stroke-dashoffset' from='0' to='-80' dur='2s' repeatCount='indefinite' />
      </path>
      <g transform='translate(263, 2)'>
        <image xlinkHref='/users.svg' width='50' height='50' x='0' y='0' />
        <text textAnchor='middle' x='25' y='75' fontSize='14' fill={color1}>
          Users
        </text>
      </g>
      <use xlinkHref='#ethda_arrow' transform='translate(330, 25) rotate(90,5,5)' stroke={color1} />

      <g transform='translate(52, 130)'>
        <image xlinkHref='/layer2s.svg' width='50' height='50' x='0' y='0' />
        <text textAnchor='middle' x='25' y='75' fontSize='14' fill={color1}>
          Layer2s
        </text>
      </g>
      <use xlinkHref='#ethda_arrow' transform='translate(71, 110)' stroke={color1} />

      <g transform='translate(481, 130)'>
        <image xlinkHref='/datainterface.svg' width='50' height='50' x='0' y='0' />
        <text textAnchor='middle' x='0' y='75' fontSize='14' fill={color1}>
          Data Onchain Interface
        </text>
      </g>
      <use xlinkHref='#ethda_arrow' transform='translate(501, 220) rotate(180,5,5)' stroke={color1} />

      <image xlinkHref='ethDA.png' width='109' height='24' x='236.5' y='316' style={{ background: '#000000' }} />
      <use xlinkHref='#ethda_arrow' transform='translate(220, 325) rotate(-90,5,5)' stroke={color1} />
      <use xlinkHref='#ethda_arrow' transform='translate(286, 292) rotate(0,5,5)' stroke={color2} />
      <use xlinkHref='#ethda_arrow' transform='translate(286, 349) rotate(180,5,5)' stroke={color2} />

      <text x='90' y='56' fill={color1}>
        Tx
      </text>
      <text x='90' y='310' fill={color1}>
        Blobs
      </text>
      <text x='492' y='56' fill={color1} textAnchor='end'>
        Accessible
      </text>
      <text x='492' y='310' fill={color1} textAnchor='end'>
        Agg.Data
      </text>

      <text x='295' y='452' fill={color2}>
        Pos
      </text>

      <g transform='translate(5, 420)'>
        <image xlinkHref='/y-users.svg' width='50' height='50' x='0' y='0' />
        <text x='70' y='32' fontSize='14' fill={color2}>
          Benefit-Sharing
        </text>
      </g>
      <use xlinkHref='#ethda_arrow' transform='translate(25, 392) rotate(0,5,5)' stroke={color2} />
      <use xlinkHref='#ethda_arrow' transform='translate(547, 392) rotate(0,5,5)' stroke={color2} />
      <g transform='translate(527, 420)'>
        <image xlinkHref='/y-users.svg' width='50' height='50' x='0' y='0' />
        <text x='-20' y='32' fontSize='14' fill={color2} textAnchor='end'>
          Protocal Incentive
        </text>
      </g>

      <use xlinkHref='#ethda_arrow' transform='translate(60, 555) rotate(-90,5,5)' stroke={color2} />
      <use xlinkHref='#ethda_arrow' transform='translate(250, 555) rotate(-90,5,5)' stroke={color2} />
      <use xlinkHref='#ethda_arrow' transform='translate(322, 555) rotate(90,5,5)' stroke={color2} />
      <use xlinkHref='#ethda_arrow' transform='translate(500, 555) rotate(90,5,5)' stroke={color2} />

      <g transform='translate(80, 545)'>
        <rect width='140' height='30' x='0' y='0' rx='15' stroke={color2} />
        <text x='70' y='20' fontSize='14' fill={color2} textAnchor='middle'>
          Dual-Stake
        </text>
        <text x='70' y='60' fontSize='14' fill={color2} textAnchor='middle'>
          L2 Native Token
        </text>
      </g>
      <g transform='translate(350, 545)'>
        <rect width='140' height='30' x='0' y='0' rx='15' stroke={color2} />
        <text x='70' y='20' fontSize='14' fill={color2} textAnchor='middle'>
          PoS Stake
        </text>
        <text x='70' y='60' fontSize='14' fill={color2} textAnchor='middle'>
          Restake ETH
        </text>
      </g>

      <g transform='translate(267, 536)'>
        <image xlinkHref='/das.svg' width='50' height='50' x='0' y='0' />
        <text x='25' y='70' fontSize='14' fill={color2} textAnchor='middle'>
          DAS Nodes
        </text>
      </g>
    </svg>
  )
}
