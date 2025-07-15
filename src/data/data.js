import brailleImg from '../assets/events/braille-day.jpg';
import cancerImg from '../assets/events/cancer-day.jpeg';
import womenImg from '../assets/events/womens-day.avif';
import happinessImg from '../assets/events/happiness-day.jpg';
import downSyndromeImg from '../assets/events/down-syndrome-day.jpg';
import waterImg from '../assets/events/water-day.jpg';
import autismImg from '../assets/events/autism-day.jpg';
import healthImg from '../assets/events/health-day.avif';
import earthImg from '../assets/events/earth-day.jpg';
import noTobaccoImg from '../assets/events/no-tobacco-day.webp';
import environmentImg from '../assets/events/environment-day.jpg';
import oceansImg from '../assets/events/ocean-day.png';
import yogaImg from '../assets/events/yoga-day.webp';
import alzheimersImg from '../assets/events/alzheimers-day.webp';
import aidsImg from '../assets/events/aids-day.webp';
import educationImg from '../assets/events/education-day.jpeg';
import sparrowImg from '../assets/events/sparrow-day.webp';
import literacyImg from '../assets/events/literacy-day.jpg';
import mentalHealthImg from '../assets/events/mental-health-day.jpeg';
import disabilityImg from '../assets/events/disability-day.webp';


