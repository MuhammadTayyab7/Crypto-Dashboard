//import custom components
import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import TransactionSection from "./components/TransactionSection";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  return (
    <div>
      <DashboardLayout title="Dashboard">
        <Grid
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            xl: "repeat(2,2fr)",
          }}
          gap={6}
        >
          <GridItem colSpan={2}>
            <PortfolioSection />
          </GridItem>
          <GridItem
            colSpan={{
              xl: 1,
              lg: 2,
              base: 2,
              sm: 2,
              md: 2,
            }}
          >
            <PriceSection />
          </GridItem>
          <GridItem
            colSpan={{
              xl: 1,
              lg: 2,
              base: 2,
              sm: 2,
              md: 2,
            }}
          >
            <TransactionSection />
          </GridItem>
          <GridItem
            colSpan={{
              xl: 1,
              lg: 2,
              base: 2,
              sm: 2,
              md: 2,
            }}
          >
            <InfoCard
              imgURL="/Images/Visual1.png"
              text="  Learn more about Loans – Keep your Bitcoin, access it’s value
                without selling it"
              tagText="Loans"
              inverted={true}
            />
          </GridItem>
          <GridItem
            colSpan={{
              xl: 1,
              lg: 2,
              base: 2,
              sm: 2,
              md: 2,
            }}
          >
            <InfoCard
              imgURL="/Images/Visual.png"
              text="Learn more about our real estate, mortgage, and corporate account
        services"
              tagText="Contact"
              inverted={false}
            />
          </GridItem>
        </Grid>
      </DashboardLayout>
    </div>
  );
};

export default Dashboard;
