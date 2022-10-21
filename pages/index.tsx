import { Group } from "@mantine/core";
import SwitchesCard from "../components/SwitchesCard";

export default function IndexPage() {
  return (
    <Group mt={50} position="center">
      <SwitchesCard
        title="My IoT devices"
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
          {
            id: 2,
            title: "Switch 3",
            description: "Description for switch 1",
          },
        ]}
      />
    </Group>
  );
}
