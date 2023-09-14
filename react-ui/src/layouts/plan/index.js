import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Footer from "layouts/authentication/components/Footer";
import DescriptionBox from "examples/DescriptionBox";
import StartFree from "examples/StartFree";

function Plan() {
  return (
    <PageLayout background="white">
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/home",
          label: "free download",
          color: "dark",
        }}
      />
      <DescriptionBox
        title="Welcome to DataAPIConnect"
        description="Where data meets innovation. Discover a world of consumer insights at your fingertips. We specialize in providing comprehensive consumer data that empowers businesses to make informed decisions and drive growth. With a focus on accuracy, reliability, and ethical data sourcing, DataAPIConnect is your trusted partner in harnessing the power of data for strategic advantage. Join us on a journey of transforming information into opportunity, and explore the limitless potential that data-driven strategies can bring to your organization."
        top={15}
      ></DescriptionBox>
      <DescriptionBox
        title="Millions of Records, One Cloud Engine, Your Success"
        description="500M Consumer Insights, One Simple API Tap into the power of 500 million consumer insights effortlessly. Our easy-to-use API grants you direct access to a wealth of consumer data. No fuss, no complexity—just plug in and unlock valuable insights to fuel your decisions. Reach your goals with consumer understanding, powered by a straightforward API solution."
      ></DescriptionBox>
      <StartFree></StartFree>
      <Footer />
    </PageLayout>
  );
}

export default Plan;
