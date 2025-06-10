/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import styled from "styled-components"
import MuiButton from "@mui/material/Button"
import PopoverDropdown from "components/PopoverDropdown"
import Drawer from "@mui/material/Drawer"

const MainContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
`

const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: hsl(0, 0%, 41%);
`

const MainImage = styled.div``

const NavBar = styled.nav`
  align-self: center;
  justify-self: start;
  margin-bottom: 5px;

  > * {
    margin-left: 20px;
  }
`
const Button = styled(MuiButton)`
  text-transform: none;
  background-color: ${props => props.bgColor && props.bgColor};
  color: ${props => props.textColor && props.textColor};
  font-weight: ${props => props.textWeight && props.textWeight} !important;
  border-color: ${props => props.borderColor && props.borderColor} !important;
  border-radius: 10px;
`

const Customers = styled.div`
  img {
    margin-left: 20px;
  }
`

const Authentication = styled.div`
  align-self: center;
  justify-self: end;
  margin-bottom: 5px;
  margin-right: 50px;
  button {
    margin-left: 10px;
  }
`

const Brand = styled.img``
const HamMenu = styled.img`
  align-self: center;
  margin-bottom: 8px;
`

const Header = styled.div``
const CatchyWord = styled.h1`
  font-size: 84px;
  span:after {
    content: "\\a";
    white-space: pre;
  }

  @media (max-width: 700px) {
    span:after {
      content: " ";
    }
  }
`

const DrawerContainer = styled.div`
  position: relative;
  width: 80vw;

  ${NavBar} {
    margin-top: 50px;
    display: flex;
    flex-flow: column;
  }
`

const LearnMoreButton = styled(Button)`
  align-self: flex-start;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr 1fr;
  grid-template-rows: 100px;

  ${Header} {
    grid-area: 1 / 1 / 1 / 4;
    display: flex;

    ${Brand} {
      margin-left: 27px;
      align-self: center;
    }

    ${NavBar} {
      margin-left: 22px;
    }

    ${Authentication} {
      margin-left: auto;
    }

    ${HamMenu} {
      display: none;
    }

    @media (max-width: 700px) {
      justify-content: space-between;

      ${HamMenu} {
        display: block;
        margin-right: 15px;
      }
      ${NavBar},${Authentication} {
        display: none;
      }
    }
  }

  ${MainContent} {
    grid-area: 2 / 2 / 2 / 2;
  }

  ${MainImage} {
    grid-area: 2 / 3 / 2 / 3;
  }

  @media (max-width: 700px) {
    ${CatchyWord} {
      margin-top: 10px;
      font-size: 37px;
      align-self: center;
    }
    ${Brand} {
      margin-left: 27px;
      align-self: center;
    }
    ${MainImage} {
      grid-area: 2 / 1 / 2 / 4;
    }
    ${MainContent} {
      grid-area: 3 / 1 / 3 / 4;
      > * {
        margin-top: 20px;
      }
    }
    ${Description} {
      margin: 8px 26px;
    }
    ${LearnMoreButton} {
      align-self: center;
    }
  }
`

const MenuItem = styled.div`
  color: hsl(0, 0%, 41%);
  font-size: 14px;
  display: ${props => (props.navMenu ? "inline" : "block")};
`

const featuresMenu = [
  { imgName: "icon-todo", title: "Todolist" },
  { imgName: "icon-calendar", title: "Calendar" },
  { imgName: "icon-reminders", title: "Reminders" },
  { imgName: "icon-planning", title: "Planning" },
]

const companyMenu = [
  { title: "History" },
  { title: "Our Team" },
  { title: "Blog" },
]

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorEl1, setAnchorEl1] = useState(null)
  const [showDrawer, setShowDrawer] = useState(false)

  function getPopoverMenu(popoverContent) {
    return popoverContent.map((menu, id) => (
      <MenuItem key={id}>
        {menu.imgName && <img src={`/${menu.imgName}.svg`} alt={menu.title} />}
        &nbsp; {menu.title}
      </MenuItem>
    ))
  }

  return (
    <>
      <Head>
        <title>Snap</title>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Container>
        <Header>
          <Brand src="/logo.svg" alt="brand logo" />
          <NavBar>
            <PopoverDropdown
              anchorEl={anchorEl}
              setAnchorEl={setAnchorEl}
              linkText="Features"
              popoverContent={getPopoverMenu(featuresMenu)}
            />
            <PopoverDropdown
              anchorEl={anchorEl1}
              setAnchorEl={setAnchorEl1}
              linkText="Company"
              popoverContent={getPopoverMenu(companyMenu)}
            />
            <MenuItem navMenu>Careers</MenuItem>
            <MenuItem navMenu>About</MenuItem>
          </NavBar>
          <Authentication>
            <Button variant="text" textColor="hsl(0, 0%, 41%)" textWeight="700">
              Login
            </Button>
            <Button
              variant="outlined"
              textColor="hsl(0, 0%, 41%)"
              textWeight="700"
              borderColor="hsl(0, 0%, 41%)"
            >
              Register
            </Button>
          </Authentication>
          <HamMenu
            src="/icon-menu.svg"
            alt="hammenu"
            width="32px"
            height="18px"
            onClick={() => {
              setShowDrawer(true)
            }}
          />
        </Header>
        <MainContent>
          <CatchyWord>
            <span>Make</span>remote work
          </CatchyWord>
          <Description>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </Description>
          <LearnMoreButton
            variant="contained"
            color="secondary"
            size="large"
            bgColor="black"
          >
            Learn more
          </LearnMoreButton>
          <Customers>
            <img src="/client-databiz.svg" alt="databiz logo" />
            <img src="/client-audiophile.svg" alt="v logo" />
            <img src="/client-meet.svg" alt="meet logo" />
            <img src="/client-maker.svg" alt="maker logo" />
          </Customers>
        </MainContent>
        <MainImage>
          <Image
            src="/image-hero-mobile.png"
            alt="remote work"
            layout="intrinsic"
            width="400"
            height="550"
          />
        </MainImage>
        <Drawer
          anchor="right"
          open={showDrawer}
          onClose={() => {
            setShowDrawer(false)
          }}
        >
          <DrawerContainer>
            <img
              src="/icon-close-menu.svg"
              alt="close menu"
              width="26"
              height="26"
              style={{ position: "absolute", right: "10px" }}
              onClick={() => {
                setShowDrawer(false)
              }}
            />

            <NavBar>
              <div>
                Features <img src="/icon-arrow-up.svg" alt="feature close" />
              </div>
              {getPopoverMenu(featuresMenu)}
              <div>
                Company <img src="/icon-arrow-up.svg" alt="feature close" />
              </div>

              {getPopoverMenu(companyMenu)}
              <MenuItem navMenu>Careers</MenuItem>
              <MenuItem navMenu>About</MenuItem>
            </NavBar>
          </DrawerContainer>
        </Drawer>
      </Container>
    </>
  )
}

export default Home
