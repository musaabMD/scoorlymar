import { 
    Stethoscope, 
    Flame, 
    Heart, 
    BookOpen, 
    Shield, 
    Pill,
    Construction,
    Briefcase,
    GraduationCap,
    BarChartHorizontal,
    Brain,
    Award,
    FileText,
    Dumbbell,
    Server,
    Car,
    Clipboard,
    GraduationCap as Graduation
  } from 'lucide-react';
  
  // All exam data organized by categories
  export const examData = {
    medical: [
      // EMS Category
      { 
        id: 1, 
        name: 'NREMT® Paramedic', 
        category: 'EMS', 
        gradient: 'linear-gradient(145deg, #FF5252, #FF1744)',
        icon: <Heart size={42} strokeWidth={1.5} color="white" />,
        questions: 1290
      },
      { 
        id: 2, 
        name: 'NREMT® EMT', 
        category: 'EMS', 
        gradient: 'linear-gradient(145deg, #FF5252, #FF1744)',
        icon: <Heart size={42} strokeWidth={1.5} color="white" />,
        questions: 1030
      },
      { 
        id: 3, 
        name: 'NREMT® AEMT', 
        category: 'EMS', 
        gradient: 'linear-gradient(145deg, #FF5252, #FF1744)',
        icon: <Heart size={42} strokeWidth={1.5} color="white" />,
        questions: 900
      },
      { 
        id: 4, 
        name: 'NREMT® EMR', 
        category: 'EMS', 
        gradient: 'linear-gradient(145deg, #FF5252, #FF1744)',
        icon: <Heart size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 5, 
        name: 'Firefighter I & II', 
        category: 'EMS', 
        gradient: 'linear-gradient(145deg, #FF9800, #F57C00)',
        icon: <Flame size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 6, 
        name: 'IBSC CCP-C®', 
        category: 'EMS', 
        gradient: 'linear-gradient(145deg, #3949AB, #303F9F)',
        icon: <Stethoscope size={42} strokeWidth={1.5} color="white" />,
        questions: 400
      },
      { 
        id: 7, 
        name: 'IBSC FP-C®', 
        category: 'EMS', 
        gradient: 'linear-gradient(145deg, #3949AB, #303F9F)',
        icon: <Stethoscope size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 8, 
        name: 'IBSC TP-C®', 
        category: 'EMS', 
        gradient: 'linear-gradient(145deg, #3949AB, #303F9F)',
        icon: <Stethoscope size={42} strokeWidth={1.5} color="white" />,
        questions: 400
      },
      
      // Nursing School Category
      { 
        id: 9, 
        name: 'ATI® TEAS', 
        category: 'Nursing School', 
        gradient: 'linear-gradient(145deg, #42A5F5, #2196F3)',
        icon: <BookOpen size={42} strokeWidth={1.5} color="white" />,
        questions: 2000
      },
      { 
        id: 10, 
        name: 'College Biology', 
        category: 'Nursing School', 
        gradient: 'linear-gradient(145deg, #42A5F5, #2196F3)',
        icon: <BookOpen size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 11, 
        name: 'College Chemistry', 
        category: 'Nursing School', 
        gradient: 'linear-gradient(145deg, #42A5F5, #2196F3)',
        icon: <BookOpen size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 12, 
        name: 'HESI® A2', 
        category: 'Nursing School', 
        gradient: 'linear-gradient(145deg, #42A5F5, #2196F3)',
        icon: <BookOpen size={42} strokeWidth={1.5} color="white" />,
        questions: 1475
      },
      { 
        id: 13, 
        name: 'NCLEX-PN®', 
        category: 'Nursing School', 
        gradient: 'linear-gradient(145deg, #42A5F5, #2196F3)',
        icon: <Pill size={42} strokeWidth={1.5} color="white" />,
        questions: 1200
      },
      { 
        id: 14, 
        name: 'NCLEX-RN®', 
        category: 'Nursing School', 
        gradient: 'linear-gradient(145deg, #42A5F5, #2196F3)',
        icon: <Pill size={42} strokeWidth={1.5} color="white" />,
        questions: 1500
      },
      { 
        id: 15, 
        name: 'NLN® PAX', 
        category: 'Nursing School', 
        gradient: 'linear-gradient(145deg, #42A5F5, #2196F3)',
        icon: <BookOpen size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      
      // Nursing Specialties Category
      { 
        id: 16, 
        name: 'AACN CCRN® (Adult)', 
        category: 'Nursing Specialties', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Stethoscope size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 17, 
        name: 'AACN CCRN® (Neonatal)', 
        category: 'Nursing Specialties', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Stethoscope size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 18, 
        name: 'AACN CCRN® (Pediatric)', 
        category: 'Nursing Specialties', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Stethoscope size={42} strokeWidth={1.5} color="white" />,
        questions: 400
      },
      { 
        id: 19, 
        name: 'AACN PCCN®', 
        category: 'Nursing Specialties', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Stethoscope size={42} strokeWidth={1.5} color="white" />,
        questions: 650
      },
      { 
        id: 20, 
        name: 'AANPCB® FNP', 
        category: 'Nursing Specialties', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Stethoscope size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 21, 
        name: 'AANPCB® PMHNP-C', 
        category: 'Nursing Specialties', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Brain size={42} strokeWidth={1.5} color="white" />,
        questions: 1200
      },
      { 
        id: 22, 
        name: 'AMCB CNM', 
        category: 'Nursing Specialties', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Stethoscope size={42} strokeWidth={1.5} color="white" />,
        questions: 800
      },
      { 
        id: 23, 
        name: 'ANCC AGACNP-BC', 
        category: 'Nursing Specialties', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Stethoscope size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 24, 
        name: 'ANCC AGPCNP-BC', 
        category: 'Nursing Specialties', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Stethoscope size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 25, 
        name: 'ANCC AMB-BC™', 
        category: 'Nursing Specialties', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Stethoscope size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 26, 
        name: 'ANCC CV-BC™', 
        category: 'Nursing Specialties', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Heart size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 27, 
        name: 'ANCC FNP-BC™', 
        category: 'Nursing Specialties', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Stethoscope size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 28, 
        name: 'ANCC PMHNP-BC', 
        category: 'Nursing Specialties', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Brain size={42} strokeWidth={1.5} color="white" />,
        questions: 1200
      },
      
      // Healthcare Category
      { 
        id: 29, 
        name: 'AAPC CPC®', 
        category: 'Healthcare', 
        gradient: 'linear-gradient(145deg, #66BB6A, #4CAF50)',
        icon: <FileText size={42} strokeWidth={1.5} color="white" />,
        questions: 750
      },
      { 
        id: 30, 
        name: 'AAVSB VTNE®', 
        category: 'Healthcare', 
        gradient: 'linear-gradient(145deg, #66BB6A, #4CAF50)',
        icon: <Stethoscope size={42} strokeWidth={1.5} color="white" />,
        questions: 1150
      },
      { 
        id: 31, 
        name: 'CDR RD', 
        category: 'Healthcare', 
        gradient: 'linear-gradient(145deg, #66BB6A, #4CAF50)',
        icon: <Clipboard size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 32, 
        name: 'FSBPT® NPTE-PT', 
        category: 'Healthcare', 
        gradient: 'linear-gradient(145deg, #66BB6A, #4CAF50)',
        icon: <Clipboard size={42} strokeWidth={1.5} color="white" />,
        questions: 1216
      },
      { 
        id: 33, 
        name: 'FSBPT® NPTE-PTA', 
        category: 'Healthcare', 
        gradient: 'linear-gradient(145deg, #66BB6A, #4CAF50)',
        icon: <Clipboard size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      }
    ],
    trades: [
      // Automotive Category
      { 
        id: 34, 
        name: 'ASE® A Series', 
        category: 'Automotive', 
        gradient: 'linear-gradient(145deg, #FFC107, #FFB300)',
        icon: <Car size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 35, 
        name: 'ASE® G1', 
        category: 'Automotive', 
        gradient: 'linear-gradient(145deg, #FFC107, #FFB300)',
        icon: <Car size={42} strokeWidth={1.5} color="white" />,
        questions: 200
      },
      { 
        id: 36, 
        name: 'ASE® L1', 
        category: 'Automotive', 
        gradient: 'linear-gradient(145deg, #FFC107, #FFB300)',
        icon: <Car size={42} strokeWidth={1.5} color="white" />,
        questions: 200
      },
      { 
        id: 37, 
        name: 'ASE® L2', 
        category: 'Automotive', 
        gradient: 'linear-gradient(145deg, #FFC107, #FFB300)',
        icon: <Car size={42} strokeWidth={1.5} color="white" />,
        questions: 300
      },
      { 
        id: 38, 
        name: 'ASE® L3', 
        category: 'Automotive', 
        gradient: 'linear-gradient(145deg, #FFC107, #FFB300)',
        icon: <Car size={42} strokeWidth={1.5} color="white" />,
        questions: 200
      },
      { 
        id: 39, 
        name: 'ASE® T Series', 
        category: 'Automotive', 
        gradient: 'linear-gradient(145deg, #FFC107, #FFB300)',
        icon: <Car size={42} strokeWidth={1.5} color="white" />,
        questions: 400
      },
      { 
        id: 40, 
        name: 'ASE® xEV (Level 1)', 
        category: 'Automotive', 
        gradient: 'linear-gradient(145deg, #FFC107, #FFB300)',
        icon: <Car size={42} strokeWidth={1.5} color="white" />,
        questions: 200
      },
      { 
        id: 41, 
        name: 'ASE® xEV (Level 2)', 
        category: 'Automotive', 
        gradient: 'linear-gradient(145deg, #FFC107, #FFB300)',
        icon: <Car size={42} strokeWidth={1.5} color="white" />,
        questions: 200
      },
      
      // Construction Category
      { 
        id: 42, 
        name: 'EBPHI NHIE®', 
        category: 'Construction', 
        gradient: 'linear-gradient(145deg, #FF9800, #F57C00)',
        icon: <Construction size={42} strokeWidth={1.5} color="white" />,
        questions: 300
      },
      { 
        id: 43, 
        name: 'NASCLA Journeyman Electrician', 
        category: 'Construction', 
        gradient: 'linear-gradient(145deg, #FF9800, #F57C00)',
        icon: <Construction size={42} strokeWidth={1.5} color="white" />,
        questions: 300
      },
      { 
        id: 44, 
        name: 'NITC Journey Level Plumber', 
        category: 'Construction', 
        gradient: 'linear-gradient(145deg, #FF9800, #F57C00)',
        icon: <Construction size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      }
    ],
    professional: [
      // Business Category
      { 
        id: 45, 
        name: 'APICS® CPIM', 
        category: 'Business', 
        gradient: 'linear-gradient(145deg, #5C6BC0, #3F51B5)',
        icon: <Briefcase size={42} strokeWidth={1.5} color="white" />,
        questions: 1600
      },
      { 
        id: 46, 
        name: 'APICS® CSCP', 
        category: 'Business', 
        gradient: 'linear-gradient(145deg, #5C6BC0, #3F51B5)',
        icon: <Briefcase size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 47, 
        name: 'ASQ® CSSBB', 
        category: 'Business', 
        gradient: 'linear-gradient(145deg, #5C6BC0, #3F51B5)',
        icon: <Award size={42} strokeWidth={1.5} color="white" />,
        questions: 650
      },
      { 
        id: 48, 
        name: 'ASQ® CSSGB', 
        category: 'Business', 
        gradient: 'linear-gradient(145deg, #5C6BC0, #3F51B5)',
        icon: <Award size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      
      // Project Management Category
      { 
        id: 49, 
        name: 'PMI-ACP®', 
        category: 'Project Management', 
        gradient: 'linear-gradient(145deg, #7CB342, #689F38)',
        icon: <BarChartHorizontal size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 50, 
        name: 'PMI CAPM®', 
        category: 'Project Management', 
        gradient: 'linear-gradient(145deg, #7CB342, #689F38)',
        icon: <BarChartHorizontal size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 51, 
        name: 'PMI-PBA®', 
        category: 'Project Management', 
        gradient: 'linear-gradient(145deg, #7CB342, #689F38)',
        icon: <BarChartHorizontal size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 52, 
        name: 'PMI PMP®', 
        category: 'Project Management', 
        gradient: 'linear-gradient(145deg, #7CB342, #689F38)',
        icon: <BarChartHorizontal size={42} strokeWidth={1.5} color="white" />,
        questions: 1020
      },
      { 
        id: 53, 
        name: 'PMI-RMP®', 
        category: 'Project Management', 
        gradient: 'linear-gradient(145deg, #7CB342, #689F38)',
        icon: <BarChartHorizontal size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      
      // HR Category
      { 
        id: 54, 
        name: 'HRCI aPHR®', 
        category: 'HR', 
        gradient: 'linear-gradient(145deg, #AB47BC, #9C27B0)',
        icon: <Briefcase size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 55, 
        name: 'HRCI PHR®', 
        category: 'HR', 
        gradient: 'linear-gradient(145deg, #AB47BC, #9C27B0)',
        icon: <Briefcase size={42} strokeWidth={1.5} color="white" />,
        questions: 1200
      },
      { 
        id: 56, 
        name: 'HRCI SPHR®', 
        category: 'HR', 
        gradient: 'linear-gradient(145deg, #AB47BC, #9C27B0)',
        icon: <Briefcase size={42} strokeWidth={1.5} color="white" />,
        questions: 1200
      },
      { 
        id: 57, 
        name: 'SHRM-CP®', 
        category: 'HR', 
        gradient: 'linear-gradient(145deg, #AB47BC, #9C27B0)',
        icon: <Briefcase size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 58, 
        name: 'SHRM-SCP®', 
        category: 'HR', 
        gradient: 'linear-gradient(145deg, #AB47BC, #9C27B0)',
        icon: <Briefcase size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      }
    ],
    academic: [
      // High School Exams Category
      { 
        id: 59, 
        name: 'ACT®', 
        category: 'High School Exams', 
        gradient: 'linear-gradient(145deg, #AB47BC, #9C27B0)',
        icon: <GraduationCap size={42} strokeWidth={1.5} color="white" />,
        questions: 510
      },
      { 
        id: 60, 
        name: 'SAT®', 
        category: 'High School Exams', 
        gradient: 'linear-gradient(145deg, #AB47BC, #9C27B0)',
        icon: <GraduationCap size={42} strokeWidth={1.5} color="white" />,
        questions: 400
      },
      
      // Teacher Certification Category
      { 
        id: 61, 
        name: 'ASVAB', 
        category: 'Teacher Certification', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Shield size={42} strokeWidth={1.5} color="white" />,
        questions: 800
      },
      { 
        id: 62, 
        name: 'CBEST®', 
        category: 'Teacher Certification', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Graduation size={42} strokeWidth={1.5} color="white" />,
        questions: 360
      },
      { 
        id: 63, 
        name: 'FTCE®', 
        category: 'Teacher Certification', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Graduation size={42} strokeWidth={1.5} color="white" />,
        questions: 610
      },
      { 
        id: 64, 
        name: 'GACE®', 
        category: 'Teacher Certification', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Graduation size={42} strokeWidth={1.5} color="white" />,
        questions: 540
      },
      { 
        id: 65, 
        name: 'Praxis® Core', 
        category: 'Teacher Certification', 
        gradient: 'linear-gradient(145deg, #26A69A, #00897B)',
        icon: <Graduation size={42} strokeWidth={1.5} color="white" />,
        questions: 800
      },
      
      // Adult Education Category
      { 
        id: 66, 
        name: 'GED®', 
        category: 'Adult Education', 
        gradient: 'linear-gradient(145deg, #5C6BC0, #3F51B5)',
        icon: <BookOpen size={42} strokeWidth={1.5} color="white" />,
        questions: 940
      },
      { 
        id: 67, 
        name: 'HiSET®', 
        category: 'Adult Education', 
        gradient: 'linear-gradient(145deg, #5C6BC0, #3F51B5)',
        icon: <BookOpen size={42} strokeWidth={1.5} color="white" />,
        questions: 850
      },
      { 
        id: 68, 
        name: 'ServSafe®', 
        category: 'Adult Education', 
        gradient: 'linear-gradient(145deg, #5C6BC0, #3F51B5)',
        icon: <Shield size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      }
    ],
    it: [
      // Cisco Category
      { 
        id: 69, 
        name: 'Cisco CCNA', 
        category: 'Cisco', 
        gradient: 'linear-gradient(145deg, #0277BD, #01579B)',
        icon: <Server size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 70, 
        name: 'Cisco CCNP', 
        category: 'Cisco', 
        gradient: 'linear-gradient(145deg, #0277BD, #01579B)',
        icon: <Server size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      
      // CompTIA Category
      { 
        id: 71, 
        name: 'CompTIA® A+', 
        category: 'CompTIA', 
        gradient: 'linear-gradient(145deg, #00796B, #004D40)',
        icon: <Server size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 72, 
        name: 'CompTIA® SecurityX', 
        category: 'CompTIA', 
        gradient: 'linear-gradient(145deg, #00796B, #004D40)',
        icon: <Shield size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 73, 
        name: 'CompTIA® Cloud+', 
        category: 'CompTIA', 
        gradient: 'linear-gradient(145deg, #00796B, #004D40)',
        icon: <Server size={42} strokeWidth={1.5} color="white" />,
        questions: 600
      },
      { 
        id: 74, 
        name: 'CompTIA® Network+', 
        category: 'CompTIA', 
        gradient: 'linear-gradient(145deg, #00796B, #004D40)',
        icon: <Server size={42} strokeWidth={1.5} color="white" />,
        questions: 1100
      },
      { 
        id: 75, 
        name: 'CompTIA® Security+', 
        category: 'CompTIA', 
        gradient: 'linear-gradient(145deg, #00796B, #004D40)',
        icon: <Shield size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      
      // ISC2 Category
      { 
        id: 76, 
        name: 'ISC2 CISSP®', 
        category: 'ISC2', 
        gradient: 'linear-gradient(145deg, #546E7A, #37474F)',
        icon: <Shield size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 77, 
        name: 'ISC2 CCSP®', 
        category: 'ISC2', 
        gradient: 'linear-gradient(145deg, #546E7A, #37474F)',
        icon: <Shield size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 78, 
        name: 'ISC2 SSCP®', 
        category: 'ISC2', 
        gradient: 'linear-gradient(145deg, #546E7A, #37474F)',
        icon: <Shield size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      }
    ],
    fitness: [
      // Personal Training Category
      { 
        id: 79, 
        name: 'ACE® CPT', 
        category: 'Personal Training', 
        gradient: 'linear-gradient(145deg, #43A047, #2E7D32)',
        icon: <Dumbbell size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 80, 
        name: 'ACSM-CPT®', 
        category: 'Personal Training', 
        gradient: 'linear-gradient(145deg, #43A047, #2E7D32)',
        icon: <Dumbbell size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 81, 
        name: 'ISSA CPT', 
        category: 'Personal Training', 
        gradient: 'linear-gradient(145deg, #43A047, #2E7D32)',
        icon: <Dumbbell size={42} strokeWidth={1.5} color="white" />,
        questions: 1160
      },
      { 
        id: 82, 
        name: 'NASM-CPT™', 
        category: 'Personal Training', 
        gradient: 'linear-gradient(145deg, #43A047, #2E7D32)',
        icon: <Dumbbell size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 83, 
        name: 'NSCA-CPT®', 
        category: 'Personal Training', 
        gradient: 'linear-gradient(145deg, #43A047, #2E7D32)',
        icon: <Dumbbell size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      
      // Specialist Certifications Category
      { 
        id: 84, 
        name: 'ACSM-CEP®', 
        category: 'Specialist Certifications', 
        gradient: 'linear-gradient(145deg, #00ACC1, #00838F)',
        icon: <Dumbbell size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 85, 
        name: 'ACSM-EP®', 
        category: 'Specialist Certifications', 
        gradient: 'linear-gradient(145deg, #00ACC1, #00838F)',
        icon: <Dumbbell size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 86, 
        name: 'ACSM-GEI®', 
        category: 'Specialist Certifications', 
        gradient: 'linear-gradient(145deg, #00ACC1, #00838F)',
        icon: <Dumbbell size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 87, 
        name: 'NASM-CES™', 
        category: 'Specialist Certifications', 
        gradient: 'linear-gradient(145deg, #00ACC1, #00838F)',
        icon: <Dumbbell size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 88, 
        name: 'NASM-PES™', 
        category: 'Specialist Certifications', 
        gradient: 'linear-gradient(145deg, #00ACC1, #00838F)',
        icon: <Dumbbell size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 89, 
        name: 'NSCA CSCS®', 
        category: 'Specialist Certifications', 
        gradient: 'linear-gradient(145deg, #00ACC1, #00838F)',
        icon: <Dumbbell size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 90, 
        name: 'NSCA CSPS®', 
        category: 'Specialist Certifications', 
        gradient: 'linear-gradient(145deg, #00ACC1, #00838F)',
        icon: <Dumbbell size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 91, 
        name: 'NSCA TSAC-F®', 
        category: 'Specialist Certifications', 
        gradient: 'linear-gradient(145deg, #00ACC1, #00838F)',
        icon: <Dumbbell size={42} strokeWidth={1.5} color="white" />,
        questions: 700
      }
    ],
    behavioral: [
      // Counseling Category
      { 
        id: 92, 
        name: 'AMFTRB MFT', 
        category: 'Counseling', 
        gradient: 'linear-gradient(145deg, #8E24AA, #6A1B9A)',
        icon: <Brain size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 93, 
        name: 'ASPPB EPPP', 
        category: 'Counseling', 
        gradient: 'linear-gradient(145deg, #8E24AA, #6A1B9A)',
        icon: <Brain size={42} strokeWidth={1.5} color="white" />,
        questions: 1050
      },
      { 
        id: 94, 
        name: 'CCE CPCE', 
        category: 'Counseling', 
        gradient: 'linear-gradient(145deg, #8E24AA, #6A1B9A)',
        icon: <Brain size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 95, 
        name: 'CRCC CRC', 
        category: 'Counseling', 
        gradient: 'linear-gradient(145deg, #8E24AA, #6A1B9A)',
        icon: <Brain size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 96, 
        name: 'IC&RC ADC', 
        category: 'Counseling', 
        gradient: 'linear-gradient(145deg, #8E24AA, #6A1B9A)',
        icon: <Brain size={42} strokeWidth={1.5} color="white" />,
        questions: 800
      },
      { 
        id: 97, 
        name: 'NBCC® NCE', 
        category: 'Counseling', 
        gradient: 'linear-gradient(145deg, #8E24AA, #6A1B9A)',
        icon: <Brain size={42} strokeWidth={1.5} color="white" />,
        questions: 850
      },
      { 
        id: 98, 
        name: 'NBCC® NCMHCE', 
        category: 'Counseling', 
        gradient: 'linear-gradient(145deg, #8E24AA, #6A1B9A)',
        icon: <Brain size={42} strokeWidth={1.5} color="white" />,
        questions: 700
      },
      
      // Social Work Category
      { 
        id: 99, 
        name: 'ASWB Advanced Generalist', 
        category: 'Social Work', 
        gradient: 'linear-gradient(145deg, #5E35B1, #4527A0)',
        icon: <Brain size={42} strokeWidth={1.5} color="white" />,
        questions: 500
      },
      { 
        id: 100, 
        name: 'ASWB BSW', 
        category: 'Social Work', 
        gradient: 'linear-gradient(145deg, #5E35B1, #4527A0)',
        icon: <Brain size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 101, 
        name: 'ASWB LCSW', 
        category: 'Social Work', 
        gradient: 'linear-gradient(145deg, #5E35B1, #4527A0)',
        icon: <Brain size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      },
      { 
        id: 102, 
        name: 'ASWB MSW', 
        category: 'Social Work', 
        gradient: 'linear-gradient(145deg, #5E35B1, #4527A0)',
        icon: <Brain size={42} strokeWidth={1.5} color="white" />,
        questions: 1000
      }
    ]
  };
  
  // Tab definitions
  export const tabs = [
    { id: 'medical', label: 'Medical & EMS', icon: <Stethoscope size={18} /> },
    { id: 'trades', label: 'Trades', icon: <Construction size={18} /> },
    { id: 'professional', label: 'Professional', icon: <Briefcase size={18} /> },
    { id: 'academic', label: 'Academic', icon: <GraduationCap size={18} /> },
    { id: 'it', label: 'IT & Cybersecurity', icon: <Server size={18} /> },
    { id: 'fitness', label: 'Fitness', icon: <Dumbbell size={18} /> },
    { id: 'behavioral', label: 'Behavioral Health', icon: <Brain size={18} /> }
  ];