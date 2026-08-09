import dotenv from 'dotenv';
import { connectDB } from '../src/config/db.js';
import { Therapy } from '../src/models/Therapy.js';

dotenv.config();

const seedTherapies = [
  {
    name: 'Sports Injury Rehab',
    slug: 'sports-injury',
    shortDescription:
      'Return to sport safely with targeted strengthening, mobility work, and load management.',
    description:
      'We assess biomechanics and tissue healing stages to build a phased return-to-play plan.',
    duration: '45–60 min sessions',
    iconKey: 'activity',
    sortOrder: 1,
  },
  {
    name: 'Post-Surgery Recovery',
    slug: 'post-surgery',
    shortDescription:
      'Structured rehabilitation after orthopedic or soft-tissue procedures to restore function.',
    description:
      'Post-operative care follows surgeon protocols while progressing range of motion and strength.',
    duration: '45–60 min sessions',
    iconKey: 'stethoscope',
    sortOrder: 2,
  },
  {
    name: 'Back & Neck Pain',
    slug: 'back-neck',
    shortDescription:
      'Relieve chronic or acute spinal pain with hands-on therapy and corrective exercise.',
    description:
      'Combines spinal mobilization, postural re-education, and core stability training.',
    duration: '40–50 min sessions',
    iconKey: 'person-standing',
    sortOrder: 3,
  },
  {
    name: 'Neurological Physiotherapy',
    slug: 'neurological',
    shortDescription:
      'Support recovery after stroke, Parkinson’s, or nerve injury with neuro-rehab techniques.',
    description:
      'Focus on balance, gait training, coordination, and task-specific practice.',
    duration: '50–60 min sessions',
    iconKey: 'brain',
    sortOrder: 4,
  },
  {
    name: 'Pediatric Physio',
    slug: 'pediatric',
    shortDescription:
      'Gentle, play-based therapy for children with developmental or musculoskeletal needs.',
    description:
      'Motor milestones, posture, and participation in school and sport with parent guidance.',
    duration: '30–45 min sessions',
    iconKey: 'baby',
    sortOrder: 5,
  },
  {
    name: 'Geriatric Care',
    slug: 'geriatric',
    shortDescription:
      'Improve mobility, balance, and confidence for healthy aging and fall prevention.',
    description:
      'Strength, flexibility, and safe movement for arthritis, osteoporosis, and post-hospital recovery.',
    duration: '40–50 min sessions',
    iconKey: 'heart-pulse',
    sortOrder: 6,
  },
];

const run = async () => {
  await connectDB();

  for (const therapy of seedTherapies) {
    await Therapy.findOneAndUpdate({ slug: therapy.slug }, therapy, {
      upsert: true,
      new: true,
      runValidators: true,
    });
  }

  console.log(`Seeded ${seedTherapies.length} therapies`);
  process.exit(0);
};

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
