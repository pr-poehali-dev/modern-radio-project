import { motion } from "framer-motion"
import { Link, useParams, Navigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"
import { getDoctorById } from "@/data/doctors"

const DoctorDetail = () => {
  const { id } = useParams()
  const doctor = getDoctorById(Number(id))

  if (!doctor) return <Navigate to="/doctors" replace />

  return (
    <div className="min-h-screen w-full bg-white">
      <nav className="w-full px-6 py-4 border-b">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold font-heading text-gray-900">
            Медицина Севера
          </Link>
          <Button asChild variant="outline">
            <Link to="/doctors">
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              Ко всем врачам
            </Link>
          </Button>
        </div>
      </nav>

      <section className="py-16 container max-w-4xl">
        <motion.div
          className="flex flex-col sm:flex-row gap-8 items-start mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={doctor.photo}
            alt={doctor.name}
            className="w-full sm:w-64 h-64 object-cover rounded-2xl shadow-lg shrink-0"
          />
          <div>
            <h1 className="text-2xl lg:text-3xl font-extrabold font-heading mb-2">{doctor.name}</h1>
            <p className="text-indigo-600 font-medium mb-1">{doctor.period}</p>
            <p className="text-muted-foreground mb-6">{doctor.years}</p>
            <p className="text-base leading-relaxed">{doctor.fullBio}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-slate-50 border-none">
            <CardContent className="pt-6">
              <h2 className="text-xl font-bold font-heading mb-4 flex items-center gap-2">
                <Icon name="Globe2" size={22} className="text-indigo-600" />
                Что происходило в стране и мире в это время
              </h2>
              <ul className="flex flex-col gap-3">
                {doctor.historicalContext.map((event, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Icon name="Dot" size={22} className="text-indigo-500 shrink-0 mt-0.5" />
                    <span>{event}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  )
}

export default DoctorDetail
