import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { InlineIcon } from '@iconify/react';
import CaretIcon from '@iconify/icons-ion/caret-down-outline';

const SummaryContainer = styled.div`
  display: flex;
  min-height: 44px;
  padding-left:  ${(props) => (props.removePaddingLeft ? 0 : '18px')};
  padding-right: 18px;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const SummaryIcon = styled(InlineIcon)`
  transform: rotate(${(props) => (props.open ? 180 : 0)}deg) !important;
  transition: transform 200ms ease;
`;

const CollapsibleContainer = styled.div`
  padding-left:  ${(props) => (props.removePaddingLeft ? 0 : '18px')};
  padding-right: 18px;
  min-height: 0;
  height: ${(props) => (props.open ? 'auto' : '0px')};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  overflow: ${(props) => (props.open ? 'visible' : 'hidden')};
  transition: height 200ms ease;
`;

/**
 * Accordion component.
 */
function Accordion({
  className, children, summary, removePaddingLeft,
}) {
  const [open, setOpen] = useState(false);

  function onSummaryClickHandler() {
    setOpen(!open);
  }

  return (
    <div className={`my-accordion ${className}`}>
      <SummaryContainer
        onClick={onSummaryClickHandler}
        role="button"
        tabIndex="0"
        aria-expanded={open}
        removePaddingLeft={removePaddingLeft}
      >
        {summary}
        <SummaryIcon icon={CaretIcon} open={open} />
      </SummaryContainer>
      <CollapsibleContainer
        open={open}
        removePaddingLeft={removePaddingLeft}
      >
        {children}
      </CollapsibleContainer>
    </div>
  );
}

Accordion.defaultProps = {
  className: '',
  children: null,
  summary: null,
  removePaddingLeft: false,
};

Accordion.propTypes = {
  /**
   * Classname of the surrounding div
   */
  className: PropTypes.string,
  /**
   * Content displayed in the collapsible container.
   */
  children: PropTypes.node,
  /**
   * Content displayed in the summary container.
   */
  summary: PropTypes.node,
  removePaddingLeft: PropTypes.bool,
};

export default Accordion;
