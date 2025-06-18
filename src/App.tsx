import { useState } from 'react'
import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"


function App() {
  const [count, setCount] = useState(0)
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">

      <div className="flex flex-col items-center justify-center space-y-4 max-w-[300px] mx-auto">
        <div className="bg-color-primary w-full">
          <div className="relative top-4 right-4 z-50">
            <ModeToggle />
          </div>
        </div>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border shadow-sm"
          captionLayout="dropdown"
        />
        <Button>Click me</Button>
        <Button>Click me</Button>
      </div>
    </ThemeProvider>
  )
}

export default App
