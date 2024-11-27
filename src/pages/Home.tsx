import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
const Home = () => {
  return (
        <Button className='flex mx-auto my-auto '><Link to='/dashboard'>Go to dashboard</Link></Button>
  )
}

export default Home