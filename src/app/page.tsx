"use client"
import Button from '@mui/material/Button';

import Image from "next/image";
import styles from "./page.module.css";
import { AppBar, Toolbar, Typography } from '@mui/material';


function MyHeader() {
  return (
    <h2>{"Your dream landscaping, our expertise"}</h2>
   );
}

function MyAddress () {
  return (
    <address>{"Contact: 509-733-2415"}</address>
  );

}

function MyButton() {
  return (
    <button>{"CALL NOW"}</button>
   );
}

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Image src="/logo.png" alt="Logo" width={150} height={150} />
    </div>
  );
}

export default function Home() {
  return (
    <div className ={styles.main}>
      <AppBar position ="static"> 
        <Toolbar>
          <Typography variant="h6" component ="div" sx={{ flexGrow: 1}}>
            {"Evelyn's Portfolio"}
          </Typography>
          <Button color="inherit">Post</Button>
        </Toolbar>
      </AppBar>
      <Image 
          src = {  "/trees.webp"}
          width = {500}
          height ={400}
          alt ="trees"
          ></Image>
     </div>
  );
}