export interface Doctor {
  id: number
  name: string
  years: string
  period: string
  photo: string
  shortBio: string
  fullBio: string
  historicalContext: string[]
}

const photos = [
  "https://cdn.poehali.dev/projects/e6baf20d-3f0f-44ab-a0b3-f567d9bbd523/files/2d42fc93-03b4-4276-9ee4-d58a2961eecc.jpg",
  "https://cdn.poehali.dev/projects/e6baf20d-3f0f-44ab-a0b3-f567d9bbd523/files/d890b4ed-9461-4c6f-9cdb-25f4be593bc3.jpg",
  "https://cdn.poehali.dev/projects/e6baf20d-3f0f-44ab-a0b3-f567d9bbd523/files/cb976842-686d-49fd-baf6-398a39c5aa14.jpg",
  "https://cdn.poehali.dev/projects/e6baf20d-3f0f-44ab-a0b3-f567d9bbd523/files/30a6d514-4e89-4828-a999-5b6fa06a3162.jpg",
  "https://cdn.poehali.dev/projects/e6baf20d-3f0f-44ab-a0b3-f567d9bbd523/files/75cdef9e-8caa-453a-9431-41b60e574899.jpg",
  "https://cdn.poehali.dev/projects/e6baf20d-3f0f-44ab-a0b3-f567d9bbd523/files/5fe450a2-6924-4f3d-b4d7-d0ea682687c8.jpg",
]

const firstNames = ["Иван", "Мария", "Сергей", "Анна", "Пётр", "Ольга", "Николай", "Елена", "Александр", "Татьяна", "Виктор", "Наталья", "Михаил", "Ирина", "Владимир"]
const middleNames = ["Петрович", "Николаевна", "Александрович", "Ивановна", "Сергеевич", "Викторовна", "Михайлович", "Андреевна", "Алексеевич", "Фёдоровна"]
const lastNames = ["Абрамов", "Тайбарей", "Выучейский", "Ледков", "Хатанзейский", "Носов", "Соболев", "Артеева", "Явтысый", "Канюков", "Талеев", "Рочев", "Пырерка", "Вылка", "Латышев"]

const eventsByDecade: Record<string, string[]> = {
  "1920s": ["Образован Ненецкий национальный округ (1929)", "В стране проводится индустриализация", "В мире продолжается развитие пенициллина Флемингом"],
  "1930s": ["Начало масштабной коллективизации в округе", "В мире — Великая депрессия и её последствия", "Открыты первые сульфаниламидные препараты"],
  "1940s": ["Великая Отечественная война и мобилизация медиков", "Победа в 1945 году, восстановление хозяйства", "Массовое внедрение пенициллина в мировую медицину"],
  "1950s": ["Начало освоения Севера и рост посёлков округа", "Первый полёт человека в стратосферу готовится в СССР", "Открытие структуры ДНК Уотсоном и Криком (1953)"],
  "1960s": ["Полёт Юрия Гагарина в космос (1961)", "Развитие санитарной авиации в северных регионах", "Первая пересадка сердца в мире (1967)"],
  "1970s": ["Активное развитие нефтегазовой отрасли в НАО", "Расширение сети фельдшерских пунктов в тундре", "Открытие компьютерной томографии"],
  "1980s": ["Перестройка и изменения в системе здравоохранения", "Чернобыльская авария (1986) и её отклик в медицине", "Развитие вакцинации и профилактической медицины"],
  "1990s": ["Распад СССР и реформа здравоохранения России", "Становление современной системы ОМС", "Развитие телемедицины в мире"],
  "2000s": ["Модернизация здравоохранения в НАО", "Национальный проект «Здоровье» в России", "Расшифровка генома человека (2003)"],
}

function decadeFor(startYear: number): string {
  const d = Math.floor(startYear / 10) * 10
  return `${d}s`
}

export const doctors: Doctor[] = Array.from({ length: 39 }, (_, i) => {
  const startYear = 1929 + i * 2
  const endYear = startYear + (5 + (i % 6))
  const first = firstNames[i % firstNames.length]
  const middle = middleNames[i % middleNames.length]
  const last = lastNames[i % lastNames.length]
  const decade = decadeFor(startYear)
  return {
    id: i + 1,
    name: `${first} ${middle} ${last}`,
    years: `${startYear}–${endYear}`,
    period: `Главный врач округа`,
    photo: photos[i % photos.length],
    shortBio: `Внёс значительный вклад в развитие здравоохранения Ненецкого округа, работая в период ${startYear}–${endYear} годов. Организовывал медицинскую помощь в удалённых посёлках и стойбищах.`,
    fullBio: `${first} ${middle} ${last} возглавлял медицинскую службу Ненецкого автономного округа с ${startYear} по ${endYear} год. За годы работы им были организованы выездные медицинские бригады, налажено снабжение фельдшерских пунктов, а также подготовлено новое поколение врачей для работы в условиях Крайнего Севера. Его труд отмечен благодарностями окружного отдела здравоохранения и уважением коллег.`,
    historicalContext: eventsByDecade[decade] || eventsByDecade["1990s"],
  }
})

export function getDoctorById(id: number): Doctor | undefined {
  return doctors.find((d) => d.id === id)
}
