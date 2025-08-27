import WeatherSkeleton from '@/components/loading-skeleton'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { useGeolocation } from '@/hooks/use-geolocation'
import { AlertCircle, AlertTriangle, MapPin, RefreshCcw } from 'lucide-react'
import React from 'react'

const WeatherDashboard = () => {
  const { coordinates, error: locationError, getLocation, isLoading: locationLoading } = useGeolocation();

  console.log(coordinates);

  const handelRefreash = () => {
    getLocation();
    if (coordinates) {
      //  reload weather data
    }
  };

  if (locationLoading) {
    return <WeatherSkeleton />
  }

  if (locationError) {
    return (<Alert variant="destructive">
      <AlertTriangle className='h-4 w-4' />
      <AlertTitle>Location Error</AlertTitle>
      <AlertDescription className='flex flex-col gap-4'>
        <p>{locationError}</p>
        <Button onClick={getLocation} variant={"outline"} className='w-fit'>
          <MapPin className='mr-2 h-4 w-4' />
          Enable Location
        </Button>
      </AlertDescription>
    </Alert>);
  }

  if (!coordinates) {
    return (<Alert variant="destructive">
      <AlertTitle>Location Required</AlertTitle>
      <AlertDescription className='flex flex-col gap-4'>
        <p>Please enable location access to see your local weather.</p>
        <Button onClick={getLocation} variant={"outline"} className='w-fit'>
          <MapPin className='mr-2 h-4 w-4' />
          Enable Location
        </Button>
      </AlertDescription>
    </Alert>);
  }

  return (
    <div>
      {/* Favourite Cities */}
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold tracking-tight'>My Location</h1>
        <Button variant={'outline'}
          size={"icon"}
          onClick={handelRefreash}
        //</div>disabled={}
        >
          <RefreshCcw className='h*4 w-4' />
        </Button>
      </div>

      {/* current and hourly weather */}
    </div>
  )
}

export default WeatherDashboard