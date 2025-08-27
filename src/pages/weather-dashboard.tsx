import WeatherSkeleton from '@/components/loading-skeleton'
import { Button } from '@/components/ui/button'
import { useGeolocation } from '@/hooks/use-geolocation'
import { RefreshCcw } from 'lucide-react'
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