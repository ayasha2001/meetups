import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { Head } from "next/document";

const NewMeetupPage = () => {
  const router = useRouter();
  const onAddMeetupHandler = async (enteredData) => {
    console.log(enteredData);
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);
    router.push("/");
  };
  return (
    <>
      <Head>
        <title>Meetup Form</title>
        <meta name="Add new Meetup" content="Add a meetup of your choice" />
      </Head>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
