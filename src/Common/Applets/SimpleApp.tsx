import { AppActivity } from "../../App/AppActivity";
import { AppHeader } from "../../App/AppHeader";
import { FlexLayout } from "../../Layouts/FlexLayout";
import { TextField } from "../../Base/TextField";
import { UiApp } from "../../App/UiApp";
import { Button } from "../../Base/Button";
import { Dialog } from "../../App/Dialog";
import { useState } from "react";
import { Link } from "../../Base/Link";
import { Spinner } from "../../Misc/Spinner";
import { Text } from "../../Base/Text";
import { StackLayout } from "../../Layouts/StackLayout";
import { BubbleContainer } from "../../Base/BubbleContainer";
import { ScrollLayout } from "../../Layouts/ScrollLayout";
import { Radio, RadioGroup } from "../../Base/Radio";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InboxIcon from "@mui/icons-material/Inbox";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import { IconButton, GroupIconButtons } from "../../Base/IconButton";

export function SimpleApp() {
  const [isTestingDialogOpened, setIsTestingDialogOpened] = useState(false);
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedTheme, setSelectedTheme] = useState("light");
  return (
    <AppActivity theme={"Light"} direction={"Vertical"}>
      <AppHeader enableBackdropBlur enableFixedPosition>
        <FlexLayout direction={"Horizontal"} wrap={"nowrap"} spacing={3}>
          <GroupIconButtons>
            <IconButton>
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton>
              <ArrowForwardIosIcon />
            </IconButton>
          </GroupIconButtons>
        </FlexLayout>

        <IconButton className={"AppHeaderLayout--History"}>
          <ScheduleIcon />
        </IconButton>

        <TextField
          placeholder={"Search everything or on this community"}
          style={{ width: "50%" }}
        />

        <GroupIconButtons>
          <IconButton>
            <InboxIcon />
          </IconButton>
          <IconButton>
            <HelpOutlineIcon />
          </IconButton>
        </GroupIconButtons>
      </AppHeader>

      <FlexLayout direction={"Horizontal"} flex={1}>
        <ScrollLayout hideScrollbar={true}>
          <StackLayout
            direction={"Vertical"}
            spacing={8}
            style={{ padding: "4em 1em" }}
          >
            <BubbleContainer>TEADDDD</BubbleContainer>
            <BubbleContainer>GA</BubbleContainer>
            <BubbleContainer>SU</BubbleContainer>
            <BubbleContainer>XD</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TDE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
            <BubbleContainer>TE</BubbleContainer>
          </StackLayout>
        </ScrollLayout>

        <UiApp style={{ marginTop: "4em" }}>
          <Button
            color={"Primary"}
            onClick={() => setIsTestingDialogOpened(true)}
          >
            Open Testing Dialog
          </Button>

          <Dialog
            open={isTestingDialogOpened}
            onClose={() => setIsTestingDialogOpened(false)}
          >
            <FlexLayout direction={"Vertical"} spacing={8}>
              <Text size={16} wordWrap={false}>
                Component Examples
              </Text>

              <FlexLayout direction={"Horizontal"} spacing={8}>
                {/* Left Section - 3 columns */}
                <FlexLayout direction={"Vertical"} spacing={8} flex={2}>
                  <FlexLayout direction={"Horizontal"} spacing={8}>
                    {/* Buttons Column */}
                    <FlexLayout direction={"Vertical"} spacing={8} flex={1}>
                      <Text size={14} wordWrap={false}>
                        Buttons
                      </Text>
                      <Button>Neutral</Button>
                      <Button color={"Primary"}>Primary</Button>
                      <Button color={"Warning"}>Warning</Button>
                      <Button color={"Alert"} size={"Small"}>
                        Danger
                      </Button>
                      <Button color={"Success"} size={"Medium"}>
                        Success
                      </Button>
                      <Button disabled={true} color={"Success"} size={"Large"}>
                        Disabled
                      </Button>
                    </FlexLayout>

                    {/* Radio Groups Column */}
                    <FlexLayout direction={"Vertical"} spacing={5} flex={1}>
                      <Text size={14} wordWrap={false}>
                        Radio Groups
                      </Text>
                      <RadioGroup
                        name="size-selection"
                        value={selectedSize}
                        onChange={(value) => setSelectedSize(value)}
                      >
                        <Text size={12} wordWrap={false}>
                          Select Size
                        </Text>
                        <Radio value="small" label="Small" />
                        <Radio value="medium" label="Medium" />
                        <Radio value="large" label="Large" />
                      </RadioGroup>

                      <RadioGroup
                        name="theme-selection"
                        value={selectedTheme}
                        onChange={(value) => setSelectedTheme(value)}
                      >
                        <Text size={12} wordWrap={false}>
                          Select Theme
                        </Text>
                        <Radio value="light" label="Light" />
                        <Radio value="dark" label="Dark" />
                        <Radio value="system" label="System" />
                      </RadioGroup>
                    </FlexLayout>
                  </FlexLayout>
                </FlexLayout>

                {/* Right Section */}
                {/* <FlexLayout
                  direction={"Vertical"}
                  spacing={8}
                  style={{ flex: 1 }}
                > */}
                {/* Spinners */}
                <FlexLayout direction={"Vertical"} spacing={5}>
                  <Text size={14} wordWrap={false}>
                    Spinners
                  </Text>
                  <FlexLayout direction={"Horizontal"} spacing={3}>
                    <FlexLayout direction={"Vertical"} spacing={3}>
                      <Spinner color={"Default"} size={"Small"} />
                      <Spinner color={"Default"} size={"Medium"} />
                      <Spinner color={"Default"} size={"Large"} />
                    </FlexLayout>

                    <FlexLayout direction={"Vertical"} spacing={3}>
                      <Spinner color={"Blue"} size={"Small"} />
                      <Spinner color={"Blue"} size={"Medium"} />
                      <Spinner color={"Blue"} size={"Large"} />
                    </FlexLayout>
                  </FlexLayout>
                </FlexLayout>

                {/* Form Elements Column */}
                <FlexLayout direction={"Vertical"} spacing={5} flex={1}>
                  <Text size={14} wordWrap={false}>
                    Form Elements
                  </Text>
                  <TextField placeholder={"Type here if u want"} />
                  <Text size={12} wordWrap={false}>
                    This is a Text component
                  </Text>
                  <Link href={"#"}>This is a link</Link>
                </FlexLayout>

                {/* Grouped Icon Buttons */}
                <FlexLayout direction={"Vertical"} spacing={5}>
                  <Text size={14} wordWrap={false}>
                    Grouped Icon Buttons
                  </Text>
                  <GroupIconButtons>
                    <IconButton>
                      <FormatBoldIcon />
                    </IconButton>
                    <IconButton>
                      <FormatItalicIcon />
                    </IconButton>
                    <IconButton>
                      <FormatUnderlinedIcon />
                    </IconButton>
                  </GroupIconButtons>

                  <GroupIconButtons>
                    <IconButton>
                      <ArrowBackIosNewIcon />
                    </IconButton>
                    <IconButton>
                      <ArrowForwardIosIcon />
                    </IconButton>
                  </GroupIconButtons>
                </FlexLayout>
                {/* </FlexLayout> */}
              </FlexLayout>
            </FlexLayout>
          </Dialog>
        </UiApp>
      </FlexLayout>
    </AppActivity>
  );
}
