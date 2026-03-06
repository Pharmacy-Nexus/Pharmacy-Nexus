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
        }
      ],

      quizzes: [
        {
          title: "Quiz 1",
          questions: [
            {
              question: "Which statement about benzodiazepines is correct?",
              options: [
                "They directly open chloride channels",
                "They have analgesic action",
                "They require 2–4 weeks to work",
                "All benzodiazepines have sedative effects"
              ],
              answer: 3,
              explanation: "All benzodiazepines produce sedation because they enhance GABA-A receptor activity."
            }
          ]
        }
      ],

      cases: [
        {
          question: "A patient with insomnia and history of alcohol abuse needs a drug with low dependence risk. Best choice?",
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
    },

    antidepressants: {
      title: "Antidepressant Agents",

      study: [
        {
          question: "Which of the following antidepressants is an SSRI?",
          options: [
            "Amitriptyline",
            "Fluoxetine",
            "Phenelzine",
            "Bupropion"
          ],
          answer: 1,
          explanation: "Fluoxetine is an SSRI antidepressant."
        }
      ],

      quizzes: [
        {
          title: "Quiz 1",
          questions: [
            {
              question: "Which drug is classified as an SSRI?",
              options: [
                "Imipramine",
                "Fluoxetine",
                "Phenelzine",
                "Amitriptyline"
              ],
              answer: 1,
              explanation: "Fluoxetine is an SSRI antidepressant."
            }
          ]
        }
      ],

      cases: [
        {
          question: "A patient taking fluoxetine develops sexual dysfunction. This side effect is common with:",
          options: [
            "SSRIs",
            "TCAs",
            "MAOIs",
            "Lithium"
          ],
          answer: 0,
          explanation: "Sexual dysfunction is a well-known adverse effect of SSRIs."
        }
      ]
    }

  }
};
