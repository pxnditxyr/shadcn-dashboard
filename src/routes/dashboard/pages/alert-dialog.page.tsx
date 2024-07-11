import { useState } from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '../../../components/ui/alert-dialog'
import { Button } from '../../../components/ui/button'

export const AlertDialogPage = () => {

  const [ openDialog, setOpenDialog ] = useState( false )

  return (
    <div className="">
      <AlertDialog
        onOpenChange={ setOpenDialog }
        open={ openDialog }
      >
        <AlertDialogTrigger asChild>
          <Button variant={ 'outline' }> Open Alert Dialog </Button>
        </AlertDialogTrigger>


        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={ () => console.log( 'cancel' ) }
            > Cancel </AlertDialogCancel>
            <AlertDialogAction
              onClick={ () => console.log( 'continue' ) }
            >Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>


      <Button onClick={ () => setOpenDialog( true ) }> Open Alert Dialog </Button>

    </div>
  )
}
