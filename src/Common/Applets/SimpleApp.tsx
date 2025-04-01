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

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import InboxIcon from "@mui/icons-material/Inbox";
import { IconButton, GroupIconButtons } from "../../Base/IconButton";

export function SimpleApp() {
  const [isTestingDialogOpened, setIsTestingDialogOpened] = useState(false);
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
            <FlexLayout direction={"Horizontal"} spacing={5}>
              <FlexLayout direction={"Vertical"} spacing={8}>
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

              <FlexLayout direction={"Horizontal"} spacing={3}>
                <FlexLayout direction={"Vertical"} spacing={3}>
                  <TextField placeholder={"Type here if u want"} />
                  <Text size={12}>This is a Text component</Text>
                  <Link href={"#"}>This is a link</Link>
                </FlexLayout>

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
          </Dialog>
        </UiApp>
      </FlexLayout>
    </AppActivity>
  );
}
