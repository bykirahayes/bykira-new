/**
 * Owner-provided public contact destination. It has NOT been independently
 * verified as a working mailbox. Visitors must explicitly send in their
 * email application; this static website never submits enquiries itself.
 */
export const CONTACT_EMAIL = "info@bykira.co.uk";

export type StepId = "inquiry" | "booking" | "payment" | "records";

export interface JourneyStep {
  id: StepId;
  n: string;
  label: string;
  reviewed: string[];
  friction: string;
  frictionDetail: string;
  improvement: string;
  improvementDetail: string;
}

export const JOURNEY: JourneyStep[] = [
  {
    id: "inquiry",
    n: "01",
    label: "Inquiry",
    reviewed: ["Where new enquiries arrive", "Who replies, and how quickly", "What gets asked every single time"],
    friction: "Enquiries buried in DMs",
    frictionDetail: "Messages split across Instagram, email and WhatsApp. Some get missed, others answered twice.",
    improvement: "A single place for incoming requests",
    improvementDetail: "One short form or inbox that captures the basics up front, so the first reply can be a useful one.",
  },
  {
    id: "booking",
    n: "02",
    label: "Booking",
    reviewed: ["How a time gets agreed", "Calendar tools in use", "Reminders and no-shows"],
    friction: "Back-and-forth messages",
    frictionDetail: "“Does Tuesday work?” “What about Thursday?” Four messages to settle one slot.",
    improvement: "A booking link with availability",
    improvementDetail: "Customers pick from real open times. A confirmation and reminder go out on their own.",
  },
  {
    id: "payment",
    n: "03",
    label: "Payment",
    reviewed: ["How invoices are sent", "How payment is confirmed", "Deposits and chasers"],
    friction: "Checked manually",
    frictionDetail: "Someone logs into the bank app to see who's paid, then ticks it off a list.",
    improvement: "Automatic payment confirmations",
    improvementDetail: "Payment links that mark the booking as paid and send a receipt without anyone checking.",
  },
  {
    id: "records",
    n: "04",
    label: "Records",
    reviewed: ["Where customer details live", "Notes and history", "What's needed for repeat work"],
    friction: "Information in three places",
    frictionDetail: "A spreadsheet, a notes app and a calendar each hold part of the picture.",
    improvement: "One clean record per customer",
    improvementDetail: "Contact, bookings, payments and notes in one place you can search in seconds.",
  },
];
