import dotenv from 'dotenv';
import connectDB from '../config/database.js';
import User from '../models/User.js';
import Project from '../models/Project.js';
import Testimonial from '../models/Testimonial.js';

dotenv.config();

const seedData = async () => {
  try {
    await connectDB();

    // Clear existing data
    await User.deleteMany();
    await Project.deleteMany();
    await Testimonial.deleteMany();

    console.log('🗑️  Cleared existing data');

    // Create admin user
    const admin = await User.create({
      name: 'Admin',
      email: process.env.ADMIN_EMAIL || 'admin@gbcomputers.com',
      password: process.env.ADMIN_PASSWORD || 'Admin@123',
      role: 'admin',
      company: 'GB Computers'
    });

    console.log('✅ Admin user created');

    // Create sample projects
    const projects = await Project.insertMany([
      {
        title: 'E-Commerce Platform',
        description: 'Full-featured online shopping platform with payment integration',
        category: 'web',
        client: 'TechMart Inc',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        duration: '4 months',
        teamSize: 5,
        status: 'completed',
        featured: true,
        completedDate: new Date('2023-12-01')
      },
      {
        title: 'Mobile Banking App',
        description: 'Secure mobile banking application with biometric authentication',
        category: 'app',
        client: 'FinanceBank',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
        technologies: ['React Native', 'Firebase', 'Node.js'],
        duration: '6 months',
        teamSize: 6,
        status: 'completed',
        featured: true,
        completedDate: new Date('2023-11-15')
      },
      {
        title: 'AI Chatbot System',
        description: 'Intelligent customer service chatbot with NLP capabilities',
        category: 'ai',
        client: 'CustomerCare Pro',
        image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800',
        technologies: ['Python', 'TensorFlow', 'OpenAI', 'FastAPI'],
        duration: '3 months',
        teamSize: 4,
        status: 'completed',
        featured: true,
        completedDate: new Date('2023-10-20')
      },
      {
        title: 'Healthcare Management System',
        description: 'Comprehensive hospital management and patient tracking system',
        category: 'software',
        client: 'MediCare Hospital',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
        technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Angular'],
        duration: '8 months',
        teamSize: 8,
        status: 'completed',
        featured: false,
        completedDate: new Date('2023-09-30')
      },
      {
        title: 'Real Estate Portal',
        description: 'Property listing and management platform with virtual tours',
        category: 'web',
        client: 'PropertyHub',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
        technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
        duration: '5 months',
        teamSize: 5,
        status: 'completed',
        featured: false,
        completedDate: new Date('2023-08-15')
      }
    ]);

    console.log(`✅ ${projects.length} projects created`);

    // Create sample testimonials
    const testimonials = await Testimonial.insertMany([
      {
        name: 'John Smith',
        position: 'CEO',
        company: 'TechMart Inc',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
        rating: 5,
        message: 'GB Computers delivered an exceptional e-commerce platform that exceeded our expectations. Their team is professional, responsive, and highly skilled.',
        featured: true
      },
      {
        name: 'Sarah Williams',
        position: 'CTO',
        company: 'FinanceBank',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300',
        rating: 5,
        message: 'The mobile banking app they developed is secure, user-friendly, and has received excellent feedback from our customers. Highly recommended!',
        featured: true
      },
      {
        name: 'Michael Chen',
        position: 'Director of Operations',
        company: 'CustomerCare Pro',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
        rating: 5,
        message: 'The AI chatbot has transformed our customer service operations. Response times are faster and customer satisfaction has increased significantly.',
        featured: true
      },
      {
        name: 'Emily Davis',
        position: 'Hospital Administrator',
        company: 'MediCare Hospital',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300',
        rating: 5,
        message: 'The healthcare management system has streamlined our operations and improved patient care. GB Computers understood our needs perfectly.',
        featured: false
      }
    ]);

    console.log(`✅ ${testimonials.length} testimonials created`);

    console.log('\n🎉 Database seeded successfully!');
    console.log('\n📧 Admin Login:');
    console.log(`   Email: ${admin.email}`);
    console.log(`   Password: ${process.env.ADMIN_PASSWORD || 'Admin@123'}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error);
    process.exit(1);
  }
};

seedData();
