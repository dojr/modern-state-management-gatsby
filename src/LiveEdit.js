import React from 'react';
import styled, { css } from 'styled-components';
import * as polished from 'polished';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

export const background = '#42374a';
export const foreground = '#f8f8f2';
export const red = '#ff5555';

export const blue = polished.lighten(0.1, '#d1b0dd');
export const lightGrey = polished.darken(0.06, '#42374a');

const StyledProvider = styled(LiveProvider)`
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: ${polished.rem(100)};
`;

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const column = css`
  width: 44vw;
  max-width: 44vw;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled.div`
  background: ${lightGrey};
  font-family: 'Source Code Pro', monospace;
  font-size: ${polished.rem(18)};
  height: ${polished.rem(700)};
  max-height: ${polished.rem(700)};
  overflow: auto;
  caret-color: white;
  ${column};
  * > textarea:focus {
    outline: none;
  }
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 0.5rem;
  background: white;
  color: black;
  height: auto;
  overflow: hidden;
  ${column};
`;

const StyledError = styled(LiveError)`
  display: block;
  padding: ${polished.rem(8)};
  background: ${red};
  color: ${foreground};
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: 'Source Code Pro', monospace;
`;

const LiveEdit = ({ noInline, code }) => (
  <StyledProvider code={code} noInline={noInline}>
    <LiveWrapper>
      <StyledEditor>
        <LiveEditor />
      </StyledEditor>
      <StyledPreview />
    </LiveWrapper>

    <StyledError />
  </StyledProvider>
);

export default LiveEdit;