const awarenessEvents = [
  // ---- 2023 ----
  { date: new Date(2023,0,4), title: "World Braille Day", category: "Social", img: brailleImg },
  { date: new Date(2023,1,4), title: "World Cancer Day", category: "Health", img: cancerImg },
  { date: new Date(2023,2,8), title: "International Women's Day", category: "Social", img: womenImg },
  { date: new Date(2023,2,20), title: "World Happiness Day", category: "Social", img: happinessImg },
  { date: new Date(2023,2,21), title: "World Down Syndrome Day", category: "Health", img: downSyndromeImg },
  { date: new Date(2023,2,22), title: "World Water Day", category: "Environment", img: waterImg },
  { date: new Date(2023,3,2), title: "World Autism Awareness Day", category: "Health", img: autismImg },
  { date: new Date(2023,3,7), title: "World Health Day", category: "Health", img: healthImg },
  { date: new Date(2023,3,22), title: "Earth Day", category: "Environment", img: earthImg },
  { date: new Date(2023,4,31), title: "World No Tobacco Day", category: "Health", img: noTobaccoImg },
  { date: new Date(2023,5,5), title: "World Environment Day", category: "Environment", img: environmentImg },
  { date: new Date(2023,5,8), title: "World Oceans Day", category: "Environment", img: oceansImg },
  { date: new Date(2023,5,21), title: "World Yoga Day", category: "Health", img: yogaImg },
  { date: new Date(2023,8,21), title: "World Alzheimer's Day", category: "Health", img: alzheimersImg },
  { date: new Date(2023,11,1), title: "World AIDS Day", category: "Health", img: aidsImg },

  // ---- 2024 ----
  { date: new Date(2024,0,24), title: "International Day of Education", category: "Social", img: educationImg },
  { date: new Date(2024,1,4), title: "World Cancer Day", category: "Health", img: cancerImg },
  { date: new Date(2024,2,8), title: "International Women's Day", category: "Social", img: womenImg },
  { date: new Date(2024,2,20), title: "World Sparrow Day", category: "Environment", img: sparrowImg },
  { date: new Date(2024,2,21), title: "World Down Syndrome Day", category: "Health", img: downSyndromeImg },
  { date: new Date(2024,2,22), title: "World Water Day", category: "Environment", img: waterImg },
  { date: new Date(2024,3,7), title: "World Health Day", category: "Health", img: healthImg },
  { date: new Date(2024,3,22), title: "Earth Day", category: "Environment", img: earthImg },
  { date: new Date(2024,4,31), title: "World No Tobacco Day", category: "Health", img: noTobaccoImg },
  { date: new Date(2024,5,5), title: "World Environment Day", category: "Environment", img: environmentImg },
  { date: new Date(2024,5,8), title: "World Oceans Day", category: "Environment", img: oceansImg },
  { date: new Date(2024,5,21), title: "World Yoga Day", category: "Health", img: yogaImg },
  { date: new Date(2024,8,8), title: "International Literacy Day", category: "Social", img: literacyImg },
  { date: new Date(2024,9,10), title: "World Mental Health Day", category: "Health", img: mentalHealthImg },
  { date: new Date(2024,11,3), title: "International Day of Persons with Disabilities", category: "Social", img: disabilityImg },

  // ---- 2025 ----
  { date: new Date(2025,0,27), title: "International Holocaust Remembrance Day", category: "Social", img: disabilityImg },
  { date: new Date(2025,1,4), title: "World Cancer Day", category: "Health", img: cancerImg },
  { date: new Date(2025,2,8), title: "International Women's Day", category: "Social", img: womenImg },
  { date: new Date(2025,2,20), title: "World Sparrow Day", category: "Environment", img: sparrowImg },
  { date: new Date(2025,2,22), title: "World Water Day", category: "Environment", img: waterImg },
  { date: new Date(2025,3,7), title: "World Health Day", category: "Health", img: healthImg },
  { date: new Date(2025,3,22), title: "Earth Day", category: "Environment", img: earthImg },
  { date: new Date(2025,4,31), title: "World No Tobacco Day", category: "Health", img: noTobaccoImg },
  { date: new Date(2025,5,5), title: "World Environment Day", category: "Environment", img: environmentImg },
  { date: new Date(2025,5,8), title: "World Oceans Day", category: "Environment", img: oceansImg },
  { date: new Date(2025,5,21), title: "World Yoga Day", category: "Health", img: yogaImg },
  { date: new Date(2025,8,8), title: "International Literacy Day", category: "Social", img: literacyImg },
  { date: new Date(2025,9,10), title: "World Mental Health Day", category: "Health", img: mentalHealthImg },
  { date: new Date(2025,11,1), title: "World AIDS Day", category: "Health", img: aidsImg },
  { date: new Date(2025,11,3), title: "International Day of Persons with Disabilities", category: "Social", img: disabilityImg },

  // ---- 2026 ----
  { date: new Date(2026,0,4), title: "World Braille Day", category: "Social", img: brailleImg },
  { date: new Date(2026,1,4), title: "World Cancer Day", category: "Health", img: cancerImg },
  { date: new Date(2026,2,8), title: "International Women's Day", category: "Social", img: womenImg },
  { date: new Date(2026,2,20), title: "World Sparrow Day", category: "Environment", img: sparrowImg },
  { date: new Date(2026,2,22), title: "World Water Day", category: "Environment", img: waterImg },
  { date: new Date(2026,3,7), title: "World Health Day", category: "Health", img: healthImg },
  { date: new Date(2026,3,22), title: "Earth Day", category: "Environment", img: earthImg },
  { date: new Date(2026,4,31), title: "World No Tobacco Day", category: "Health", img: noTobaccoImg },
  { date: new Date(2026,5,5), title: "World Environment Day", category: "Environment", img: environmentImg },
  { date: new Date(2026,5,8), title: "World Oceans Day", category: "Environment", img: oceansImg },
  { date: new Date(2026,5,21), title: "World Yoga Day", category: "Health", img: yogaImg },
  { date: new Date(2026,8,8), title: "International Literacy Day", category: "Social", img: literacyImg },
  { date: new Date(2026,9,10), title: "World Mental Health Day", category: "Health", img: mentalHealthImg },
  { date: new Date(2026,11,1), title: "World AIDS Day", category: "Health", img: aidsImg },
  { date: new Date(2026,11,3), title: "International Day of Persons with Disabilities", category: "Social", img: disabilityImg },

  // ---- 2027 ----
  { date: new Date(2027,0,24), title: "International Day of Education", category: "Social", img: educationImg },
  { date: new Date(2027,1,4), title: "World Cancer Day", category: "Health", img: cancerImg },
  { date: new Date(2027,2,8), title: "International Women's Day", category: "Social", img: womenImg },
  { date: new Date(2027,2,20), title: "World Sparrow Day", category: "Environment", img: sparrowImg },
  { date: new Date(2027,2,22), title: "World Water Day", category: "Environment", img: waterImg },
  { date: new Date(2027,3,7), title: "World Health Day", category: "Health", img: healthImg },
  { date: new Date(2027,3,22), title: "Earth Day", category: "Environment", img: earthImg },
  { date: new Date(2027,4,31), title: "World No Tobacco Day", category: "Health", img: noTobaccoImg },
  { date: new Date(2027,5,5), title: "World Environment Day", category: "Environment", img: environmentImg },
  { date: new Date(2027,5,8), title: "World Oceans Day", category: "Environment", img: oceansImg },
  { date: new Date(2027,5,21), title: "World Yoga Day", category: "Health", img: yogaImg },
  { date: new Date(2027,8,8), title: "International Literacy Day", category: "Social", img: literacyImg },
  { date: new Date(2027,9,10), title: "World Mental Health Day", category: "Health", img: mentalHealthImg },
  { date: new Date(2027,11,1), title: "World AIDS Day", category: "Health", img: aidsImg },
  { date: new Date(2027,11,3), title: "International Day of Persons with Disabilities", category: "Social", img: disabilityImg },
];



export default awarenessEvents;