import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavSection from '@/components/Navsection/NavSection'
import EasyStepSection from '@/components/Easystepsection/EasyStepSection'
import ExploreByCategory from '@/components/Explorecategory/ExploreByCategory'
import FeaturedJobs from '@/components/Featuredjobs/FeaturedJobs'
import Footer from '@/components/Footer/Footer'
import Login from '@/components/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <NavSection/>
    <EasyStepSection/>
    <ExploreByCategory/>
    <FeaturedJobs/>
    </>
  )
}
