"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Award, Star } from "lucide-react"

const achievements = [
  {
    id: 1,
    title: "College Volleyball Champion",
    organization: "Dr. D. Y. Patil College of Engineering and Innovation",
    year: "2024",
    description:
      "Led the college volleyball team to victory in the inter-college championship, demonstrating teamwork, discipline, and competitive spirit.",
    icon: "🏐",
    type: "Sports",
  },
  {
    id: 2,
    title: "College Cricket Champion",
    organization: "Dr. D. Y. Patil College of Engineering and Innovation",
    year: "2024",
    description:
      "Represented the college cricket team in inter-college tournaments, contributing with consistent performances on the field.",
    icon: "🏏",
    type: "Sports",
  },
  {
    id: 3,
    title: "College Kabaddi Champion",
    organization: "Dr. D. Y. Patil College of Engineering and Innovation",
    year: "2024",
    description:
      "Active member of the college kabaddi team, competing and winning in inter-college kabaddi championships.",
    icon: "🤼",
    type: "Sports",
  },
  {
    id: 4,
    title: "Academic Excellence",
    organization: "Dr. D. Y. Patil College of Engineering",
    year: "2023 - Present",
    description:
      "Maintaining a CGPA of 9.3/10 in Computer Engineering, consistently performing among the top students.",
    icon: "📚",
    type: "Academic",
  },
  {
    id: 5,
    title: "Hackathon Participant",
    organization: "College Tech Festival",
    year: "2024",
    description:
      "Participated in college-level hackathon, building AI-powered solutions under time constraints.",
    icon: "💻",
    type: "Tech",
  },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 liquid-gradient font-sora">
            Achievements & Trophies
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            My sports achievements, academic milestones, and competition highlights.
          </p>
        </motion.div>

        {/* Trophy Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex justify-center gap-8 mb-12"
        >
          {[
            { icon: <Trophy className="h-10 w-10 text-yellow-400" />, label: "Champion" },
            { icon: <Medal className="h-10 w-10 text-orange-400" />, label: "Medalist" },
            { icon: <Award className="h-10 w-10 text-cyan-400" />, label: "Achiever" },
            { icon: <Star className="h-10 w-10 text-purple-400" />, label: "Star Performer" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="flex flex-col items-center gap-2"
            >
              {item.icon}
              <span className="text-white/60 text-xs">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="glass-morphism border-white/20 hover:border-yellow-400/50 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{achievement.icon}</div>

                  <Badge
                    variant="secondary"
                    className={`mb-3 ${
                      achievement.type === "Sports"
                        ? "bg-yellow-400/20 text-yellow-400"
                        : achievement.type === "Tech"
                          ? "bg-cyan-400/20 text-cyan-400"
                          : "bg-purple-400/20 text-purple-400"
                    }`}
                  >
                    {achievement.type}
                  </Badge>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {achievement.title}
                  </h3>

                  <p className="text-cyan-400 text-sm mb-2">
                    {achievement.organization}
                  </p>

                  <p className="text-white/50 text-sm mb-3">{achievement.year}</p>

                  <p className="text-white/70">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trophy Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="glass-morphism rounded-xl p-6 max-w-2xl mx-auto border border-yellow-400/20">
            <img
              src="/achievements/trophies.jpg"
              alt="Amit Kolpe - Trophies and Achievements"
              className="w-full h-auto rounded-lg object-cover max-h-96"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = "none"
                const fallback = target.nextElementSibling as HTMLElement
                if (fallback) fallback.style.display = "flex"
              }}
            />
            <div className="hidden flex-col items-center justify-center py-12">
              <div className="text-6xl mb-4">🏆</div>
              <p className="text-white/60 text-sm">
                Place your trophy photo at{" "}
                <code className="text-cyan-400">public/achievements/trophies.jpg</code>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
