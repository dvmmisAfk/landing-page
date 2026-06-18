import { useEffect, useState } from 'react';
import TextPressure from './TextPressure';

const AXIS_DEFAULTS = {
  weightMin: 600,
  weightMax: 700,
  width: false,
  italic: false,
  standardFont: true,
  weight: false,
  fisheye: true,
  fisheyeMaxScale: 1.32,
  fisheyeRadius: 110,
  fisheyeSmoothing: 9,
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
};

const VARIANTS = {
  section: {
    minFontSize: 26,
    maxFontSize: 40,
    textColor: '#13262B',
    textAlign: 'left',
    tag: 'h2',
    flex: false,
    ...AXIS_DEFAULTS,
  },
  page: {
    minFontSize: 28,
    maxFontSize: 40,
    textColor: '#13262B',
    textAlign: 'left',
    tag: 'h1',
    flex: false,
    ...AXIS_DEFAULTS,
  },
  app: {
    minFontSize: 22,
    maxFontSize: 33,
    textColor: '#FFFFFF',
    textAlign: 'left',
    tag: 'h2',
    flex: false,
    weight: false,
    fisheye: true,
    fisheyeMaxScale: 1.28,
    fisheyeRadius: 96,
    fisheyeSmoothing: 9,
    standardFont: true,
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  },
  partner: {
    minFontSize: 24,
    maxFontSize: 30,
    textColor: '#13262B',
    textAlign: 'left',
    tag: 'h2',
    flex: false,
    ...AXIS_DEFAULTS,
  },
  content: {
    minFontSize: 22,
    maxFontSize: 28,
    textColor: '#13262B',
    textAlign: 'left',
    tag: 'h2',
    flex: false,
    weight: false,
    fisheye: true,
    fisheyeMaxScale: 1.3,
    fisheyeRadius: 100,
    fisheyeSmoothing: 9,
    standardFont: true,
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
  },
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return reduced;
}

export default function PressureHeading({
  text,
  as,
  className = '',
  variant = 'section',
  minFontSize,
  maxFontSize,
  textColor,
  textAlign,
  flex,
}) {
  const reducedMotion = usePrefersReducedMotion();
  const preset = VARIANTS[variant] ?? VARIANTS.section;
  const Tag = as ?? preset.tag;

  if (reducedMotion) {
    return (
      <Tag className={`pressure-heading pressure-heading--static ${className}`.trim()}>
        {text}
      </Tag>
    );
  }

  return (
    <div className={`pressure-heading pressure-heading--${variant} ${className}`.trim()}>
      <TextPressure
        text={text}
        tag={Tag}
        flex={flex ?? preset.flex}
        uppercase={false}
        alpha={false}
        stroke={false}
        width={preset.width ?? true}
        weight={preset.weight ?? true}
        italic={preset.italic ?? true}
        standardFont={preset.standardFont ?? false}
        fisheye={preset.fisheye ?? false}
        fisheyeMaxScale={preset.fisheyeMaxScale}
        fisheyeRadius={preset.fisheyeRadius}
        fisheyeSmoothing={preset.fisheyeSmoothing}
        fontFamily={preset.fontFamily}
        fontUrl={preset.fontUrl}
        textColor={textColor ?? preset.textColor}
        textAlign={textAlign ?? preset.textAlign}
        minFontSize={minFontSize ?? preset.minFontSize}
        maxFontSize={maxFontSize ?? preset.maxFontSize}
        weightMin={preset.weightMin}
        weightMax={preset.weightMax}
        widthMin={preset.widthMin}
        widthMax={preset.widthMax}
        transformOrigin="left top"
        className="pressure-heading-text"
      />
    </div>
  );
}
