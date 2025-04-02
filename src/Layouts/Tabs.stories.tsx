import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tab, TabList, TabPanel } from "./Tabs";
import { Text } from "../Base/Text";
import "../Common/fonts.scss";
import { AppActivity } from "../App/AppActivity";

const meta: Meta<typeof Tabs> = {
  title: "Layouts/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <AppActivity theme={"Light"}>
      <Tabs>
        <TabList>
          <Tab index={0}>Profile</Tab>
          <Tab index={1}>Settings</Tab>
          <Tab index={2}>Notifications</Tab>
        </TabList>

        <TabPanel index={0}>
          <Text size={14} style={{ marginBottom: "8px" }}>
            Profile
          </Text>
          <Text size={9}>Manage your profile information and preferences.</Text>
        </TabPanel>
        <TabPanel index={1}>
          <Text size={14} style={{ marginBottom: "8px" }}>
            Settings
          </Text>
          <Text size={9}>Configure your application settings and options.</Text>
        </TabPanel>
        <TabPanel index={2}>
          <Text size={14} style={{ marginBottom: "8px" }}>
            Notifications
          </Text>
          <Text size={9}>
            Control your notification preferences and alerts.
          </Text>
        </TabPanel>
      </Tabs>
    </AppActivity>
  ),
};

export const WithDisabledTab: Story = {
  render: () => (
    <AppActivity theme={"Light"}>
      <Tabs>
        <TabList>
          <Tab index={0}>Active</Tab>
          <Tab index={1} disabled>
            Disabled
          </Tab>
          <Tab index={2}>Active</Tab>
        </TabList>

        <TabPanel index={0}>
          <Text size={14} style={{ marginBottom: "8px" }}>
            Active Tab
          </Text>
          <Text size={9}>This tab is active and can be selected.</Text>
        </TabPanel>
        <TabPanel index={1}>
          <Text size={14} style={{ marginBottom: "8px" }}>
            Disabled Tab
          </Text>
          <Text size={9}>This tab is disabled and cannot be selected.</Text>
        </TabPanel>
        <TabPanel index={2}>
          <Text size={14} style={{ marginBottom: "8px" }}>
            Active Tab
          </Text>
          <Text size={9}>This tab is also active and can be selected.</Text>
        </TabPanel>
      </Tabs>
    </AppActivity>
  ),
};

export const WithDefaultTab: Story = {
  render: () => (
    <AppActivity theme={"Light"}>
      <Tabs defaultTab={1}>
        <TabList>
          <Tab index={0}>First</Tab>
          <Tab index={1}>Default Selected</Tab>
          <Tab index={2}>Third</Tab>
        </TabList>

        <TabPanel index={0}>
          <Text size={14} style={{ marginBottom: "8px" }}>
            First Panel
          </Text>
          <Text size={9}>This panel is not selected by default.</Text>
        </TabPanel>
        <TabPanel index={1}>
          <Text size={14} style={{ marginBottom: "8px" }}>
            Second Panel (Default)
          </Text>
          <Text size={9}>This panel is selected by default.</Text>
        </TabPanel>
        <TabPanel index={2}>
          <Text size={14} style={{ marginBottom: "8px" }}>
            Third Panel
          </Text>
          <Text size={9}>This panel is not selected by default.</Text>
        </TabPanel>
      </Tabs>
    </AppActivity>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <AppActivity theme={"Light"}>
      <Tabs>
        <TabList>
          <Tab index={0} className="custom-tab">
            Custom Style
          </Tab>
          <Tab index={1} className="custom-tab">
            Another Tab
          </Tab>
          <Tab index={2} className="custom-tab" disabled>
            Disabled
          </Tab>
        </TabList>

        <TabPanel index={0} className="custom-panel">
          <Text size={14} style={{ marginBottom: "8px" }}>
            Custom Styled Panel
          </Text>
          <Text size={9}>This panel uses custom styling classes.</Text>
        </TabPanel>
        <TabPanel index={1} className="custom-panel">
          <Text size={14} style={{ marginBottom: "8px" }}>
            Another Panel
          </Text>
          <Text size={9}>This panel also uses custom styling.</Text>
        </TabPanel>
        <TabPanel index={2} className="custom-panel">
          <Text size={14} style={{ marginBottom: "8px" }}>
            Disabled Panel
          </Text>
          <Text size={9}>This panel belongs to the disabled tab.</Text>
        </TabPanel>
      </Tabs>
    </AppActivity>
  ),
};
