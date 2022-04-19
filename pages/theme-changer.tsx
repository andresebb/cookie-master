import { ChangeEvent, useState } from "react"
import { Card, CardContent, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Layout } from '../components/layouts'

const ThemeChangerPage = () => {

  const [currentTheme, setCurrentTheme] = useState("light")

  const onThemeCange = (event: ChangeEvent<HTMLInputElement>) => {

    console.log(event.target.value)
    setCurrentTheme(event.target.value)
  }

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
        </CardContent>

      </Card>
    </Layout>
  )
}

export default ThemeChangerPage

