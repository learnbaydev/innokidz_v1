// import { useState, useRef, useEffect } from 'react';

// interface OptimizedImageProps {
//   src: string;
//   alt: string;
//   className?: string;
//   loading?: 'lazy' | 'eager';
//   style?: React.CSSProperties;
//   onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
//   priority?: boolean;
// }

// export default function OptimizedImage({
//   src,
//   alt,
//   className = '',
//   loading = 'lazy',
//   style = {},
//   onLoad,
//   priority = false
// }: OptimizedImageProps) {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [hasError, setHasError] = useState(false);
//   const imgRef = useRef<HTMLImageElement>(null);

//   // Create optimized versions of the image
//   const getOptimizedSrc = (originalSrc: string) => {
//     // In a real implementation, you'd have a service that converts images
//     // For now, we'll use the original but with optimization attributes
//     return originalSrc;
//   };

//   const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
//     setIsLoaded(true);
//     if (onLoad) onLoad(e);
//   };

//   const handleError = () => {
//     setHasError(true);
//   };

//   // Intersection Observer for lazy loading performance
//   useEffect(() => {
//     if (!imgRef.current || loading === 'eager' || priority) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           const img = entry.target as HTMLImageElement;
//           if (img.dataset.src) {
//             img.src = img.dataset.src;
//             img.removeAttribute('data-src');
//             observer.unobserve(img);
//           }
//         }
//       },
//       {
//         rootMargin: '50px 0px',
//         threshold: 0.1
//       }
//     );

//     if (imgRef.current) {
//       observer.observe(imgRef.current);
//     }

//     return () => observer.disconnect();
//   }, [loading, priority]);

//   if (hasError) {
//     return (
//       <div
//         className={`${className} bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500 text-sm font-medium`}
//         style={style}
//       >
//         Image unavailable
//       </div>
//     );
//   }

//   return (
//     <div className="relative">
//       {/* Loading placeholder */}
//       {!isLoaded && (
//         <div
//           className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse rounded-inherit ${className}`}
//           style={style}
//         />
//       )}

//       <img
//         ref={imgRef}
//         src={getOptimizedSrc(src)}
//         alt={alt}
//         className={`${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
//         loading={loading}
//         decoding="async"
//         style={{
//           ...style,
//           aspectRatio: style.aspectRatio || 'auto'
//         }}
//         onLoad={handleLoad}
//         onError={handleError}
//         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//       />
//     </div>
//   );
// }
