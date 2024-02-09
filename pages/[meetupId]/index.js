import path from "path";
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

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "M1",
        },
      },
      {
        params: {
          meetupId: "M2",
        },
      },
      {
        params: {
          meetupId: "M2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  //fetch actually
  return {
    props: {
      meetupDetail: {
        id: "m1",
        title: "First Meetup",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Qutub_Minar_932.jpg/240px-Qutub_Minar_932.jpg",
        address: "First Meetup address",
        description: "this is first meetups",
      },
    },
  };
}
export default MeetupDetailPage;
