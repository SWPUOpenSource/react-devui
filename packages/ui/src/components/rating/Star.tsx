import type { DFormControl } from '../form';

import { isUndefined } from 'lodash';
import { useId, useState } from 'react';

import { usePrefixConfig } from '../../hooks';
import { getClassName } from '../../utils';
import { DTooltip } from '../tooltip';

export interface DStarProps {
  dName?: string;
  dDisabled?: boolean;
  dFormControl?: DFormControl;
  dValue: number;
  dIcon: React.ReactNode;
  dChecked: number | null;
  dHoverValue: number | null;
  dHalf: boolean;
  dTooltip?: (value: number) => React.ReactNode;
  onCheck: (value: number) => void;
  onHoverChange: (value: number) => void;
}

export function DStar(props: DStarProps): JSX.Element | null {
  const { dName, dDisabled, dFormControl, dValue, dIcon, dChecked, dHoverValue, dHalf, dTooltip, onCheck, onHoverChange } = props;

  //#region Context
  const dPrefix = usePrefixConfig();
  //#endregion

  const uniqueId = useId();
  const inputId = `${dPrefix}rating-star-input-${uniqueId}`;
  const halfInputId = `${dPrefix}rating-star-half-input-${uniqueId}`;

  const checked = dValue === dChecked;

  const halfValue = dValue - 0.5;
  const halfChecked = halfValue === dChecked;

  const [tooltipValue, setTooltipValue] = useState<number>(dValue);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <DTooltip dDisabled={isUndefined(dTooltip)} dTitle={dTooltip?.(tooltipValue)}>
      <div
        className={getClassName(`${dPrefix}rating-star`, {
          'is-focus': isFocus,
        })}
      >
        {dHalf && (
          <>
            <input
              {...dFormControl?.inputAttrs}
              id={halfInputId}
              className={getClassName(`${dPrefix}rating-star__input`, `${dPrefix}rating-star__input--half`)}
              type="radio"
              name={dName}
              checked={halfChecked}
              disabled={dDisabled}
              aria-checked={halfChecked}
              data-form-support-input={halfChecked}
              onChange={() => {
                onCheck(halfValue);
              }}
              onFocus={() => {
                setIsFocus(true);
              }}
              onBlur={() => {
                setIsFocus(false);
              }}
              onMouseEnter={() => {
                if (!isUndefined(dTooltip)) {
                  setTooltipValue(halfValue);
                }

                onHoverChange(halfValue);
              }}
            />
            <label
              className={getClassName(`${dPrefix}rating-star__icon`, `${dPrefix}rating-star__icon--half`, {
                'is-checked': halfValue <= (dHoverValue ?? dChecked ?? 0),
              })}
              htmlFor={halfInputId}
            >
              {dIcon}
            </label>
          </>
        )}
        <label
          className={getClassName(`${dPrefix}rating-star__icon`, {
            'is-checked': dValue <= (dHoverValue ?? dChecked ?? 0),
          })}
        >
          <input
            {...dFormControl?.inputAttrs}
            id={inputId}
            className={`${dPrefix}rating-star__input`}
            type="radio"
            name={dName}
            checked={checked}
            disabled={dDisabled}
            aria-checked={checked}
            data-form-support-input={checked}
            onChange={() => {
              onCheck(dValue);
            }}
            onFocus={() => {
              setIsFocus(true);
            }}
            onBlur={() => {
              setIsFocus(false);
            }}
            onMouseEnter={() => {
              if (!isUndefined(dTooltip)) {
                setTooltipValue(dValue);
              }

              onHoverChange(dValue);
            }}
          />
          {dIcon}
        </label>
      </div>
    </DTooltip>
  );
}