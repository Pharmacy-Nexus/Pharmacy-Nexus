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
    antidepressants: {
      title: "Antidepressant Agents",

      study: [
        {
          question: "Which of the following antidepressants is a selective serotonin reuptake inhibitor (SSRI)?",
          options: [
            "Amitriptyline",
            "Fluoxetine",
            "Phenelzine",
            "Bupropion"
          ],
          answer: 1,
          explanation: "Fluoxetine is an SSRI. Amitriptyline is a tricyclic antidepressant, phenelzine is an MAOI, and bupropion inhibits norepinephrine and dopamine reuptake."
        },
        {
          question: "Which antidepressant is commonly associated with anticholinergic effects?",
          options: [
            "Sertraline",
            "Amitriptyline",
            "Fluoxetine",
            "Venlafaxine"
          ],
          answer: 1,
          explanation: "Amitriptyline is a tricyclic antidepressant and commonly causes anticholinergic adverse effects such as dry mouth, constipation, and urinary retention."
        }
      ],

      quizzes: [
        {
          title: "Quiz 1",
          questions: [
            {
              question: "Which of the following antidepressants is classified as an SSRI?",
              options: [
                "Imipramine",
                "Fluoxetine",
                "Phenelzine",
                "Amitriptyline"
              ],
              answer: 1,
              explanation: "Fluoxetine is an SSRI. Imipramine and amitriptyline are TCAs, while phenelzine is an MAOI."
            },
            {
              question: "A patient taking a tricyclic antidepressant develops dry mouth, constipation, and blurred vision. These effects are due to:",
              options: [
                "Serotonin syndrome",
                "Anticholinergic activity",
                "Dopamine blockade",
                "Histamine release"
              ],
              answer: 1,
              explanation: "TCAs commonly cause anticholinergic side effects because they block muscarinic receptors."
            }
          ]
        }
      ],

      cases: [
        {
          question: "A 32-year-old woman with major depressive disorder is started on fluoxetine. Which adverse effect is most likely during treatment?",
          options: [
            "Marked anticholinergic effects",
            "Sexual dysfunction",
            "Severe orthostatic hypotension",
            "Hypertensive crisis with cheese"
          ],
          answer: 1,
          explanation: "SSRIs such as fluoxetine commonly cause sexual dysfunction. Anticholinergic effects are more typical of TCAs, and hypertensive crisis is linked to MAOIs."
        }
      ]
    }
