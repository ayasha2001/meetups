import NewMeetupForm from "../../components/meetups/NewMeetupForm"
const NewMeetupPage = () => {
  const onAddMeetupHandler = (enteredData) => {
    console.log(enteredData);
  };
  return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
};

export default NewMeetupPage;
