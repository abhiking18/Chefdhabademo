import React, { useEffect, useRef } from 'react';

interface TransparentChefMascotProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export const TransparentChefMascot: React.FC<TransparentChefMascotProps> = ({
  src,
  alt,
  className,
  style,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = src;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;

      // Key out pure white or light off-white background pixels (R>225, G>225, B>225)
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        if (r > 225 && g > 225 && b > 225) {
          data[i + 3] = 0; // Set Alpha to 0 (100% Transparent)
        }
      }

      ctx.putImageData(imgData, 0, 0);
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      aria-label={alt}
      className={className}
      style={{
        ...style,
        maxWidth: '100%',
        height: 'auto',
        background: 'transparent',
      }}
    />
  );
};
