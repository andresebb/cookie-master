import { FC } from 'react';

import Head from 'next/head'

import { Box } from '@mui/material'
import { Navbar } from '../ui';

interface Props {
  title?: string;
  children: JSX.Element
}

export const Layout: FC<Props> = ({ title = "Cookie master", children }) => {
  return (
    <Box sx={{
      flexFlow: 1
    }}>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Navbar />
      </nav>

      <Box sx={{ padding: "10px 20px" }}>
        {children}
      </Box>
    </Box>
  )
}
