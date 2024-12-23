'use client'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
export const Home: React.FC = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },
            position: 'bottom-right',
          })
        }
      >
        Show Toast
      </Button>
    </div>
  )
}
