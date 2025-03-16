import {AppActivity} from "../../App/AppActivity";
import {AppHeader} from "../../App/AppHeader";
import {FlexLayout} from "../../Layouts/FlexLayout";
import {TextField} from "../../Base/TextField";
import {UiApp} from "../../App/UiApp";
import {Button} from "../../Base/Button";
import {Dialog} from "../../App/Dialog";
import {useState} from "react";
import {Link} from "../../Base/Link";
import {Spinner} from "../../Misc/Spinner";
import {Text} from "../../Base/Text";
import {StackLayout} from "../../Layouts/StackLayout";
import {BubbleContainer} from "../../Base/BubbleContainer";
import {ScrollLayout} from "../../Layouts/ScrollLayout";

export function SimpleApp() {
    const [isTestingDialogOpened, setIsTestingDialogOpened] = useState(false);
    return (
        <AppActivity theme={'Light'} direction={'Vertical'}>
            <AppHeader enableBackdropBlur enableFixedPosition>
                <FlexLayout
                    className={'AppHeaderLayout'}
                    justifyContent={'Space-Between'}
                    justifyItems={"Center"}
                    flex={1}
                >
                    <FlexLayout flex={1}>
                        <FlexLayout spacing={5} className={'AppHeaderLayout--HistoryBtns'} flex={1}>
                            <Button color={'Primary'}>
                                Test
                            </Button>
                            <Button color={'Primary'}>
                                Primary
                            </Button>
                        </FlexLayout>

                        <TextField placeholder={"Search everything or on this community"} style={{width: "55%"}}/>
                    </FlexLayout>
                </FlexLayout>
            </AppHeader>


            <FlexLayout direction={"Horizontal"} flex={1}>
                <ScrollLayout hideScrollbar={true}>
                    <StackLayout direction={'Vertical'} spacing={8} style={{padding: '4em 1em'}}>
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
                        <BubbleContainer>TE</BubbleContainer>
                    </StackLayout>
                </ScrollLayout>


                <UiApp style={{marginTop: '4em'}}>
                    <Button color={'Primary'} onClick={() => setIsTestingDialogOpened(true)}>
                        Open Testing Dialog
                    </Button>

                    <Dialog open={isTestingDialogOpened} onClose={() => setIsTestingDialogOpened(false)}>
                        <FlexLayout direction={'Horizontal'} spacing={5}>
                            <FlexLayout direction={'Vertical'} spacing={8}>
                                <Button>Neutral</Button>
                                <Button color={'Primary'}>Primary</Button>
                                <Button color={'Warning'}>Warning</Button>
                                <Button color={'Alert'} size={'Small'}>Danger</Button>
                                <Button color={'Success'} size={'Medium'}>Success</Button>
                                <Button disabled={true} color={'Success'} size={'Large'}>Disabled</Button>
                            </FlexLayout>

                            <FlexLayout direction={'Horizontal'} spacing={3}>
                                <FlexLayout direction={'Vertical'} spacing={3}>
                                    <TextField placeholder={'Type here if u want'}/>
                                    <Text size={12}>This is a Text component</Text>
                                    <Link href={'#'}>This is a link</Link>
                                </FlexLayout>

                                <FlexLayout direction={'Vertical'} spacing={3}>
                                    <Spinner color={'Default'} size={'Small'}/>
                                    <Spinner color={'Default'} size={'Medium'}/>
                                    <Spinner color={'Default'} size={'Large'}/>
                                </FlexLayout>

                                <FlexLayout direction={'Vertical'} spacing={3}>
                                    <Spinner color={'Blue'} size={'Small'}/>
                                    <Spinner color={'Blue'} size={'Medium'}/>
                                    <Spinner color={'Blue'} size={'Large'}/>
                                </FlexLayout>
                            </FlexLayout>
                        </FlexLayout>
                    </Dialog>
                </UiApp>
            </FlexLayout>
        </AppActivity>
    );
}
