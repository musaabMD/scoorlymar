import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Sample topics for the static implementation
const STATIC_TOPICS = [
  {
    id: 'myasthenia-gravis',
    name: 'Myasthenia Gravis',
    category: 'Medical',
    subcategory: 'Neurology',
    coreConcept: 'Autoimmune disorder caused by antibodies against ACh receptors at the neuromuscular junction, leading to fatigable muscle weakness.',
    keyPoints: [
      'Pathophysiology: ↓ ACh receptors at NMJ → progressive weakness with use',
      'Classic Symptoms: Ptosis, Diplopia, Bulbar Weakness, Respiratory Crisis',
      'Diagnosis: ACh receptor antibodies (Gold Standard), Ice Pack Test, Edrophonium Test',
      'Treatment: Pyridostigmine (first-line), Plasmapheresis/IVIG for crisis, Thymectomy if thymoma present',
      'Exacerbating Drugs: Aminoglycosides, Fluoroquinolones, Beta-blockers',
      'Association: Thymoma (~15%) – Do a CT Chest!'
    ],
    mustKnow: [
      'Fatigable muscle weakness → Gets worse at night, better in the morning',
      'Ptosis + Diplopia → Worsens throughout the day, better with rest or cold',
      'Thymoma in a young female with fluctuating weakness → Always think MG!',
      'Respiratory distress in MG patient → Myasthenic Crisis → Intubate + IVIG/Plasmapheresis'
    ],
    commonMistakes: [
      'Confusing MG with Guillain-Barré (GBS has ascending paralysis, MG has fatigable weakness)',
      'Missing the thymoma – Always do a CT chest in MG patients',
      'Giving Aminoglycosides – These worsen MG'
    ],
    tip: 'Focus on the fatigable nature of the weakness and classic presentation (ocular symptoms) for differentiating MG from other neuromuscular disorders.'
  },
  {
    id: 'asthma',
    name: 'Asthma',
    category: 'Medical',
    subcategory: 'Pulmonology',
    coreConcept: 'Chronic inflammatory disorder of the airways characterized by reversible airflow obstruction, bronchial hyperresponsiveness, and underlying inflammation.',
    keyPoints: [
      'Pathophysiology: Airway inflammation → Bronchospasm → Mucus hypersecretion',
      'Classic Symptoms: Wheezing, Coughing, Chest tightness, Dyspnea',
      'Diagnosis: PFTs showing reversible obstruction, Methacholine challenge',
      'Treatment: SABA (rescue), ICS (controller), LABA + ICS, biologics for severe cases',
      'Triggers: Allergens, Exercise, Cold air, Respiratory infections, Stress'
    ],
    mustKnow: [
      'Status asthmaticus → Life-threatening emergency → Continuous nebulization + IV steroids',
      'Nocturnal symptoms → Hallmark of poorly controlled asthma',
      'Silent chest → Ominous sign in severe asthma (too obstructed to wheeze)',
      'Aspirin-exacerbated respiratory disease (AERD) → Triad of asthma, nasal polyps, ASA sensitivity'
    ],
    commonMistakes: [
      'Missing COPD overlap → Can coexist, especially in smokers',
      'Failing to address triggers → Environmental control is crucial',
      'Overreliance on SABA → Warning sign of poor control'
    ],
    tip: 'Always check inhaler technique at every visit - poor technique is one of the most common reasons for treatment failure.'
  },
  {
    id: 'diabetes-mellitus',
    name: 'Diabetes Mellitus',
    category: 'Medical',
    subcategory: 'Endocrinology',
    coreConcept: 'Metabolic disorder characterized by chronic hyperglycemia resulting from defects in insulin secretion, insulin action, or both.',
    keyPoints: [
      'Type 1: Autoimmune β-cell destruction → absolute insulin deficiency',
      'Type 2: Progressive insulin secretory defect on background of insulin resistance',
      'Diagnosis: FPG ≥126 mg/dL, 2hr OGTT ≥200 mg/dL, HbA1c ≥6.5%, or random glucose ≥200 mg/dL with symptoms',
      'Complications: Microvascular (retinopathy, nephropathy, neuropathy) and Macrovascular (CAD, PAD, stroke)',
      'Treatment T2DM: Metformin (first-line), SGLT2i, GLP-1 RA, DPP4i, TZDs, SUs, insulin'
    ],
    mustKnow: [
      'DKA → Metabolic acidosis + ketosis + hyperglycemia → Insulin deficiency (mainly T1DM)',
      'HHS → Extreme hyperglycemia without significant ketosis → Dehydration (mainly T2DM)',
      'Dawn phenomenon → Early morning hyperglycemia due to counterregulatory hormones',
      'Somogyi effect → Rebound hyperglycemia after nocturnal hypoglycemia'
    ],
    commonMistakes: [
      'Missing LADA → "Type 1.5" with slower onset, positive antibodies, eventual insulin dependence',
      'Focusing only on glucose → CV risk reduction equally important (statins, SGLT2i, GLP-1 RA)',
      'Delaying insulin when needed → Earlier insulin can preserve β-cell function'
    ],
    tip: 'The ADA/EASD algorithm now emphasizes CV and renal risk stratification first, then therapy selection based on comorbidities.'
  }
];

