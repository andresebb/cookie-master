import { ChangeEvent, useState, FC, useEffect } from "react"

import { GetServerSideProps } from 'next'

import { Button, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Layout } from '../components/layouts'
import Cookies from "js-cookie"
import axios from "axios"

const ThemeChangerPage: FC = (props) => {



  // console.log({ props })

  const [currentTheme, setCurrentTheme] = useState("light")


  const onThemeCange = (event: ChangeEvent<HTMLInputElement>) => {

    const selectedTheme = event.target.value

    setCurrentTheme(selectedTheme)

    localStorage.setItem("theme", selectedTheme)
    Cookies.set("themeCookie", selectedTheme)
  }

  const onClick = async () => {
    const { data } = await axios.get("/api/hello")

    console.log({ data })
  }

  // useEffect(() => {
  //   console.log("Cookies:", Cookies.get("themeCookie"))
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


  return {
    props: {
      theme,
      name
    }
  }
}


export default ThemeChangerPage

