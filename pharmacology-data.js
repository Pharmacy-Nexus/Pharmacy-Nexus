const pharmacologyData = {
  topics: {
    hypnotics: {
      title: "Hypnotic Drugs",

      study: [
        {
          question: "Which one of the following is a short-acting hypnotic?",
          options: [
            "Phenobarbital",
            "Diazepam",
            "Chlordiazepoxide",
            "Triazolam"
          ],
          answer: 3,
          explanation: "Triazolam is a short-acting benzodiazepine commonly used for sleep-onset insomnia."
        },
        {
          question: "Which sedative–hypnotic agent induces sleep by melatonin receptor agonism?",
          options: [
            "Zolpidem",
            "Eszopiclone",
            "Estazolam",
            "Tasimelteon"
          ],
          answer: 3,
          explanation: "Tasimelteon acts as a melatonin receptor agonist and helps regulate circadian rhythm."
        }
      ],

      quizzes: [
        {
          title: "Quiz 1",
          questions: [
            {
              question: "Which one of the following statements is correct regarding benzodiazepines?",
              options: [
                "Benzodiazepines directly open chloride channels.",
                "Benzodiazepines show analgesic actions.",
                "Clinical improvement of anxiety requires 2 to 4 weeks of treatment.",
                "All benzodiazepines have some sedative effects."
              ],
              answer: 3,
              explanation: "All benzodiazepines have sedative effects because they enhance GABA-A receptor activity."
            },
            {
              question: "Which one of the following is a short-acting hypnotic?",
              options: [
                "Phenobarbital",
                "Diazepam",
                "Chlordiazepoxide",
                "Triazolam"
              ],
              answer: 3,
              explanation: "Triazolam is a short-acting benzodiazepine used mainly for sleep induction."
            }
          ]
        }
      ],

      cases: [
        {
          question: "A 50-year-old man with insomnia has a past history of alcohol abuse and wants minimal dependence risk. Best choice?",
          options: [
            "Zaleplon",
            "Flurazepam",
            "Doxepin",
            "Zolpidem"
          ],
          answer: 2,
          explanation: "Low-dose doxepin has minimal abuse potential and is useful for insomnia."
        }
      ]
    }
  }
};
