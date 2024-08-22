"use client";
import { motion } from "framer-motion";
import { P, H4, H1 } from "@/components/typography";

import { teamMembers } from "./data";
import { TeamCard } from "@/components/card";


export const CoreTeam = () => {


  return (
    <div className="  my-10 space-y-5 p-section-padding-sm md:p-section-padding">
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <H1 color="text-primary" className="text-center">
          Our Core Team
        </H1>
      </motion.div>
      <div className="flex flex-col md:flex-row   items-center justify-start md:gap-5 md:overflow-x-scroll no-scrollbar">
        {teamMembers.map((member, index) => (

          <TeamCard
          key={index}
            img={member.img}
            title={member.title}
            pos={member.pos}
          />

        ))}
      </div>
    </div>
  );
};