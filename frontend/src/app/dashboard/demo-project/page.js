import DemoProjectComponent from "@/components/Dashboard/DemoProjects/DemoProjectComponent";

export const metadata = {
  title: "Project Management",
  description: "Manage showcase projects and demos from the Amaar App dashboard.",
  robots: {
    index: false,
    follow: false
  }
};

export default function DemoProjectPage() {
  return <DemoProjectComponent />;
}