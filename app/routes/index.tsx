import { useState } from "react";
import { ActionFunction, Form, redirect, useLoaderData } from "remix";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const place = formData.get("place");
  if (place) {
    return redirect(`/regen/${place}`);
  }
  return false;
};

export default function Index() {
  const [place, setPlace] = useState("");

  return (
    <div className="h-full flex items-center justify-center">
      <div>
        <h1 className="text-7xl mb-8">Regent het in...</h1>
        <Form method="post">
          <input
            className="bg-slate-600 h-14 w-5/6 p-4 rounded-md"
            name="place"
            type="text"
            value={place}
            onChange={(event) => {
              setPlace(event.currentTarget.value);
            }}
          />
        </Form>
      </div>
    </div>
  );
}
