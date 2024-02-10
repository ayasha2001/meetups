import { MongoClient } from "mongodb"; // wont be considered while making bundles
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return;
  <>
    <Head>
      <title>Meetups List</title>
      <meta
        name="Meetups List"
        content="see a list of highly interactive react meetups"
      />
    </Head>
    <MeetupList meetups={props.meetups} />;
  </>;
};

export async function getStaticProps() {
  //it runs on building the prod build before deploying
  //fetch data originally
  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.4ooptbe.mongodb.net/supercoders?retryWrites=true&w=majority"
  );
  const db = await client.db();
  const meetupsCollection = db.collection("meetups");
  const result = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      // using props as a name to return is mandatory
      meetups: result.map((meetup) => {
        return {
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          id: meetup._id.toString(),
        };
      }),
    },
    revalidate: 10, // it is used check for the data every 10 second even so that u dont need to deplaoy it everytime the data changes
  };
}
export default HomePage;
