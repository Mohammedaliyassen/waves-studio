import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Workflow",
  description: "Track the progress of your projects in real-time.",
  robots: {
    index: false,
    follow: false,
  }
};

export default function WorkflowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
