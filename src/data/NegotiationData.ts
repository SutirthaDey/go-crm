import { Deal } from "@/types/Deal";

export const negotiationData: Deal[] = [
  {
    id: "1",
    type: "100 licences",
    tag: "New",
    title: "Officia id amet et nisi sint dolo",
    revenue: "$600",
    nextMeeting: "Sep 30,2025",
    customer: {
      image: "/avatar.jpg",
      name: "Zarchary",
    },
  },
  {
    id: "2",
    type: "100 licences",
    tag: "Returning",
    title: "Sint Proident adipisicing",
    revenue: "$3,600",
    nextMeeting: "-",
    customer: {
      image: "/H1.jpg",
      name: "Kroger",
    },
  },
  {
    id: "3",
    type: "100 licences",
    tag: "New",
    title: "Sint Proident adipisicing",
    revenue: "$2,000",
    nextMeeting: "-",
    customer: {
      image: "/B1.jpg",
      name: "Sharon",
    },
  },
];
