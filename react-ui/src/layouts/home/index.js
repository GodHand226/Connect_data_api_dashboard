// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";
import PageLayout from "examples/LayoutContainers/PageLayout";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import Footer from "layouts/authentication/components/Footer";
import DescriptionBox from "layouts/home/components/DescriptionBox";
import SuiTypography from "components/SuiTypography";
import Card from "@mui/material/Card";
// import ButtonBase from "@material-ui/core/ButtonBase";
// import Grid from "@mui/material/Grid";

function Home() {
  const CardClicked = () => {
    console.log("hello");
  };
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
      <SuiBox mt={10} display="flex" justifyContent="center" alignItems="center">
        <Card
          sx={{ borderRadius: "24px", backgroundColor: "#007bff", width: "40%", p: 5 }}
          onClick={CardClicked}
        >
          <SuiTypography variant="h1" textAlign="center" pb={3} textColor="white">
            Start Free
          </SuiTypography>
          <SuiTypography variant="h4" textAlign="center" textColor="white">
            No Limits, Your Journey, Your Choice.
          </SuiTypography>
          <SuiTypography variant="h4" textAlign="center" textColor="white">
            Free to Start Pay as you go.
          </SuiTypography>
        </Card>
      </SuiBox>
      <Footer />
    </PageLayout>
  );
}

export default Home;
