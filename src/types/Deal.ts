export interface Deal {
  id: string;
  type: string;
  tag: string;
  title: string;
  revenue: string;
  nextMeeting: string | null;
  customer: {
    name: string;
    image: string;
  };
}
