import { Group, NavLink } from "@mantine/core";
import SwitchesCard from "../components/SwitchesCard";
import StatsRingCard from "../components/StatsRingCard";
import HeaderMiddle from "../components/HeaderMiddle";
import StatsGrid from "../components/StatsGrid";

import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
} from "@mantine/core";

export default function IndexPage() {
  const child = <Skeleton height={300} radius="md" animate={false} />;

  return (
    <>
      <HeaderMiddle
        links={[
          {
            link: "/about",
            label: "Home",
          },
          {
            link: "/learn",
            label: "Features",
          },
          {
            link: "/contact",
            label: "Contact",
          },
        ]}
      />

      <Container my="md">
        <Grid>
          <Grid.Col xs={6}>
            <StatsRingCard
              title="Power Consumption"
              completed={7}
              total={20}
              stats={[
                { label: "Current", value: 18 },
                { label: "In Progress", value: 8 },
              ]}
            />
          </Grid.Col>
          <Grid.Col xs={6}>
            <SwitchesCard
              title="My Switches"
              description="Toggle devices on and off"
              data={[
                {
                  id: 0,
                  title: "Switch 1",
                  description: "Description for switch 1",
                },
                {
                  id: 1,
                  title: "Switch 2",
                  description: "Description for switch 1",
                },
              ]}
            />
          </Grid.Col>
          <Grid.Col xs={12}>
            <StatsGrid
              data={[
                {
                  title: "Revenue",
                  icon: "receipt",
                  value: "13,456",
                  diff: 34,
                },
                {
                  title: "Profit",
                  icon: "coin",
                  value: "4,145",
                  diff: -13,
                },
                {
                  title: "Coupons usage",
                  icon: "discount",
                  value: "745",
                  diff: 18,
                },
                {
                  title: "New customers",
                  icon: "user",
                  value: "188",
                  diff: -30,
                },
              ]}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
