// @ts-nocheck

import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled, { keyframes } from 'styled-components'

const spinAnim = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(720deg);
  }
`

const SpinnerElement = styled.div`
  display: inline-flex;
  animation: ${spinAnim} 1.5s infinite linear;
`

const SvgElement = styled.svg`
  ${({ size }) => size === 'Small' ? 'height: 15px' : size === 'Medium' ? 'height: 35px' : size === 'Large' ? 'height: 60px' : 'height: 35px'};
  ${({ color }) => color === 'Default' ? 'filter: grayscale(1);' : ''}
  width: auto;
`

export function Spinner ({ className, size, color, ...props }: InferProps<typeof Spinner.propTypes>) {
  return (
      <SpinnerElement
          className={['Misc__Spinner', `Misc__Spinner--${color}`, `Misc__Spinner--${size}`, className].join(' ')}
          {...props}
      >
        <SvgElement size={size} color={color} width="73px" height="73px" viewBox="0 0 73 73" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
          <defs>
            <linearGradient x1="93.0928096%" y1="52.7734375%" x2="68.5133398%" y2="119.326007%" id="linearGradient-1">
              <stop stopColor="#0A84FF" stopOpacity="0" offset="0%"></stop>
              <stop stopColor="#0A84FF" offset="69.3698182%"></stop>
              <stop stopColor="#0A84FF" offset="100%"></stop>
              <stop stopColor="#2484C6" stopOpacity="0.00477766951" offset="100%"></stop>
              <stop stopColor="#2484C6" stopOpacity="0" offset="100%"></stop>
              <stop stopColor="#2484C6" stopOpacity="0" offset="100%"></stop>
            </linearGradient>
            <rect id="path-2" x="0" y="0" width="48" height="60"></rect>
          </defs>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Shape" transform="translate(-5.000000, -1.000000)">
              <path
                  d="M41.8,73.8 C21.9,73.8 5.8,57.7 5.8,37.8 C5.8,18.1 21.6,2.2 41.1,1.8 C41.3,1.8 41.4,1.8 41.4,1.8 C41.5,1.8 41.7,1.8 41.8,1.8 C44.6,2.2 46.8,4.5 46.8,7.3 C46.8,10.1 44.6,12.5 41.8,12.7 C28,12.8 16.8,24 16.8,37.8 C16.8,51.6 28,62.8 41.8,62.8 C55.6,62.8 66.8,51.6 66.8,37.8 L77.8,37.8 C77.8,57.7 61.7,73.8 41.8,73.8 Z"
                  fill="url(#linearGradient-1)"></path>
              <mask id="mask-3" fill="white">
                <use xlinkHref="#path-2"></use>
              </mask>
              <g id="Mask"></g>
              <path
                  d="M41.8,73.8 C21.9,73.8 5.8,57.7 5.8,37.8 C5.8,18.1 21.6,2.2 41.1,1.8 C41.3,1.8 41.4,1.8 41.4,1.8 C41.5,1.8 41.7,1.8 41.8,1.8 C44.6,2.2 46.8,4.5 46.8,7.3 C46.8,10.1 44.6,12.5 41.8,12.7 C28,12.8 16.8,24 16.8,37.8 C16.8,51.6 28,62.8 41.8,62.8 C55.6,62.8 66.8,51.6 66.8,37.8 L77.8,37.8 C77.8,57.7 61.7,73.8 41.8,73.8 Z"
                  fill="#0A84FF" mask="url(#mask-3)"></path>
            </g>
          </g>
        </SvgElement>
      </SpinnerElement>
  )
}

Spinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['Default', 'Blue']),
  size: PropTypes.oneOf(['Small', 'Medium', 'Large']),
  props: PropTypes.any
}

Spinner.defaultProps = {
  size: 'Medium',
  color: 'Default'
}
