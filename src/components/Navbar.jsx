import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Streamer from '../assets/img/streamer.svg';

import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky" , background: '#ffff', zIndex: 9999, top: 0, justifyContent: "space-between", }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={Streamer} alt="logo" height={40} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
