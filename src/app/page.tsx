"use client";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
// import React from "react";
import {
  BottomAppBar,
  Checkbox,
  Divider,
  ElevatedButton,
  FilledButton,
  FilledTextField,
  FilledTonalButton,
  OutlinedButton,
  OutlinedTextField,
  Scaffold,
  SnackBar,
  TextButton,
  TopAppBarCenterAligned,
  TopAppBarLarge,
  TopAppBarMedium,
  TopAppBarSmall,
  useScaffoldHost,
  Switch
} from "material-you-react";

export default function DefaultPage() {
  const [checkBoxValue, setCheckBoxValue] = useState<boolean | null>(false);
  return (
    <Scaffold
      bottomAppBar={
        <BottomAppBar
          items={["search", "delete", "archive", "forward"]}
          floatingActionButton={<FloatingActionButton />}
        />
      }
    >
      {(scaffoldHost) => (
        <div className="flex flex-col w-screen gap-3">
          <TopAppBarMedium
            // avatar
            headline={"Aham Svastha"}
            trailingIcons={["search", "more_vert"]}
            leadingIcon="arrow_back"
          />
          <div className="flex flex-wrap">
            <div className="p-4 border border-dashed w-max flex flex-col gap-3 mx-2 my-5 mb-0">
              <div className="mb-4  text-[rgb(var(--md-sys-color-on-background))]">
                <h3 className="text-xl font-medium">Buttons</h3>
                <p className="max-w-[40ch]">
                  Buttons help people take actions, such as sending an email,
                  sharing a document, or liking a comment.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <ElevatedButton onClickCallback={() => {}} icon="globe">
                  <p>Elevated</p>
                </ElevatedButton>
                <FilledButton onClickCallback={() => {}} icon="duo">
                  <p>Filled</p>
                </FilledButton>
                <FilledTonalButton onClickCallback={() => {}} icon="flutter">
                  <p>Filled Tonal</p>
                </FilledTonalButton>
                <OutlinedButton onClickCallback={() => {}} icon="self_improvement">
                  <p>Outlined</p>
                </OutlinedButton>
                <TextButton onClickCallback={() => {}}  icon="text_fields">
                  <p>Text</p>
                </TextButton>
              </div>
            </div>
            <div className="p-4 border border-dashed w-max flex flex-col gap-3 mx-2 my-5">
              <div className="mb-4  text-[rgb(var(--md-sys-color-on-background))]">
                <h3 className="text-xl font-medium">TextFields</h3>
                <p className="max-w-[40ch]">
                  Text fields let users enter text into a UI
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FilledTextField labelText="Hello" value={""} onValueChange={function (value: string): void {
                  throw new Error("Function not implemented.");
                } } />
                <OutlinedTextField
                  labelText="Outlined"
                  leadingIcon="account_circle" value={""} onValueChange={function (value: string): void {
                    throw new Error("Function not implemented.");
                  } }                />
              </div>
            </div>
            <div className="p-4 border border-dashed w-max flex flex-col gap-3 mx-2 my-5">
              <div className="mb-4  text-[rgb(var(--md-sys-color-on-background))]">
                <h3 className="text-xl font-medium">Checkbox</h3>
                <p className="max-w-[40ch]">
                  Checkboxes let users select one or more items from a list, or
                  turn an item on or off
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Checkbox
                  isError
                  value={checkBoxValue}
                  onChange={(val: any) => {
                    setCheckBoxValue(
                      checkBoxValue === false
                        ? null
                        : checkBoxValue === null
                        ? true
                        : false
                    );
                  }}
                />
                <Checkbox
                  value={checkBoxValue}
                  onChange={(val: any) => {
                    setCheckBoxValue(
                      checkBoxValue === false
                        ? null
                        : checkBoxValue === null
                        ? true
                        : false
                    );
                  }}
                />
                <Checkbox
                  value={checkBoxValue}
                  disabled
                  onChange={(val: any) => {}}
                />
              </div>
            </div>
            <div className="p-4 border border-dashed w-max flex flex-col gap-3 mx-2 my-5">
              <div className="mb-4  text-[rgb(var(--md-sys-color-on-background))]">
                <h3 className="text-xl font-medium">Dividers</h3>
                <p className="max-w-[40ch]">
                  Dividers are thin lines that group content in lists or other
                  containers
                </p>
              </div>
              <div className="gap-4 text-[rgb(var(--md-sys-color-on-surface))]">
                <div className="w-full">
                  {[
                    {
                      image:
                        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiR0TdhMN6h-G45zXLRmJtg6s9mqTAVE2oNBefzhJYIucR5odw5WtaVOvlIpY9shR36t1HHXi5ZEQM18fWv9TNsgpQVxnFVsRB75Qxfk96C7ognjjqs6M85D1Go18fkn2fDLGrZNC8bRR-LiQvL6wtIWyI_dwYRmIKEx4Ef5eli3wcswEW-b7DMejvOcbE/w1200-h630-p-k-no-nu/AndroidSpotlight_Android15_Blog_Card.png",
                      title: "What's Cooking: Android 15",
                      subtitle: "Blog",
                      duration: "2 min",
                    },
                    {
                      image:
                        "https://b1410584.smushcdn.com/1410584/wp-content/uploads/2022/09/Blog_Banner_2022-Jetpack-Compose-02-1024x536.jpg?lossy=0&strip=1&webp=1",
                      title: "Android Devrel Hiring",
                      subtitle: "Social",
                      duration: "68 min",
                    },
                    {
                      image:
                        "https://media.licdn.com/dms/image/D5634AQGbFvXIP3dkbg/ugc-proxy-shrink_800/0/1681232676796?e=2147483647&v=beta&t=xm19-t2Q_6Wmh3eHs1pfF0R5DabTAimumZ7R2oWNhIM",
                      title: "Android Studio: Flamingo",
                      subtitle: "Developer",
                      duration: "38 min",
                    },
                  ].map((e, index) => {
                    return (
                      <div key={e.image}>
                        <div className="cursor-pointer hover:bg-[rgb(var(--md-sys-color-surface-variant))] gap-4 flex items-center p-[6px] mb-2 rounded-sm">
                          <img
                            className="w-24 h-14 rounded-lg object-cover"
                            src={e.image}
                          />
                          <div className="grow">
                            <p className="title-medium">{e.title}</p>
                            <p className="label-medium opacity-50">
                              {e.subtitle}
                            </p>
                          </div>
                          <p className="title-medium text-[rgb(var(--md-sys-color-primary))]">
                            {e.duration}
                          </p>
                        </div>
                        {index != 2 && (
                          <Divider type="horizontal" variant="fullWidth" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="p-4 border border-dashed w-max flex flex-col gap-3 mx-2 my-5">
              <div className="mb-4  text-[rgb(var(--md-sys-color-on-background))]">
                <h3 className="text-xl font-medium">Snackbar</h3>
                <p className="max-w-[40ch]">
                  Snackbars show short updates about app processes at the bottom
                  of the screen.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <button
                  className="dark:text-white"
                  onClick={() => {
                    scaffoldHost?.showSnackBar(
                      "This is a snackbar and it has.",
                      {
                        action: "Cancel",
                        actionCallback: () => {
                          console.log("Undo clicked");
                        },
                      }
                    );
                  }}
                >
                  Show Snackbar
                </button>
              </div>
            </div>
            <div className="p-4 border border-dashed w-max flex flex-col gap-3 mx-2 my-5">
              <div className="mb-4  text-[rgb(var(--md-sys-color-on-background))]">
                <h3 className="text-xl font-medium">Switch</h3>
                <p className="max-w-[40ch]">
                  Switches toggle the selection of an item on or off
                </p>
              </div>
              <div className="grid grid-cols-3 gap-5">
                <Switch mode="ON"/>
                <Switch mode="OFF"/>
                <Switch mode="OFF" onIcon/>
                <Switch mode="OFF" offIcon/>
                <Switch mode="OFF" offIcon onIcon disable/>
                <Switch mode="OFF" offIcon onIcon/>
              </div>
            </div>
          </div>

          <div className="h-16" />
        </div>
      )}
    </Scaffold>
  );
}

const FloatingActionButton = () => {
  const ref = useRef(null);
  const [parentClass, setParentClass] = useState("");

  useEffect(() => {
    const domNode = ReactDOM.findDOMNode(ref.current);
    if (domNode !== undefined && domNode !== null && domNode.parentNode) {
      setParentClass(domNode.parentElement?.className || "ID");
    }
  }, []);

  return (
    <div
      ref={ref}
      className={
        parentClass.includes("bottom-app-bar")
          ? "md-elevation-0"
          : "md-elevation-3"
      }
      style={{
        backgroundColor: "rgb(var(--md-sys-color-primary-container))",
        width: "56px",
        height: "56px",
        borderRadius: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        className="material-symbols-rounded"
        style={{
          width: "24px",
          height: "24px",
          color: "rgb(var(--md-sys-color-on-primary-container))",
        }}
      >
        add
      </span>
    </div>
  );
};
