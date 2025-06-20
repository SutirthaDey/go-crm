"use client";

import { useParams } from "next/navigation";

export default function LeadDetails() {
  const params = useParams();
  const id = params.id;

  return (
    <div>
      <p>This is the Lead Details Page: {id}</p>
    </div>
  );
}
