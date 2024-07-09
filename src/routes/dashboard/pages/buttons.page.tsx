import { ChevronRightIcon, EnvelopeOpenIcon, ReloadIcon } from "@radix-ui/react-icons"
import { Button } from "../../../components/ui/button"
import { Link } from "react-router-dom"

export const ButtonsPage = () => {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button> Defualt </Button>
      <Button variant={ 'destructive' }> Destructive </Button>
      <Button variant={ 'ghost' }> Ghost </Button>
      <Button variant={ 'link' }> Link </Button>
      <Button variant={ 'outline' }> Outline </Button>
      <Button variant={ 'secondary' }> Secondary </Button>
      <Button variant={ 'success' }> Success </Button>
      <Button disabled> Disabled </Button>
      <Button capitalize={ false }> no capitalize </Button>

      <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>

      <Button>
        <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
      </Button>

      <Button disabled>
        <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>

      <Button asChild>
        <Link to="/login">Login</Link>
      </Button>

    </div>
  )
}
