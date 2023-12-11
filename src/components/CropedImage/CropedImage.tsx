import { createEffect, createSignal } from 'solid-js';
import './CropedImage.scss';

interface CropedImageProps {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  zoom?: number;
  offsetY?: number;
  offsetX?: number;
  width?: string;
  height?: string;
  rotate?: number;
  willChange?: string;
  maxWidth?: string;
}

// eslint-disable-next-line solid/no-destructure
const CropedImage = ({
  src,
  srcSet = '',
  sizes = '',
  alt,
  zoom = 1,
  offsetY = 1,
  offsetX = 1,
  width = '200px',
  height = '200px',
  rotate = 0,
  willChange = 'none',
  maxWidth = '100%',
}: CropedImageProps) => {
  const [rapportWidth, setRapportWidth] = createSignal(1);

  createEffect(() => {
    const windowSize = window.innerWidth;
    const originalSize = 1728;
    if (willChange == 'right') {
      setRapportWidth(1.00006 - (0.00006 * originalSize) / windowSize);
    } else if (willChange == 'left') {
      setRapportWidth(1.86 - 0.0006 * windowSize);
    }
  });

  return (
    <figure
      class="sample"
      style={{
        width,
        height,
        'max-width': maxWidth,
      }}
    >
      <img
        class="sample__img"
        src={src}
        alt={alt}
        srcSet={srcSet}
        sizes={sizes}
        style={{
          top: `${-100 * offsetY}px`,
          left: `${-100 * offsetX * (willChange ? rapportWidth() : 1)}px`,
          width: `${100 * zoom}px`,
          transform: `rotate(${rotate}deg)`,
        }}
      />
    </figure>
  );
};

export default CropedImage;
