import "./cropImage.scss";

interface menuCropedImage {
  src: string;
  zoom?: number;
  offsetY?: number;
  offsetX?: number;
  width?: number;
  height?: number
}

const CropedImage = ({
  src,
  zoom = 1,
  offsetY = 1,
  offsetX = 1,
  width = 200, 
  height = 200
}: menuCropedImage) => {
  return (
    <div class="sample" style={{
        width: `${width}px`,
        height: `${height}px`
    }}>
      <img
        class="sample__img"
        src={src}
        style={{
          top: `${-100 * offsetY}px`,
          left: `${-100 * offsetX}px`,
          width: `${100 * zoom}px`,
        }}
      />
    </div>
  );
};

export default CropedImage;
