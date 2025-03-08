// Example structure for an exam's specific content data
// This would be placed at app/data/exam1.js

const examContent = {
    // Prep Notes (Conceptual Learning)
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
    
    // MCQs (Practice & Testing)
    mcqs: [
      {
        question: "A 30-year-old woman presents with intermittent ptosis and diplopia that worsens throughout the day. Physical exam shows bilateral ptosis, which improves after placing an ice pack over her eyes for 2 minutes. What is the most likely diagnosis?",
        options: [
          "Lambert-Eaton Myasthenic Syndrome",
          "Multiple Sclerosis",
          "Myasthenia Gravis",
          "Guillain-Barré Syndrome"
        ],
        answer: 2, // 0-indexed, so 2 = "Myasthenia Gravis"
        explanation: "MG is characterized by fluctuating muscle weakness, ptosis, and improvement with rest/cooling (Ice Pack Test)."
      },
      {
        question: "Which of the following is the most accurate diagnostic test for Myasthenia Gravis?",
        options: [
          "Tensilon (Edrophonium) test",
          "Electromyography (EMG)",
          "Acetylcholine receptor antibody test",
          "Muscle biopsy"
        ],
        answer: 2,
        explanation: "The gold standard for MG diagnosis is ACh receptor antibody detection. The Tensilon test is a rapid screen but not definitive."
      },
      {
        question: "Which of the following medications can worsen Myasthenia Gravis?",
        options: [
          "Beta-blockers",
          "Aminoglycosides",
          "Fluoroquinolones",
          "All of the above"
        ],
        answer: 3,
        explanation: "Beta-blockers, aminoglycosides, and fluoroquinolones can exacerbate MG symptoms by interfering with NMJ transmission."
      }
    ],
    
    // Last-Minute Review (One-Liner Q → Key Answer)
    review: [
      { question: "Pathophysiology of MG?", answer: "Autoantibodies against ACh receptors at NMJ" },
      { question: "Symptoms of MG?", answer: "Fluctuating weakness, ptosis, diplopia, bulbar signs" },
      { question: "Best initial test for MG?", answer: "ACh receptor antibody test" },
      { question: "Gold standard for MG diagnosis?", answer: "ACh receptor antibody test" },
      { question: "Best acute treatment for Myasthenic Crisis?", answer: "Plasmapheresis or IVIG" },
      { question: "Which tumor is associated with MG?", answer: "Thymoma (check CT chest)" },
      { question: "Which drugs worsen MG?", answer: "Aminoglycosides, Fluoroquinolones, Beta-blockers" },
      { question: "First-line chronic treatment for MG?", answer: "Pyridostigmine (AChE inhibitor)" }
    ]
  };
  
  export default examContent;