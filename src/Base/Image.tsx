import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {ComponentBaseProps} from "../Common/Interfaces";

interface ImageProps extends ComponentBaseProps {
    src: string;
    alt?: string;
    objectFit?: 'contain' | 'fill' | 'cover' | 'none' | 'scale-down';
    onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
    onError?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
    wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
    imageProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}

export function Image({
                          className,
                          src,
                          alt = 'not found',
                          objectFit = 'contain',
                          onLoad = () => null,
                          onError = () => null,
                          wrapperProps = {},
                          imageProps = {},
                      }: ImageProps) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isValidSrc, setIsValidSrc] = useState(!!src);
    const imageRef = useRef<HTMLImageElement>(null);

    const showImage = (loadEvent: React.SyntheticEvent<HTMLImageElement, Event> | null = null) => {
        loadEvent?.persist();
        setImageLoaded(true);
        loadEvent && onLoad(loadEvent);
    };

    const handleError = (errorEvent: React.SyntheticEvent<HTMLImageElement, Event> | null = null) => {
        errorEvent?.persist();
        setIsValidSrc(false);
        errorEvent && onError(errorEvent);
    };

    useEffect(() => {
        // if (isValidSrc) {
        //   setSrc(imageRef.current);
        // }
        if (imageRef.current && imageRef.current.complete) {
            showImage();
        }
    }, [isValidSrc, src]);

    return (
        <SmoothImageWrapper {...wrapperProps}>
            {isValidSrc ? (
                <img
                    ref={imageRef}
                    className={`${className} smooth-image img-${imageLoaded ? 'visible' : 'hidden'}`}
                    style={{objectFit}}
                    src={src}
                    alt={alt}
                    onLoad={showImage}
                    onError={handleError}
                    {...imageProps}
                />
            ) : (
                <div className="smooth-no-image">{alt}</div>
            )}
            {isValidSrc && !imageLoaded && <SmoothPreloader/>}
        </SmoothImageWrapper>
    );
};

const SmoothImageWrapper = styled.div`
    background-color: #203a41;
    position: relative;

    .smooth-image {
        transition: opacity 1s;
        background-color: #203a41;
    }

    .smooth-no-image {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #203a41;
        text-transform: capitalize;
    }

    .img-visible {
        opacity: 1;
    }

    .img-hidden {
        opacity: 0;
    }
`;

const SmoothPreloader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #203a41;
    animation: load-anim 2s ease-in-out 0s infinite reverse forwards;

    @keyframes load-anim {
        0% {
            background-color: #203a41;
        }
        50% {
            background-color: #1c3036;
        }
        100% {
            background-color: #203a41;
        }
    }
`;
