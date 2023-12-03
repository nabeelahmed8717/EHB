import React, { useEffect, useState } from 'react'
import "../authentication.scss"

const Welcome = ({response}:any) => {

  const [showFirstName, setShowFirstName] = useState(true);

  useEffect(() => {
    // After component mounts, hide the first name after a delay
    const firstNameTimeout = setTimeout(() => {
      setShowFirstName(false);

      // After another delay, show the second message
      const secondMessageTimeout = setTimeout(() => {
        setShowFirstName(false);
      }, 500); // Adjust the delay according to your preference

      // Clear the timeout to avoid memory leaks
      return () => clearTimeout(secondMessageTimeout);
    }, 2000); // Adjust the delay according to your preference

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(firstNameTimeout);
  }, []);

  return (
    <div className='main-welcome-screen tex-w'>
      {
        showFirstName ? 
        <h2 className='uname'>Hi, {response.firstName} {response.lastName}</h2>
        :
        <h2 className='tag'>Welcome to EHB</h2>
      }
    </div>
  )
}

export default Welcome