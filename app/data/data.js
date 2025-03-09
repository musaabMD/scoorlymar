// data/data.js
export const examContent = {
    prep: `
      <h3>Myasthenia Gravis (MG) Overview</h3>
      <ul>
        <li><strong>Definition:</strong> Autoimmune disorder causing <strong>antibody-mediated blockade of neuromuscular transmission</strong> at the <strong>neuromuscular junction (NMJ)</strong>.</li>
        <li><strong>Etiology:</strong> <strong>Anti-ACh receptor antibodies</strong> (most common), <strong>Anti-MuSK antibodies</strong> (less common).</li>
        <li><strong>Pathophysiology:</strong> ↓ ACh receptor availability → <strong>progressive muscle weakness</strong> with repeated use.</li>
        <li><strong>Clinical Features:</strong>
          <ul>
            <li><strong>Muscle weakness</strong> (worsens with activity, improves with rest)</li>
            <li><strong>Ptosis, Diplopia</strong> (ocular symptoms common)</li>
            <li><strong>Bulbar symptoms:</strong> Dysphagia, dysarthria</li>
            <li><strong>Respiratory failure</strong> (Myasthenic crisis)</li>
          </ul>
        </li>
        <li><strong>Associated Conditions:</strong>
          <ul>
            <li><strong>Thymoma</strong> (check CT chest)</li>
            <li>Autoimmune diseases (SLE, RA)</li>
          </ul>
        </li>
        <li><strong>Diagnosis:</strong>
          <ul>
            <li><strong>Edrophonium (Tensilon) test</strong>: Rapid symptom improvement</li>
            <li><strong>Ice pack test</strong>: Improvement of ptosis</li>
            <li><strong>ACh receptor antibody test</strong> (gold standard)</li>
            <li><strong>Repetitive nerve stimulation test</strong> (↓ response with repetitive stimulation)</li>
          </ul>
        </li>
        <li><strong>Treatment:</strong>
          <ul>
            <li><strong>First-line:</strong> Pyridostigmine (AChE inhibitor)</li>
            <li><strong>Corticosteroids & Immunosuppressants</strong> for refractory cases</li>
            <li><strong>Plasmapheresis/IVIG</strong> for myasthenic crisis</li>
            <li><strong>Thymectomy</strong> if thymoma present</li>
          </ul>
        </li>
      </ul>
    `,
    mcqs: `
      <div class="mb-8 p-4 border rounded-lg">
        <h3 class="mb-2">Q1: A 30-year-old woman presents with intermittent ptosis and diplopia that worsens throughout the day. Physical exam shows bilateral ptosis, which improves after placing an ice pack over her eyes for 2 minutes. What is the most likely diagnosis?</h3>
        <ul class="space-y-2">
          <li class="ml-5">A) Lambert-Eaton Myasthenic Syndrome</li>
          <li class="ml-5">B) Multiple Sclerosis</li>
          <li class="ml-5 text-green-600 font-medium">✅ C) Myasthenia Gravis</li>
          <li class="ml-5">D) Guillain-Barré Syndrome</li>
        </ul>
        <div class="mt-4 bg-gray-50 p-3 rounded">
          <p><strong>Explanation:</strong> MG is characterized by <strong>fluctuating muscle weakness</strong>, ptosis, and <strong>improvement with rest/cooling</strong> (Ice Pack Test).</p>
        </div>
      </div>
  
      <div class="mb-8 p-4 border rounded-lg">
        <h3 class="mb-2">Q2: Which of the following is the most accurate diagnostic test for Myasthenia Gravis?</h3>
        <ul class="space-y-2">
          <li class="ml-5">A) Tensilon (Edrophonium) test</li>
          <li class="ml-5">B) Electromyography (EMG)</li>
          <li class="ml-5 text-green-600 font-medium">✅ C) Acetylcholine receptor antibody test</li>
          <li class="ml-5">D) Muscle biopsy</li>
        </ul>
        <div class="mt-4 bg-gray-50 p-3 rounded">
          <p><strong>Explanation:</strong> The <strong>gold standard</strong> for MG diagnosis is <strong>ACh receptor antibody detection</strong>. The <strong>Tensilon test</strong> is a rapid screen but not definitive.</p>
        </div>
      </div>
  
      <div class="mb-8 p-4 border rounded-lg">
        <h3 class="mb-2">Q3: Which of the following medications can worsen Myasthenia Gravis?</h3>
        <ul class="space-y-2">
          <li class="ml-5">A) Beta-blockers</li>
          <li class="ml-5">B) Aminoglycosides</li>
          <li class="ml-5">C) Fluoroquinolones</li>
          <li class="ml-5 text-green-600 font-medium">✅ D) All of the above</li>
        </ul>
        <div class="mt-4 bg-gray-50 p-3 rounded">
          <p><strong>Explanation:</strong> <strong>Beta-blockers, aminoglycosides, and fluoroquinolones</strong> can exacerbate MG symptoms by interfering with NMJ transmission.</p>
        </div>
      </div>
    `
  };
  
  export const subjects = [
    {
      id: 1,
      name: "Pathophysiology",
      description: "Understand disease mechanisms and processes",
      questionCount: 12,
      progress: 75,
      status: "good" // good, mid, fail
    },
    {
      id: 2,
      name: "Diagnosis & Testing",
      description: "Explore diagnostic methods and test interpretation",
      questionCount: 18,
      progress: 50,
      status: "mid"
    },
    {
      id: 3,
      name: "Treatment & Management",
      description: "Learn therapeutic approaches and patient care",
      questionCount: 20,
      progress: 30,
      status: "fail"
    },
    {
      id: 4,
      name: "Pharmacology",
      description: "Study medications, mechanisms, and side effects",
      questionCount: 15,
      progress: 60,
      status: "mid"
    }
  ];
  
  export const reviewItems = [
    {
      id: 101,
      question: "What is the primary mechanism of action for ACE inhibitors?",
      type: "incorrect",
      category: "Cardiovascular",
      date: "2025-02-28",
      answer: "ACE inhibitors prevent the conversion of angiotensin I to angiotensin II by inhibiting ACE, leading to decreased vasoconstriction and decreased aldosterone secretion."
    },
    {
      id: 102,
      question: "What are the primary symptoms of Myasthenia Gravis?",
      type: "pinned",
      category: "Neurology",
      date: "2025-03-01",
      answer: "Primary symptoms include muscle weakness that worsens with activity and improves with rest, ptosis (drooping eyelids), diplopia (double vision), and bulbar symptoms like dysarthria and dysphagia."
    },
    {
      id: 103,
      question: "Which of the following is NOT a common complication of diabetes mellitus?",
      type: "incorrect",
      category: "Endocrine",
      date: "2025-03-02",
      answer: "Increased bone density is NOT a common complication of diabetes mellitus. Common complications include retinopathy, nephropathy, neuropathy, cardiovascular disease, and poor wound healing."
    },
    {
      id: 104,
      question: "What is the gold standard diagnostic test for Myasthenia Gravis?",
      type: "pinned",
      category: "Diagnostics",
      date: "2025-03-03",
      answer: "The gold standard diagnostic test for Myasthenia Gravis is the acetylcholine receptor antibody test, which has high specificity for the condition."
    }
  ];
  
  export const concepts = [
    {
      id: 1,
      name: "Condition Overview",
      correct: 8,
      total: 9,
      percentage: 89,
      status: "good"
    },
    {
      id: 2,
      name: "Diagnosis & Testing",
      correct: 5,
      total: 9,
      percentage: 56,
      status: "mid"
    },
    {
      id: 3,
      name: "Treatment & Management",
      correct: 3,
      total: 8,
      percentage: 38,
      status: "fail"
    }
  ];