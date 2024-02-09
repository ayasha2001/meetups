import MeetupList from "../components/meetups/MeetupList"
const DUMMY_MEETUPS = [
    {
        id:"M1",
        title:"First Meetup",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Qutub_Minar_932.jpg/240px-Qutub_Minar_932.jpg",
        address:"First Meetup address",
        description:"this is first meetups"
    },
    {
        id:"M2",
        title:"Second Meetup",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Qutub_Minar_932.jpg/240px-Qutub_Minar_932.jpg",
        address:"Second Meetup address",
        description:"this is Second meetups"
    },
    {
        id:"M3",
        title:"Third Meetup",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Qutub_Minar_932.jpg/240px-Qutub_Minar_932.jpg",
        address:"Third Meetup address",
        description:"this is Third meetups"
    }
]
const HomePage = () => {
  return (
    <MeetupList meetups={DUMMY_MEETUPS}/>
  )
}

export default HomePage