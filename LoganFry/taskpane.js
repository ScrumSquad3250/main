/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// images references in the manifest
import "../../assets/icon-16.png";
import "../../assets/icon-32.png";
import "../../assets/icon-80.png";

/* global document, Office */

Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "flex";
    document.getElementById("run").onclick = run;
  }
});

export async function run() {
  // Get a reference to the current message
  var item = Office.context.mailbox.item;

  // Write message property value to the task pane
  document.getElementById("item-subject").innerHTML = "<b>Graduation:</b> <br/>" + item.subject;
  // This will pull all emails with "Graduation in the subject line. Perfect to make sure I don't have to be in school in the fall."
}

// All run code with the exception oft?tabs=yeomangenerator
// was obtained from https://docs.microsoft.com/en-us/office/dev/add-ins/quickstarts/outlook-quickstar