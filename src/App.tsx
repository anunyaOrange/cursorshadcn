import { Button } from "./components/ui/button"

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center gap-4">
      <Button>Default Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="destructive">Destructive Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
    </div>
  )
}

export default App