// Category theme colors - simplified version
const CATEGORY_COLORS = {
  'Medical': '#3B82F6',
  'Programming': '#10B981',
  'Business': '#F59E0B',
  'Science': '#8B5CF6',
  'Mathematics': '#EC4899',
  'History': '#EF4444',
  'Languages': '#14B8A6',
  'Arts': '#F97316',
  'Other': '#6B7280'
};

// Section labels customized by category
const SECTION_LABELS = {
  'Medical': {
    keyPoints: 'High-Yield Facts',
    mustKnow: 'Clinical Scenarios',
    commonMistakes: 'Common Pitfalls',
    tip: 'Study Tip'
  },
  'default': {
    keyPoints: 'Key Points',
    mustKnow: 'Must Know',
    commonMistakes: 'Common Mistakes',
    tip: 'Helpful Tip'
  }
};

const PrepNotesTab = () => {
  const [topics] = useState(STATIC_TOPICS);
  const [expandedTopics, setExpandedTopics] = useState({});
  
  // Toggle expanded state of a topic
  const toggleExpanded = (topicId) => {
    setExpandedTopics(prev => ({
      ...prev,
      [topicId]: !prev[topicId]
    }));
  };
  
  // Topic card component with collapsible content
  const TopicCard = ({ topic }) => {
    const color = CATEGORY_COLORS[topic.category] || CATEGORY_COLORS['Other'];
    const sectionLabels = SECTION_LABELS[topic.category] || SECTION_LABELS['default'];
    const isExpanded = expandedTopics[topic.id] || false;
    
    return (
      <Card className="mb-5 border overflow-hidden" style={{ borderColor: color }}>
        <CardHeader 
          className="cursor-pointer py-3" 
          onClick={() => toggleExpanded(topic.id)}
          style={{ backgroundColor: isExpanded ? `${color}10` : 'white' }}
        >
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">{topic.name}</CardTitle>
            <div className="flex gap-2">
              <Badge style={{ backgroundColor: color }}>{topic.category}</Badge>
              {topic.subcategory && (
                <Badge variant="outline">{topic.subcategory}</Badge>
              )}
            </div>
          </div>
        </CardHeader>
        
        {isExpanded && (
          <CardContent className="pt-4">
            {/* Core Concept */}
            <div className="mb-5">
              <p className="text-gray-800">{topic.coreConcept}</p>
            </div>
            
            {/* Key Points */}
            {topic.keyPoints?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3" style={{ color: color }}>
                  {sectionLabels.keyPoints}
                </h3>
                <div className="space-y-2">
                  {topic.keyPoints.map((point, index) => (
                    <div key={index} className="flex">
                      <span className="font-bold mr-2 text-lg" style={{ color: color }}>•</span>
                      <p className="flex-1">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Must Know */}
            {topic.mustKnow?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3" style={{ color: color }}>
                  {sectionLabels.mustKnow}
                </h3>
                <div className="space-y-2">
                  {topic.mustKnow.map((item, index) => (
                    <div key={index} className="flex">
                      <span className="text-green-600 font-bold mr-2 text-lg">✓</span>
                      <p className="flex-1">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Common Mistakes */}
            {topic.commonMistakes?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-3" style={{ color: color }}>
                  {sectionLabels.commonMistakes}
                </h3>
                <div className="space-y-2">
                  {topic.commonMistakes.map((mistake, index) => (
                    <div key={index} className="flex">
                      <span className="text-red-600 font-bold mr-2 text-lg">✗</span>
                      <p className="flex-1">{mistake}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Tip */}
            {topic.tip && (
              <div className="p-4 rounded-md border-l-4 bg-gray-50" style={{ borderLeftColor: color }}>
                <div className="flex">
                  <span className="text-lg mr-2">💡</span>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: color }}>{sectionLabels.tip}</h3>
                    <p className="text-gray-800">{topic.tip}</p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        )}
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Medical Topic Cards
        </h1>
        
        {/* Topic cards */}
        <div>
          {topics.map(topic => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrepNotesTab;