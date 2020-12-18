import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const calculateFilledBG = ({
  min,
  max,
  value,
  theme,
  filled,
  filledFromCenter,
}) => {
  if (!filled) return theme.my.colors.primaryLight;
  const percentage = 100 * ((value - min) / (max - min));

  if (filledFromCenter) {
    return `linear-gradient(
      90deg,
      ${theme.my.colors.primaryLight} ${percentage < 50 ? percentage : 50}%,
      ${theme.my.colors.accent} ${(percentage < 50 ? percentage : 50) + 0.1}%,
      ${theme.my.colors.accent} ${percentage < 50 ? 50 : percentage}%,
      ${theme.my.colors.primaryLight} ${(percentage < 50 ? 50 : percentage) + 0.1}%
    )`;
  }

  return `linear-gradient(
    90deg,
    ${theme.my.colors.accent} ${percentage}%,
    ${theme.my.colors.primaryLight} ${percentage + 0.1}%
  )`;
};

const RangeInput = styled.input`
  appearance: none;
  width: 100%;
  height: 3px;
  border-radius: 4px;
  background: ${(props) => calculateFilledBG(props)};
  outline: none;
  opacity: .9;
  transition: opacity .2s;
  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    appearance: none;
    width: ${(props) => (props.small ? 15 : 25)}px;
    height: ${(props) => (props.small ? 15 : 25)}px;;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: ${(props) => (props.small ? 15 : 25)}px;;
    height: ${(props) => (props.small ? 15 : 25)}px;;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
  }
`;

/**
 * Range Slider Component
 */
function RangeSlider({
  className,
  minValue,
  maxValue,
  value,
  small,
  onChangeHandler,
  filled,
  filledFromCenter,
  step,
}) {
  const ref = useRef(null);

  function onChange(e) {
    if (onChangeHandler) onChangeHandler(e.target.value);
  }

  /**
   * iOS "Polyfill" for click on range inputs.
   *
   * https://stackoverflow.com/a/59941311
   *
   * @param e
   */
  function onClick(e) {
    if (onChangeHandler && navigator.platform.match(/iPhone|iPod|iPad/)) {
      const { left, right } = ref.current.getBoundingClientRect();
      const val = (e.pageX - left) / (right - left);
      const segment = 1 / (maxValue - 1);
      const segmentArr = [];

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i <= maxValue; i++) {
        segmentArr.push(segment * i);
      }

      const clickedValue = [...segmentArr].indexOf(
        segmentArr.sort((a, b) => (
          Math.abs(val - a) - Math.abs(val - b)
        ))[0],
      );

      onChangeHandler(clickedValue + 1);
    }
  }

  return (
    <div className={className}>
      <RangeInput
        type="range"
        min={minValue}
        max={maxValue}
        value={value}
        small={small}
        filled={filled}
        step={step}
        filledFromCenter={filledFromCenter}
        onChange={onChange}
        onClick={onClick}
        ref={ref}
      />
    </div>
  );
}

RangeSlider.defaultProps = {
  className: '',
  minValue: 1,
  maxValue: 100,
  value: 50,
  small: false,
  onChangeHandler: () => {},
  filled: false,
  filledFromCenter: false,
  step: 1,
};

RangeSlider.propTypes = {
  className: PropTypes.string,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  value: PropTypes.number,
  small: PropTypes.bool,
  onChangeHandler: PropTypes.func,
  filled: PropTypes.bool,
  filledFromCenter: PropTypes.bool,
  step: PropTypes.number,
};

export default RangeSlider;
