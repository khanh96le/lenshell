import {Renderer} from "@k8slens/extensions";
import React from "react";

type IconProps = Renderer.Component.IconProps;


export function ExampleIcon(props: IconProps) {
  return <
    Renderer.Component.Icon {...props}
                            material="open_in_new"
                            tooltip={"Open the default pod shell!"}
  />;
}

export class ShellPage extends React.Component<{
  extension: Renderer.LensExtension;
}> {
  async execShell() {
    const shell = Renderer.Component.createTerminalTab({
      title: `Default pod`,
    });

    const commandParts = [
      "kubectl",
      "exec",
      "-i",
      "-t",
      "-n", "default",
      "deploy/ubuntu",
      "-- sh -c \"clear; bash || ash || sh\""
    ];

    console.log(commandParts.join(" "))

    Renderer.Component.terminalStore.sendCommand(commandParts.join(" "), {
      enter: true,
      tabId: shell.id,
    });

    Renderer.Navigation.hideDetails();
  }

  render() {
    return (
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
        <button style={{fontSize: "2em"}} onClick={this.execShell}>CLICK ME NOW!</button>
      </div>
    );
  }
}