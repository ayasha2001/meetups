import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { Head } from "next/document";
const MeetupDetailPage = (props) => {
  return (
    <>
      <Head>
        <title>Meetups List</title>
        <meta
          name="desciption"
          content="A detailed description of the individual meetup"
        />
      </Head>
      <MeetupDetail
        title={props.meetupDetail.title}
        image={props.meetupDetail.image}
        address={props.meetupDetail.address}
        description={props.meetupDetail.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.4ooptbe.mongodb.net/supercoders?retryWrites=true&w=majority"
  );
  const db = await client.db();
  const meetupsCollection = db.collection("meetups");
  const result = await meetupsCollection.find({}, { _id: 1 }).toArray();
  const meetupIds = result.map((meetup) => {
    return {
      params: {
        meetupId: meetup._id.toString(),
      },
    };
  });
  client.close();
  return {
    fallback: true,
    paths: meetupIds,
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.4ooptbe.mongodb.net/supercoders?retryWrites=true&w=majority"
  );
  const db = await client.db();
  const meetupsCollection = db.collection("meetups");
  const result = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  console.log(result, "result");
  //fetch actually
  return {
    props: {
      meetupDetail: {
        id: result._id.toString(),
        title: result.title,
        image: result.image,
        address: result.address,
        description: result.description,
      },
    },
  };
}
export default MeetupDetailPage;
