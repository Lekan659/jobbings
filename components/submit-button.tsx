import React from 'react'
import { Button } from './ui/button'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'


export default function SubmitButton({label}:{label:string}) {
    // const { pending } = useFormStatus()

  return (
    <Button type='submit' variant='outline'>{label}</Button>

  )
}
