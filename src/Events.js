import React from 'react'
import "./events.css"
import Event from './Event'


function Events() {
  let rules = [];
  const eventDetails = [{
    title: 'Recreating Frames',
    description:'The competiton is as the name suggest to renact and capture a scene/frame from any movie with a twist of your own i.e the way you would have done the scene in the first place.',
    formLink: 'https://forms.gle/jCqH7DaR8BBWjUU26',
    posterLink: '/recreate-frames.jpg',
    rules:[
      '1. You can create any character photos from any malayalam movie.',
      '2 The movie frame and recreated frame should be included in single picture',
      '3. Maximum file size should be 1mb.',
      '4. File format should be jpg or png.',
      '5. Winners are chosen based on creativity and number of likes respectively',
      '6. Judges decision will be final.',
      '7. Entry shall be submitted on or before 4th june 2022.',
      '8. Entry should be sent with full name, class and instagram id.',
      '9. Upload entry by clicking the button below.'
    ]
  }, {
    title: '1 Min Short Film',
    description:'The competition is open to anyone  but there is ONE simple rule: your film MUST be 60 seconds or less in duration. The duration of your film(s) must not exceed 60 seconds including titles and credits.',
    formLink: 'https://forms.gle/nLWtM2tskToQUT8M6',
    posterLink: '/short-film.jpg',
    rules:[
      '1. Maximum duration can only be 1 minute.',
      '2. File size should be less than 100mb.',
      '3. Upload only mp4, avi, mkv format files.',
      '4. Winners are chosen based on creativity and number of likes respectively.',
      '5. Judges decision will be final.',
      '6. Entry shall be submitted on or before 4th june 2022.',
      '7. Entry should be sent with full name, class and instagram id.',
      '8. Upload entry by clicking the button below.'
    ]
  },
  {
    title: 'Editography',
    formLink: 'https://forms.gle/NkWNNV9MS4pnaAv17',
    posterLink: '/more-events.jpg',
    label:"coming-soon",
    rules
  }, {
    title: 'Photography',
    formLink: 'https://forms.gle/4GCyp1dbxUyNtR7c9',
    posterLink: '/more-events.jpg',
    label:"coming-soon",
    rules
  }, {
    title: 'Reels - act it out',
    formLink: 'https://forms.gle/zme9VPZR3w6ZZAzn6',
    posterLink: '/more-events.jpg',
    label:"coming-soon"
  }, {
    title: 'Mr Beard',
    formLink: 'https://forms.gle/Bykk39Luk564eGX27',
    posterLink: '/more-events.jpg',
    label:"coming-soon",
    rules
  }, {
    title: 'Miss Smile',
    formLink: 'https://forms.gle/F3L9cjN5toBXN4F49',
    posterLink: '/more-events.jpg',
    label:"coming-soon",
    rules
  }, {
    title: 'Troll Master',
    formLink: 'https://forms.gle/wjBevdWg2AVP79pz8',
    posterLink: '/more-events.jpg',
    label:"coming-soon",
    rules
  }, {
    title: 'Troll Video',
    formLink: 'https://forms.gle/fCkEie4dLQcKwxoT6',
    posterLink: '/more-events.jpg',
    label:"coming-soon",
    rules
  }, {
    title: 'Selfie Contest',
    formLink: 'https://forms.gle/f9LN9tiDoAwfGAtp8',
    posterLink: '/more-events.jpg',
    label:"coming-soon",
    rules
  }, {
    title: 'Duo Dance',
    formLink: 'https://forms.gle/aZBpjKW7RFrnP7Xx7',
    posterLink: '/more-events.jpg',
    label:"coming-soon",
    rules
  },];
  return (
    <div className='events-div'>
      {
        eventDetails.map((eventDetails) =>
          <Event eventDetails={eventDetails} />
        )
      }
    </div>
  )
}

export default Events