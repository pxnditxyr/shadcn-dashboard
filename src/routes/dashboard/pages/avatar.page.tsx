import { Avatar, AvatarFallback, AvatarImage } from '../../../components/ui/avatar'

export const AvatarPage = () => {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <p className="m-2"> @Pxndxs </p>
    </div>
  )
}
