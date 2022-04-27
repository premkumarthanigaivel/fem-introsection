/* eslint-disable @next/next/no-img-element */
import MuiPopover from "@mui/material/Popover"
import styled from "styled-components"

const PopoverLink = styled("span")`
  color: hsl(0, 0%, 41%);
  font-size: 14px;
`

const PopoverContent = styled(MuiPopover)`
  .MuiPaper-root {
    padding: 20px;
  }

  div:not(:last-child) {
    margin-bottom: 13px;
  }

  img {
    vertical-align: bottom;
  }
`

const PopoverDropdown = ({
  anchorEl,
  setAnchorEl,
  linkText,
  popoverContent,
}) => {
  const handlePopoverOpen = event => {
    console.log("event: ", event)
    setAnchorEl(event.currentTarget)
    // setAnchorEl({ top: event.target.offsetTop, left: event.target.offsetLeft })
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  return (
    <>
      <PopoverLink
        onMouseOver={handlePopoverOpen}
        onMouseOut={handlePopoverClose}
      >
        {linkText}&nbsp;
        {!open ? (
          <img src="/icon-arrow-down.svg" alt="feature open" />
        ) : (
          <img src="/icon-arrow-up.svg" alt="feature close" />
        )}
      </PopoverLink>
      <PopoverContent
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        // anchorReference="anchorPosition"
        // anchorPosition={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {popoverContent}
      </PopoverContent>
    </>
  )
}

export default PopoverDropdown
