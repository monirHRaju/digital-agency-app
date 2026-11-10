import SignUpPage from "@/components/header/SignUp";

export const metadata = {
  title: "Create Your Account - Sign Up",
  description: "Create your Amaar App account and get started with premium software development services, AI solutions, web development, and custom software projects. Join us for exclusive access to our services, client dashboard, project management, and expert support.",
  keywords: ["sign up", "create account", "register", "new account", "client registration", "join us"],
  openGraph: {
    title: "Sign Up | Amaar App",
    description: "Create your account to access premium software development services and solutions.",
    images: [{
      url: '/banner1.jpg',
      width: 1200,
      height: 630,
      alt: 'Sign Up for Amaar App'
    }]
  },
  robots: {
    index: false,
    follow: false
  },
  alternates: {
    canonical: '/signup'
  }
};

export default function SignUpRoute() {
  return <SignUpPage />;
}