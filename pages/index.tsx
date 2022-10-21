import { Group, NavLink } from "@mantine/core";
import SwitchesCard from "../components/SwitchesCard";
import StatsRingCard from "../components/StatsRingCard";
import HeaderMiddle from "../components/HeaderMiddle";

export default function IndexPage() {
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

      <Group mt={50} position="center">
        <StatsRingCard
          title="Power Consumption"
          completed={7}
          total={20}
          stats={[
            { label: "Current", value: 18 },
            { label: "In Progress", value: 8 },
          ]}
        />

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
      </Group>
    </>
  );
}
