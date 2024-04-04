import TopSubscribers from "./components/top-subscribers";
import useDashboard from "@/hooks/useDashboard";

const CommunicationPage = async () => {
  const {
    internet_subscribers,
    internet_subscribers_error,
  } = await useDashboard();

  console.log(internet_subscribers);
  return (
    <TopSubscribers
      data={internet_subscribers}
      error={internet_subscribers_error}
      length={internet_subscribers?.length || 7}
    />
  );
};

export default CommunicationPage;
