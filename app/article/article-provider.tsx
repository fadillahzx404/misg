"use server";

import { permanentRedirect, redirect } from "next/navigation";

const baseurl = "https://app-devuat.msig.co.id/sample-api/api/v1/posts";

export async function addPost(formData: FormData) {
  const res = await fetch(baseurl);

  const titleI = formData.get("title") as string;
  const shortText = formData.get("short_title") as string;

  //   const posted = await fetch(baseurl, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: randomUUID,
  //       user_id: randomUUID,
  //       title: titleI,
  //       short_text: shortText,
  //       content:
  //         "<h1>The three soldiers wandered about for them, but.</h1><p>Vel fuga et magni et consequatur sed. Vero mollitia est et consequatur beatae et non.</p>",
  //       image: "https://source.unsplash.com/random/800x600",
  //       created_at: Date.now.toString,
  //     }),
  //   }).then(function (response) {
  //     return response.json();
  //   });

  let formObject = Object.fromEntries(formData.entries());
  console.log(formObject);

  return permanentRedirect(
    "/article?message=Data has been added, but it's not on the list !"
  );
}

export async function editEd(formData: FormData) {
  const userId = formData.get("user_id") as string;
  const title = formData.get("title") as string;
  const shortText = formData.get("short_text") as string;
  const externalImage = formData.get("externalImage") as string;
  const image = formData.get("image") as string;
  const content = formData.get("content") as string;

  let formObject = Object.fromEntries(formData.entries());
  console.log(formObject);

  return redirect("/article?message=Succesed Edit But Not Edited !.");
}
