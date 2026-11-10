import SignInPage from "@/components/header/Signin";

export const metadata = {
  title: "Sign In to Your Account",
  description: "Sign in to your Amaar App account. Access your dashboard, manage projects, track orders, view services, and collaborate with our development team. Secure login for clients and partners.",
  keywords: ["sign in", "login", "account access", "client portal", "user login", "secure login"],
  openGraph: {
    title: "Sign In | Amaar App",
    description: "Access your Amaar App account dashboard and manage your projects.",
    images: [{
      url: '/banner1.jpg',
      width: 1200,
      height: 630,
      alt: 'Sign In to Amaar App'
    }]
  },
  robots: {
    index: false,
    follow: false
  },
  alternates: {
    canonical: '/signin'
  }
};

export default function SignInRoute() {
  return <SignInPage />;
}