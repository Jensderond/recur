import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import Tippy from '@tippy.js/react';

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

const Tooltip = ({ children, style = {}, content, ...props }) => (
  <React.Fragment>
    <GlobalStyle />
    <Tippy delay={[500, 0]} content={content} {...props}>
      <span
        style={{
          ...style,
        }}
      >
        {children}
      </span>
    </Tippy>
  </React.Fragment>
);

export default Tooltip;
