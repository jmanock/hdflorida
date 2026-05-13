"use client";

import Image, { type ImageProps } from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

const DEFAULT_FALLBACK_SRC = "/images/fallbacks/florida-resort-placeholder.svg";

type SafeImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  fallbackSrc?: string;
};

export function SafeImage({
  src,
  alt,
  fallbackSrc = DEFAULT_FALLBACK_SRC,
  onError,
  ...props
}: SafeImageProps) {
  const pathname = usePathname();
  const [imageSrc, setImageSrc] = useState(src);
  const [hasTrackedFallback, setHasTrackedFallback] = useState(false);

  return (
    <Image
      {...props}
      src={imageSrc}
      alt={alt}
      onError={(event) => {
        onError?.(event);

        if (imageSrc === fallbackSrc) {
          return;
        }

        setImageSrc(fallbackSrc);

        if (!hasTrackedFallback) {
          setHasTrackedFallback(true);
          trackEvent("image_fallback_used", {
            image_src: src,
            page_path: pathname
          });
        }
      }}
    />
  );
}
