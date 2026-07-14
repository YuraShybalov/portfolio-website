import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const admin = await prisma.admin.upsert({
    where: { login: 'admin' },
    update: {
      email: 'admin@example.com',
      passwordHash: '$2b$10$WmT4Qq2j3Y0J8uQvXGZ5QeS1Y2n2V1N9fQzWq8wX1r3LzA1B2Y3C',
    },
    create: {
      login: 'admin',
      email: 'admin@example.com',
      passwordHash: '$2b$10$WmT4Qq2j3Y0J8uQvXGZ5QeS1Y2n2V1N9fQzWq8wX1r3LzA1B2Y3C',
    },
  });

  const profile = await prisma.profile.upsert({
    where: { email: 'portfolio@example.com' },
    update: {
      firstName: 'Іван',
      lastName: 'Коваленко',
      position: 'Full Stack Developer',
      shortAbout: 'Створюю сучасні вебсервіси й динамічні інтерфейси.',
      fullAbout:
        'Я розробник з досвідом у створенні продуктів від ідеї до продакшену. Люблю чистий код, хорошу UX і швидкий розвиток.',
      phone: '+380501112233',
      location: 'Київ, Україна',
    },
    create: {
      firstName: 'Іван',
      lastName: 'Коваленко',
      position: 'Full Stack Developer',
      shortAbout: 'Створюю сучасні вебсервіси й динамічні інтерфейси.',
      fullAbout:
        'Я розробник з досвідом у створенні продуктів від ідеї до продакшену. Люблю чистий код, хорошу UX і швидкий розвиток.',
      phone: '+380501112233',
      email: 'portfolio@example.com',
      location: 'Київ, Україна',
    },
  });

  await prisma.socialLink.upsert({
    where: {
      id: 1,
    },
    update: {
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com',
      order: 1,
      profileId: profile.id,
    },
    create: {
      id: 1,
      name: 'GitHub',
      icon: 'github',
      url: 'https://github.com',
      order: 1,
      profileId: profile.id,
    },
  });

  const technology = await prisma.technology.upsert({
    where: { name: 'TypeScript' },
    update: {
      icon: 'typescript',
      category: 'LANGUAGE',
      website: 'https://www.typescriptlang.org/',
      order: 1,
    },
    create: {
      name: 'TypeScript',
      icon: 'typescript',
      category: 'LANGUAGE',
      website: 'https://www.typescriptlang.org/',
      order: 1,
    },
  });

  const project = await prisma.project.upsert({
    where: { slug: 'portfolio-website' },
    update: {
      title: 'Portfolio Website',
      thumbnail: 'https://example.com/portfolio.jpg',
      shortDescription: 'Портфоліо-сайт для демонстрації проектів і навичок.',
      description: 'Простий і сучасний сайт з адміністративною панеллю.',
      type: 'FULLSTACK',
      githubUrl: 'https://github.com/example/portfolio',
      liveUrl: 'https://example.com',
      featured: true,
      order: 1,
    },
    create: {
      title: 'Portfolio Website',
      slug: 'portfolio-website',
      thumbnail: 'https://example.com/portfolio.jpg',
      shortDescription: 'Портфоліо-сайт для демонстрації проектів і навичок.',
      description: 'Простий і сучасний сайт з адміністративною панеллю.',
      type: 'FULLSTACK',
      githubUrl: 'https://github.com/example/portfolio',
      liveUrl: 'https://example.com',
      featured: true,
      order: 1,
    },
  });

  await prisma.projectTechnology.upsert({
    where: {
      projectId_technologyId: {
        projectId: project.id,
        technologyId: technology.id,
      },
    },
    update: {},
    create: {
      projectId: project.id,
      technologyId: technology.id,
    },
  });

  console.log('Seed completed successfully');
  console.log({ admin: admin.login, profile: profile.email, project: project.slug });
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
