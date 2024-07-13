import { Badge } from "../../../components/ui/badge"

export const BadgesPage = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Badge> Default </Badge>
      <Badge variant={ 'secondary' }> secondary </Badge>
      <Badge variant={ 'outline' }> outline </Badge>
      <Badge variant={ 'destructive' }> destructive </Badge>
      <Badge variant={ 'info' }> info </Badge>
      <Badge variant={ 'success' }> success </Badge>
      <Badge variant={ 'success' } capitalize> success </Badge>
    </div>
  )
}
