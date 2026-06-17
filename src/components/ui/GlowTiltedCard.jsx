import BorderGlow from './BorderGlow';
import { ContentTiltedCard } from './TiltedCard';

const AGEWELL_GLOW = {
  edgeSensitivity: 28,
  glowColor: '192 58 40',
  borderRadius: 10,
  glowRadius: 32,
  glowIntensity: 0.85,
  coneSpread: 24,
  animated: false,
  colors: ['#177B96', '#B5DDE2', '#38bdf8'],
  fillOpacity: 0.32,
};

export function GlowTiltedCard({
  children,
  className,
  backgroundColor = '#FFFFFF',
  rotateAmplitude = 10,
  scaleOnHover = 1.02,
  glowProps = {},
}) {
  return (
    <ContentTiltedCard
      className={className}
      rotateAmplitude={rotateAmplitude}
      scaleOnHover={scaleOnHover}
    >
      <BorderGlow
        className="glow-tilted-surface"
        backgroundColor={backgroundColor}
        {...AGEWELL_GLOW}
        {...glowProps}
      >
        {children}
      </BorderGlow>
    </ContentTiltedCard>
  );
}
