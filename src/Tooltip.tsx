import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import Tippy from '@tippy.js/react';

// TODO: Can this be imported? 
// Copied type from Tippy, maybe this could be imported??
type Placement = 'auto-start'
| 'auto'
| 'auto-end'
| 'top-start'
| 'top'
| 'top-end'
| 'right-start'
| 'right'
| 'right-end'
| 'bottom-end'
| 'bottom'
| 'bottom-start'
| 'left-end'
| 'left'
| 'left-start';

export interface ITooltipProps {
  content: string,
  children: any,
  placement: Placement
}

const GlobalStyle = createGlobalStyle`
  .tippy-backdrop {
    background-color: rgb(21, 24, 25);
  }
  .tippy-tooltip.update-theme {
    background-color: #5da700;
    border-radius: 2px;
    padding: 0;
    .tippy-arrow {
      border-bottom-color: #5da700;
    }
  }
`;

export default function Tooltip(props: ITooltipProps ) {
  return (
    <>
      <GlobalStyle />
      <Tippy delay={[500, 0]} content={props.content} placement={props.placement}>
        <span>
          {props.children}
        </span>
      </Tippy>
    </>
  );
}
