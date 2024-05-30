import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import NavSection from "@/components/Navsection/NavSection";
import EasyStepSection from "@/components/Easystepsection/EasyStepSection";
import ExploreByCategory from "@/components/Explorecategory/ExploreByCategory";
import FeaturedJobs from "@/components/Featuredjobs/FeaturedJobs";
import { CONSTANTS } from "@/services/config/app-config";
import { useEffect } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (
      CONSTANTS.CAREER_OPPORTUNITIES_PORTAL === false &&
      CONSTANTS.CANDIDATE_EVALUATION_PORTAL
    ) {
      router.push("/hire");
    }
  }, []);

  if (CONSTANTS.CAREER_OPPORTUNITIES_PORTAL) {
    return (
      <>
      <Head>
        <title>8848 Digital-Job Portal</title>
        <meta name="description" content="8848 Digital Job Portal - Find your dream job here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-1.png" />
      </Head>
        <NavSection />
        <EasyStepSection />
        <ExploreByCategory />
        <FeaturedJobs />
      </>
    );
  }

  // If neither condition is met, you might want to return a fallback or an empty component.
  return null;
}
