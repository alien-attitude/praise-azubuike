import { useState } from "react";
import { ImageIcon, MaximizeIcon } from "lucide-react";
import { ImageLightbox } from "./ImageLightbox";

interface ImageGalleryProps {
  images: string[];
}

/**
 * Responsive image gallery. Gracefully renders empty placeholder tiles when
 * no images are supplied. Clicking a real image opens the fullscreen viewer.
 */
export function ImageGallery({ images }: ImageGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Show placeholder tiles when no images are provided yet.
  const hasImages = images.length > 0;
  const tiles = hasImages ? images : new Array(3).fill("");

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {tiles.map((src, i) => {
          const isEmpty = !src;
          return (
            <button
              key={i}
              type="button"
              disabled={isEmpty}
              onClick={() => !isEmpty && setLightboxIndex(i)}
              aria-label={isEmpty ? "Image placeholder" : `Enlarge image ${i + 1}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-primary-soft/10 disabled:cursor-default">
              
              {isEmpty ?
              <span className="flex h-full w-full flex-col items-center justify-center gap-1 text-text-secondary/50">
                  <ImageIcon size={20} />
                  <span className="text-[10px] uppercase tracking-wide">
                    Image
                  </span>
                </span> :

              <>
                  <img
                  src={src}
                  alt={`Project gallery ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                
                  <span className="absolute inset-0 flex items-center justify-center bg-text-primary/0 opacity-0 transition-all duration-300 group-hover:bg-text-primary/30 group-hover:opacity-100">
                    <MaximizeIcon className="text-white" size={22} />
                  </span>
                </>
              }
            </button>);

        })}
      </div>

      {hasImages &&
      <ImageLightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex} />

      }
    </>);

}