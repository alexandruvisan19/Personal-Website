import { memo } from 'react';
import { css } from '@emotion/css';

const Slide = ({ content, width }) => {
  return (
    <div
      css={css`
        height: 100%;
        width: ${width}px;
        background-image: url('${content}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
    />
  );
};

export default memo(Slide);
