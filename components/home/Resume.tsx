"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import Experience from './Experience';

const Resume: React.FunctionComponent = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
			className='flex items-center justify-center py-6'
		>
			<div className="w-full">
				<h1 className="heading">
					Why <span className="text-purple">hire</span> me?
				</h1>

				<div className='pt-16'>
					<Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
						<TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
							<TabsTrigger value='experience'>Experience</TabsTrigger>
							<TabsTrigger value='education'>Education</TabsTrigger>
							<TabsTrigger value='skills'>Skills</TabsTrigger>
						</TabsList>

						<div className='min-h-[70vh] w-full'>
							<TabsContent value='experience' className='w-full'>
								<ScrollArea className='h-[55vh]'>
									<Experience />
								</ScrollArea>
							</TabsContent>
							<TabsContent value='education' className='w-full'>
								Education
							</TabsContent>
							<TabsContent value='skills' className='w-full'>
								My Skills
							</TabsContent>
						</div>

					</Tabs>
				</div>
			</div>
		</motion.div>
	)
}

export default Resume