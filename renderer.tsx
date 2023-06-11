import {Renderer} from "@k8slens/extensions";
import {ExampleIcon, ShellPage} from "./src/shell-page"
import React from "react"

export default class ExampleExtension extends Renderer.LensExtension {
  clusterPageMenus = [
    {
      target: {pageId: "lenshell"},
      title: "Cluster Shell",
      components: {
        Icon: ExampleIcon,
      }
    }
  ]

  clusterPages = [
    {
      id: "lenshell",
      components: {
        Page: () => <ShellPage extension={this}/>,
      },
    },
  ];

  async onActivate() {
    console.log("Hey, this is LenShell!")
  }
}