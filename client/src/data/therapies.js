import {
  Activity,
  Baby,
  Brain,
  HeartPulse,
  PersonStanding,
  Stethoscope,
} from 'lucide-react';

export const therapies = [
  {
    id: 'sports-injury',
    name: 'Sports Injury Rehab',
    shortDescription:
      'Return to sport safely with targeted strengthening, mobility work, and load management.',
    description:
      'We assess biomechanics and tissue healing stages to build a phased return-to-play plan. Treatment includes manual therapy, sport-specific drills, and injury-prevention strategies tailored to your discipline.',
    duration: '45–60 min sessions',
    icon: Activity,
  },
  {
    id: 'post-surgery',
    name: 'Post-Surgery Recovery',
    shortDescription:
      'Structured rehabilitation after orthopedic or soft-tissue procedures to restore function.',
    description:
      'Post-operative care follows surgeon protocols while progressing range of motion, swelling control, and functional strength. We coordinate milestones so you recover confidently at each phase.',
    duration: '45–60 min sessions',
    icon: Stethoscope,
  },
  {
    id: 'back-neck',
    name: 'Back & Neck Pain',
    shortDescription:
      'Relieve chronic or acute spinal pain with hands-on therapy and corrective exercise.',
    description:
      'Our approach combines spinal mobilization, postural re-education, and core stability training. We identify contributing factors — desk posture, sleep habits, stress — for lasting relief.',
    duration: '40–50 min sessions',
    icon: PersonStanding,
  },
  {
    id: 'neurological',
    name: 'Neurological Physiotherapy',
    shortDescription:
      'Support recovery after stroke, Parkinson’s, or nerve injury with neuro-rehab techniques.',
    description:
      'Sessions focus on balance, gait training, coordination, and task-specific practice. Goals are set with you and caregivers to maximize independence and quality of movement.',
    duration: '50–60 min sessions',
    icon: Brain,
  },
  {
    id: 'pediatric',
    name: 'Pediatric Physio',
    shortDescription:
      'Gentle, play-based therapy for children with developmental or musculoskeletal needs.',
    description:
      'We work with infants through teens on motor milestones, posture, and participation in school and sport. Parents receive home programs and guidance for everyday progress.',
    duration: '30–45 min sessions',
    icon: Baby,
  },
  {
    id: 'geriatric',
    name: 'Geriatric Care',
    shortDescription:
      'Improve mobility, balance, and confidence for healthy aging and fall prevention.',
    description:
      'Programs emphasize strength, flexibility, and safe movement at home and in the community. We address arthritis, osteoporosis, and recovery after hospital stays.',
    duration: '40–50 min sessions',
    icon: HeartPulse,
  },
];
