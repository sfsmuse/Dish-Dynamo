import { NavLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import React, { useState } from "react";
import {
    Text,
    Flex,
    Spacer,
    Button,
    Img,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,
    useBreakpointValue,
    useColorMode

} from '@chakra-ui/react';
import useToken from '@galvanize-inc/jwtdown-for-react';
import { ChevronDownIcon } from '@chakra-ui/icons'
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import Logo4 from "../../assets/Logo4.png";

const LoggedNav = () => {
    const [scroll, setScroll] = useState(false);
    const { logout } = useToken();
    const { colorMode, toggleColorMode } = useColorMode();



    const changeScroll = () =>
        document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
            ? setScroll(true)
            : setScroll(false);

    window.addEventListener("scroll", changeScroll);

    const display = useBreakpointValue({ base: "none", md: "flex" });



    return (
        <>
            <Flex
                bg="brand.700"
                h="15vh"
                alignItems="center"
                p="6"
                boxShadow={scroll ? "base" : "none"}
                position="sticky"
                top="0"
                zIndex="100"
                w="full"
                backgroundColor={colorMode === "light" ? "white" : "gray.800"}
            >
                <NavLink to="/">
                    <Img
                        src={Logo4}
                        alt="Logo"
                        w={{ base: "20%", md: "20%" }}
                        h="auto"
                        marginTop="auto"
                        marginBottom="auto"
                        rounded="lg"
                        position="relative"
                        marginLeft="-18px"
                    />
                </NavLink>

                <Spacer />

                <Flex alignItems="center" display={display}>
                    <ChakraLink
                        as={NavLink}
                        to="/create"
                        fontSize="lg"
                        mr="5"
                        _activeLink={{ textDecoration: "underline", textDecorationColor: "#4299E1" }}
                    >
                        Create Recipe
                    </ChakraLink>
                    <ChakraLink
                        as={NavLink}
                        to="/search"
                        fontSize="lg"
                        mr="5"
                        _activeLink={{ textDecoration: "underline", textDecorationColor: "#4299E1" }}
                    >
                        Recipe Search
                    </ChakraLink>
                    <NavLink to="/update" activestyle={activeLinkStyle}>
                        <Text fontSize="lg" mr="5">Update Profile</Text>
                    </NavLink>
                    <button onClick={logout}>
                        <Text fontSize="lg" mr="5">Logout</Text>
                    </button>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
                <Box display={{ base: "block", md: "none" }}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            icon={<HamburgerIcon />}
                            variant="outline"
                        />
                        <MenuList>
                            <MenuItem
                                as={NavLink}
                                to="/create"
                                _activeLink={{ textDecoration: "underline", textDecorationColor: "#4299E1" }}
                            >
                                Create Recipe
                            </MenuItem>
                            <MenuItem
                                as={NavLink}
                                to="/search"
                                _activeLink={{ textDecoration: "underline", textDecorationColor: "#4299E1" }}
                            >
                                Recipe Search
                            </MenuItem>
                            <NavLink to="/update">
                                <MenuItem>Update Profile</MenuItem>
                            </NavLink>
                            <MenuItem onClick={logout}>Logout</MenuItem>
                            <IconButton
                                aria-label="Toggle dark mode"
                                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                                onClick={toggleColorMode}
                                variant="ghost"
                            />
                        </MenuList>

                    </Menu>
                </Box>
            </Flex>
        </>
    );
};

export default LoggedNav;
