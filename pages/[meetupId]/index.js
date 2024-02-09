import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetailPage = () => {
  return (
    <MeetupDetail
      title={"First Meetup"}
      image={
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Qutub_Minar_932.jpg/240px-Qutub_Minar_932.jpg"
      }
      address={"First Meetup address"}
      description={"this is first meetups"}
    />
  );
};
export default MeetupDetailPage