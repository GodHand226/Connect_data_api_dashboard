// import DescriptionBox from "examples/DescriptionBox";
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

function SearchType() {
  return (
    <SuiBox pl={4} pt={2}>
      <SuiTypography variant="h3" py={1} id="searchtypes">
        Search Type
      </SuiTypography>
      <SuiTypography variant="body2" py={1}>
        There are 3 search types that include searches by Phone type, Age and Address. Each search
        cost is the same and all searches return the same result set.
      </SuiTypography>
      <SuiTypography variant="h5" py={1}>
        Phone Type
      </SuiTypography>
      <SuiTypography variant="body2" py={1}>
        You can select one phone type in the Select Menu. There are only 2 phone types, Wireless and
        Landline. This selection helps you to find people who have specific phone type.
      </SuiTypography>
      <SuiTypography variant="h5" py={1}>
        Age
      </SuiTypography>
      <SuiTypography variant="body2" py={1}>
        Enter minimum value of age and maximum value of age. Data API Connect will search the people
        in range of your given age. The default value of minimum age is 0 and maximum age is 500.
      </SuiTypography>
      <SuiTypography variant="h5" py={1}>
        Address
      </SuiTypography>
      <SuiTypography variant="body2" py={1}>
        Enter State, City and Zip. All of these 3 fields are multiple selection.
      </SuiTypography>
    </SuiBox>
  );
}

export default SearchType;
