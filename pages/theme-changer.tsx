import { ChangeEvent, useState, FC, useEffect } from "react"

import { GetServerSideProps } from 'next'

import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Layout } from '../components/layouts'
import Cookies from "js-cookie"
import axios from "axios"

interface Props {
  theme: string
}

const ThemeChangerPage = ({ theme }: Props) => {

  const [currentTheme, setCurrentTheme] = useState(theme)

  console.log(theme)

  const onThemeCange = (event: ChangeEvent<HTMLInputElement>) => {

    const selectedTheme = event.target.value

    setCurrentTheme(selectedTheme)

    localStorage.setItem("theme", selectedTheme)
    Cookies.set("theme", selectedTheme)
  }

  const onClick = async () => {
    const { data } = await axios.get("/api/hello")

    console.log({ data })
  }

  // useEffect(() => {
  //   console.log("Cookies:", Cookies.get("theme"))
  // }, [])


  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>
              Tema
            </FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeCange}>
              <FormControlLabel value="light" control={<Radio />} label="Light" />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel value="custom" control={<Radio />} label="Custom" />
            </RadioGroup>
          </FormControl>
          <Button onClick={() => onClick()}>Request</Button>
        </CardContent>

      </Card>
    </Layout>
  )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

  const { theme = "light", name = "No name" } = req.cookies

  const validTheme = ["light", "dark", "custom"]

  return {
    props: {
      theme: validTheme.includes(theme) ? theme : "dark",
      name
    }
  }
}


export default ThemeChangerPage

