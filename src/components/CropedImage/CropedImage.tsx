import "./CropedImage.scss";

interface CropedImageProps {
  src: string;
  zoom?: number;
  offsetY?: number;
  offsetX?: number;
  width?: string;
  height?: string;
  rotate?: number;
}

const CropedImage = ({
  src,
  zoom = 1,
  offsetY = 1,
  offsetX = 1,
  width = "200px", 
  height = "200px",
  rotate = 0
}: CropedImageProps) => {
  return (
    <div class="sample" style={{
        width,
        height
    }}>
      <img
        class="sample__img"
        src={src}
        style={{
          top: `${-100 * offsetY}px`,
          left: `${-100 * offsetX}px`,
          width: `${100 * zoom}px`,
          transform: `rotate(${rotate}deg)`
        }}
      />
    </div>
  );
};

export default CropedImage;