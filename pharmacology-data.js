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
        study: [
  {
    question: "Which state is characterized by decreased anxiety, motor activity, and cognitive acuity?",
    options: ["Hypnosis", "Sedation", "General anesthesia", "Coma"],
    answer: 1,
    explanation: "Sedation means calming with reduced anxiety, motor activity, and mental alertness, without necessarily causing sleep."
  },
  {
    question: "How does hypnosis differ from sedation?",
    options: ["It causes loss of feeling", "It leads to medullary suppression", "It is characterized by drowsiness and an increased tendency to sleep", "It has no effect on motor activity"],
    answer: 2,
    explanation: "Hypnosis is a deeper CNS depressant state than sedation and is characterized mainly by drowsiness and increased tendency to sleep."
  },
  {
    question: "In which state is a person unresponsive and cannot be awakened due to medullary suppression?",
    options: ["General anesthesia", "Coma", "Deep sedation", "Hypnosis"],
    answer: 1,
    explanation: "Coma is the most extreme CNS-depressed state, where the patient is unresponsive and cannot be awakened."
  },
  {
    question: "General anesthesia is characterized by:",
    options: ["Temporary loss of feeling and complete loss of awareness", "Decreased motor activity only", "Calmness without sleep", "High cognitive acuity"],
    answer: 0,
    explanation: "General anesthesia causes temporary loss of awareness and sensation."
  },
  {
    question: "Which of the following is considered a minor tranquilizer?",
    options: ["Hypnotics", "Anxiolytics", "General anesthetics", "Anticonvulsants"],
    answer: 1,
    explanation: "Minor tranquilizer is another name for anxiolytic drugs."
  },
  {
    question: "Which of the following is an ultra-short-acting barbiturate?",
    options: ["Phenobarbital", "Pentobarbital", "Thiopental", "Amobarbital"],
    answer: 2,
    explanation: "Thiopental is an ultra-short-acting barbiturate mainly used for induction of anesthesia."
  },
  {
    question: "Phenobarbital is classified as a:",
    options: ["Short-acting barbiturate", "Intermediate-acting barbiturate", "Long-acting barbiturate", "Ultra-short-acting benzodiazepine"],
    answer: 2,
    explanation: "Phenobarbital is a long-acting barbiturate."
  },
  {
    question: "Which benzodiazepine is ultra-short-acting with duration of about 30 minutes?",
    options: ["Diazepam", "Remimazolam", "Alprazolam", "Lorazepam"],
    answer: 1,
    explanation: "According to your university file, remimazolam is listed as ultra-short-acting."
  },
  {
    question: "Alprazolam (Xanax) belongs to which category?",
    options: ["Long-acting", "Short-acting", "Intermediate-acting", "Ultra-short-acting"],
    answer: 2,
    explanation: "According to your file, alprazolam is classified as intermediate-acting."
  },
  {
    question: "Which of these is a short-acting benzodiazepine?",
    options: ["Triazolam", "Diazepam", "Clonazepam", "Chlordiazepoxide"],
    answer: 0,
    explanation: "Triazolam is a short-acting hypnotic benzodiazepine and causes relatively little daytime sedation."
  },
  {
    question: "Which barbiturate must be administered only via IV?",
    options: ["Phenobarbital", "Thiopental", "Secobarbital", "Amobarbital"],
    answer: 1,
    explanation: "Thiopental is given intravenously for rapid onset."
  },
  {
    question: "Both barbiturates and benzodiazepines cross:",
    options: ["Blood-brain barrier", "Placenta", "Breast milk", "All of the above"],
    answer: 3,
    explanation: "These drugs are lipid-soluble and can cross the BBB, placenta, and be secreted in breast milk."
  },
  {
    question: "What is the primary mechanism of action for benzodiazepines?",
    options: ["Directly opening chloride channels", "Binding to the benzodiazepine allosteric site on GABA-A receptors to enhance GABA action", "Blocking GABA receptors", "Inhibiting serotonin release"],
    answer: 1,
    explanation: "Benzodiazepines bind allosterically to GABA-A receptors and enhance GABA-mediated inhibition."
  },
  {
    question: "At high doses, barbiturates can:",
    options: ["Only work if GABA is present", "Directly stimulate GABA-A receptors / chloride channel function", "Decrease chloride influx", "Cause hypertension"],
    answer: 1,
    explanation: "At toxic/high doses, barbiturates can behave as direct GABA-mimetic CNS depressants."
  },
  {
    question: "What is the cellular result of GABA-A receptor activation by these drugs?",
    options: ["Depolarization", "Sodium influx", "Hyperpolarization due to chloride influx", "Increased action potential formation"],
    answer: 2,
    explanation: "Opening chloride channels increases Cl⁻ influx, causing hyperpolarization and neuronal inhibition."
  },
  {
    question: "Which drug is the specific antagonist for benzodiazepine overdose?",
    options: ["Naloxone", "Flumazenil", "Picrotoxin", "Ramelteon"],
    answer: 1,
    explanation: "Flumazenil is a competitive antagonist at the benzodiazepine binding site."
  },
  {
    question: "Why are benzodiazepines preferred over barbiturates?",
    options: ["They induce liver enzymes", "They have a lower therapeutic index", "They have a high therapeutic index and are safer in overdose", "They cause more respiratory depression"],
    answer: 2,
    explanation: "Benzodiazepines are safer because they have wider safety margin, less respiratory/CV depression, and a specific antagonist."
  },
  {
    question: "Which drug is used for induction of anesthesia?",
    options: ["Phenobarbital", "Thiopental", "Buspirone", "Melatonin"],
    answer: 1,
    explanation: "Thiopental is the classic barbiturate used for induction of anesthesia."
  },
  {
    question: "What is anterograde amnesia associated with BDZ use?",
    options: ["Permanent memory loss", "Loss of childhood memories", "Temporary inability to form new memories", "Increased concentration"],
    answer: 2,
    explanation: "Benzodiazepines may impair formation of new memories during drug action."
  },
  {
    question: "Which condition is a contraindication for benzodiazepines?",
    options: ["Acute narrow-angle glaucoma", "Insomnia", "Anxiety", "Muscle spasms"],
    answer: 0,
    explanation: "Acute narrow-angle glaucoma is a classic contraindication in file-based teaching."
  },
  {
    question: "Which drug is a selective agonist at MT1 and MT2 melatonin receptors?",
    options: ["Zolpidem", "Ramelteon", "Buspirone", "Chloral hydrate"],
    answer: 1,
    explanation: "Ramelteon acts on melatonin receptors to regulate sleep."
  },
  {
    question: "Buspirone is unique because it:",
    options: ["Is a potent hypnotic", "Acts on GABA receptors", "Is an anti-anxiety drug that does not cause dependence or significant sedation", "Is used for alcohol withdrawal"],
    answer: 2,
    explanation: "Buspirone is a non-GABAergic anxiolytic with low abuse potential and minimal sedation."
  },
  {
    question: "Z-hypnotics are preferred for insomnia because they:",
    options: ["Have a long half-life", "Cause significant hangover effects", "Have a short half-life and minimal tolerance", "Act on serotonin receptors"],
    answer: 2,
    explanation: "Z-drugs are mainly hypnotics with relatively short half-lives and less daytime sedation."
  },
  {
    question: "Which drug is used as a hypnotic for children?",
    options: ["Diazepam", "Chloral hydrate", "Phenobarbital", "Thiopental"],
    answer: 1,
    explanation: "Chloral hydrate is the traditional pediatric hypnotic/sedative in this file."
  },
  {
    question: "A patient with jet lag would most likely benefit from:",
    options: ["Phenobarbital", "Melatonin or Ramelteon", "Buspirone", "Thiopental"],
    answer: 1,
    explanation: "Melatonin agonists help regulate circadian rhythm and sleep timing."
  },
  {
    question: "Benzodiazepines increase the _______ of chloride channel opening.",
    options: ["Duration", "Frequency", "Voltage", "Amplitude"],
    answer: 1,
    explanation: "Benzodiazepines increase frequency of GABA-A chloride channel opening."
  },
  {
    question: "Barbiturates increase the _______ of chloride channel opening.",
    options: ["Frequency", "Threshold", "Duration", "Resistance"],
    answer: 2,
    explanation: "Barbiturates increase duration of chloride channel opening."
  },
  {
    question: "Why do barbiturates have a narrow therapeutic index?",
    options: ["Because they are only given orally", "Because high doses can produce direct GABA-mimetic action with medullary depression", "Because they are not lipid soluble", "Because they do not cross BBB"],
    answer: 1,
    explanation: "Their toxicity rises steeply at high doses because they can directly depress the CNS and respiratory centers."
  },
  {
    question: "Which of the following is true regarding benzodiazepine metabolism?",
    options: ["They are not metabolized by the liver", "Many form active metabolites, prolonging their effects", "They are excreted unchanged in urine", "They do not undergo phase II metabolism"],
    answer: 1,
    explanation: "Many benzodiazepines, especially long-acting ones like diazepam, form active metabolites."
  },
  {
    question: "Which process explains why thiopental has a very short duration of action despite being lipid soluble?",
    options: ["Rapid excretion", "Redistribution from brain to muscle and fat", "Rapid metabolism in the lungs", "Poor absorption"],
    answer: 1,
    explanation: "Thiopental rapidly redistributes away from the brain, so the clinical effect ends quickly."
  },
  {
    question: "Which drug is preferred for status epilepticus?",
    options: ["Alprazolam", "Diazepam or Lorazepam IV", "Buspirone", "Ramelteon"],
    answer: 1,
    explanation: "IV diazepam or lorazepam are standard emergency benzodiazepines for seizure control."
  },
  {
    question: "What is a major side effect of long-term use of barbiturates?",
    options: ["Weight loss", "Induction of hepatic microsomal enzymes", "Inhibition of liver enzymes", "Decreased appetite"],
    answer: 1,
    explanation: "Barbiturates induce CYP450 enzymes and cause many drug interactions."
  },
  {
    question: "Which drug is used for conscious sedation during minor procedures?",
    options: ["Midazolam", "Phenobarbital", "Buspirone", "Melatonin"],
    answer: 0,
    explanation: "Midazolam is widely used because of rapid onset and anterograde amnesia."
  },
  {
    question: "Benzodiazepines are NOT recommended for:",
    options: ["Alcohol withdrawal", "Muscle spasms", "Long-term treatment of daily stress", "Panic disorder"],
    answer: 2,
    explanation: "Long-term routine use is avoided because of tolerance and dependence risk."
  },
  {
    question: "A hangover effect is most likely seen with:",
    options: ["Long-acting hypnotics such as flurazepam", "Ultra-short agents", "Buspirone", "Melatonin"],
    answer: 0,
    explanation: "Long-acting hypnotics persist into the next day."
  },
  {
    question: "Sudden withdrawal of benzodiazepines after long-term use can cause:",
    options: ["Deep sleep", "Withdrawal symptoms such as tremors and seizures", "Increased appetite", "Lower blood pressure"],
    answer: 1,
    explanation: "Abrupt withdrawal may lead to CNS hyperexcitability."
  },
  {
    question: "Which of these drugs is safest for an elderly patient with anxiety?",
    options: ["Diazepam", "Buspirone", "Phenobarbital", "Thiopental"],
    answer: 1,
    explanation: "Buspirone causes less sedation and cognitive impairment than benzodiazepines/barbiturates."
  },
  {
    question: "Which Z-hypnotic has the shortest half-life?",
    options: ["Zolpidem", "Zaleplon", "Eszopiclone", "Diazepam"],
    answer: 1,
    explanation: "Zaleplon is ideal for sleep-onset insomnia."
  },
  {
    question: "Flumazenil works by:",
    options: ["Stimulating GABA receptors", "Competitive antagonism at the benzodiazepine binding site", "Blocking chloride channels directly", "Neutralizing the drug in the stomach"],
    answer: 1,
    explanation: "Flumazenil competes at the benzodiazepine receptor site."
  },
  {
    question: "Why should barbiturates be avoided in porphyria?",
    options: ["They cause sedation", "They induce ALA synthase and increase porphyrin synthesis", "They block porphyrin excretion", "They cause muscle relaxation"],
    answer: 1,
    explanation: "Barbiturates can precipitate acute porphyric attacks."
  },
  {
    question: "Which state is called calmness without sleep?",
    options: ["Sedation", "Hypnosis", "Coma", "Anesthesia"],
    answer: 0,
    explanation: "Sedation calms the patient without necessarily producing sleep."
  },
  {
    question: "Which agent is a long-acting benzodiazepine?",
    options: ["Triazolam", "Midazolam", "Diazepam", "Oxazepam"],
    answer: 2,
    explanation: "Diazepam is long-acting and produces active metabolites."
  },
  {
    question: "Which benzodiazepine is commonly associated with little daytime sedation as a hypnotic?",
    options: ["Diazepam", "Triazolam", "Chlordiazepoxide", "Clonazepam"],
    answer: 1,
    explanation: "Triazolam is short-acting and causes less residual next-day sedation."
  },
  {
    question: "Which of the following directly corresponds to MT2 receptor effect?",
    options: ["Memory formation", "Muscle relaxation", "Circadian rhythm regulation", "Analgesia"],
    answer: 2,
    explanation: "MT2 is mainly linked to circadian rhythm control."
  },
  {
    question: "Which of the following directly corresponds to MT1 receptor effect?",
    options: ["Sleep induction", "Analgesia", "Muscle tone", "Anticonvulsant effect"],
    answer: 0,
    explanation: "MT1 is linked mainly to sleep initiation."
  },
  {
    question: "Buspirone acts mainly as:",
    options: ["A GABA-A agonist", "A serotonin 5-HT1A partial agonist", "A dopamine antagonist", "An orexin antagonist"],
    answer: 1,
    explanation: "Buspirone acts mainly on 5-HT1A receptors."
  },
  {
    question: "Which of the following is NOT a main action of buspirone?",
    options: ["Anxiolysis", "Sedation", "Low dependence risk", "Non-GABAergic mechanism"],
    answer: 1,
    explanation: "Buspirone is not a sedative-hypnotic."
  },
  {
    question: "Which drug class is more selective on the CNS and therefore safer?",
    options: ["Barbiturates", "Benzodiazepines", "Alcohols", "Opioids"],
    answer: 1,
    explanation: "This is one major reason benzodiazepines replaced barbiturates."
  },
  {
    question: "Which drug is best for a patient who has trouble falling asleep but wants to avoid morning drowsiness?",
    options: ["Flurazepam", "Zaleplon", "Phenobarbital", "Buspirone"],
    answer: 1,
    explanation: "Zaleplon has very short half-life and minimal next-day sedation."
  },
  {
    question: "Which one of the following statements is correct regarding benzodiazepines?",
    options: ["They directly open chloride channels", "They have analgesic action", "Clinical improvement takes 2–4 weeks like buspirone", "All benzodiazepines have some sedative effects"],
    answer: 3,
    explanation: "All benzodiazepines have some sedative effect; they do not directly open chloride channels and are not analgesics."
  },
  {
    question: "Which hypnotic class is structurally different from benzodiazepines but acts at related receptor machinery?",
    options: ["Z-hypnotics", "Buspirone", "Melatonin agonists", "Chloral hydrate"],
    answer: 0,
    explanation: "Z-drugs are non-benzodiazepines but act at benzodiazepine-related GABA-A receptor sites."
  },
  {
    question: "Which is true about chloral hydrate in your file?",
    options: ["Used for alcoholism", "Pediatric hypnotic/sedative", "Antidepressant", "Anticonvulsant only"],
    answer: 1,
    explanation: "The file lists chloral hydrate as a hypnotic for children."
  },
  {
    question: "Which class is known for marked CYP450 induction?",
    options: ["Buspirone", "Barbiturates", "Melatonin agonists", "Z-hypnotics"],
    answer: 1,
    explanation: "Barbiturates are strong hepatic enzyme inducers."
  },
  {
    question: "Why are benzodiazepines usually not used for more than 6–8 weeks in anxiety?",
    options: ["Because they cause hypertension", "Because of tolerance and dependence", "Because they are ineffective", "Because they cause analgesia"],
    answer: 1,
    explanation: "Therapy is limited because of tolerance and dependence risk."
  },
  {
    question: "In chronic anxiety lasting more than 6 weeks, preferred options include:",
    options: ["Thiopental and pentobarbital", "SSRIs/SNRIs and buspirone", "Only alcohol", "Only melatonin"],
    answer: 1,
    explanation: "Chronic generalized anxiety is better managed with antidepressants or buspirone."
  },
  {
    question: "Residual sedation upon waking is also called:",
    options: ["Rebound excitation", "Hangover effect", "Reverse tolerance", "Euphoria"],
    answer: 1,
    explanation: "Hangover means next-day drowsiness, confusion, and poor concentration."
  },
  {
    question: "Which class is more likely to cause marked CNS, myocardial, and respiratory depression?",
    options: ["Buspirone", "Melatonin agonists", "Barbiturates", "Zaleplon"],
    answer: 2,
    explanation: "Barbiturates are less safe and depress vital centers more strongly."
  },
  {
    question: "Which adverse effect is especially associated with benzodiazepines?",
    options: ["Hyperthermia", "Ataxia and memory impairment", "Severe hypertension", "Analgesia"],
    answer: 1,
    explanation: "Benzodiazepines can cause ataxia, confusion, sedation, and memory problems."
  },
  {
    question: "Benzodiazepines should be used cautiously in:",
    options: ["Liver disease", "Myopia", "Hyperthyroidism", "Iron deficiency"],
    answer: 0,
    explanation: "Hepatic metabolism makes accumulation more likely in liver dysfunction."
  },
  {
    question: "High doses of benzodiazepines may cause:",
    options: ["Respiratory suppression", "Analgesia", "Hyperreflexia", "Enzyme induction"],
    answer: 0,
    explanation: "At high doses, respiratory suppression can occur, especially with other CNS depressants."
  },
  {
    question: "A 70-year-old patient with chronic anxiety who must stay alert is best treated with:",
    options: ["Diazepam", "Phenobarbital", "Buspirone", "Flurazepam"],
    answer: 2,
    explanation: "Buspirone is suitable because it does not cause major sedation."
  },
  {
    question: "A patient with porphyria and severe respiratory depression after a “sleeping pill” most likely took:",
    options: ["Lorazepam", "Phenobarbital", "Zolpidem", "Ramelteon"],
    answer: 1,
    explanation: "Barbiturates are dangerous in porphyria and can cause severe respiratory depression in overdose."
  },
  {
    question: "Delirium tremens during alcohol withdrawal is treated with:",
    options: ["Short-acting barbiturates", "Long-acting benzodiazepines such as diazepam", "Melatonin agonists", "Z-hypnotics"],
    answer: 1,
    explanation: "Long-acting benzodiazepines are classically used because of cross-tolerance with alcohol."
  },
  {
    question: "A patient cannot remember events that happened after taking a sleep medication. This is:",
    options: ["Retrograde amnesia", "Anterograde amnesia", "Permanent brain damage", "Placebo effect"],
    answer: 1,
    explanation: "New memory formation is impaired during drug action."
  },
  {
    question: "A patient on warfarin starts phenobarbital. What happens?",
    options: ["Warfarin effect increases", "Warfarin effect decreases", "No change", "Warfarin becomes instantly toxic"],
    answer: 1,
    explanation: "Phenobarbital induces metabolism and reduces warfarin effect."
  },
  {
    question: "Which drug is a partial agonist at 5-HT1A receptors?",
    options: ["Buspirone", "Zolpidem", "Alprazolam", "Thiopental"],
    answer: 0,
    explanation: "This is the defining mechanism of buspirone."
  },
  {
    question: "Which of these has the highest risk of physical dependence and abuse?",
    options: ["Ramelteon", "Buspirone", "Secobarbital", "Zolpidem"],
    answer: 2,
    explanation: "Barbiturates carry greater abuse and withdrawal risk than newer agents."
  },
  {
    question: "Rebound insomnia is most common after stopping:",
    options: ["Long-acting benzodiazepines", "Short-acting benzodiazepines such as triazolam", "Buspirone", "Melatonin"],
    answer: 1,
    explanation: "Short-acting hypnotics are more likely to produce rebound insomnia."
  },
  {
    question: "Main advantage of Z-drugs over benzodiazepines for sleep:",
    options: ["They are always cheaper", "They disturb sleep architecture less", "They treat anxiety better", "They have no adverse effects"],
    answer: 1,
    explanation: "Z-drugs are more selective for hypnotic action and usually suppress REM less."
  },
  {
    question: "A patient has difficulty falling asleep but not staying asleep. Which drug is best?",
    options: ["Zaleplon", "Temazepam", "Phenobarbital", "Diazepam"],
    answer: 0,
    explanation: "Zaleplon is best for sleep-onset insomnia."
  },
  {
    question: "Benzodiazepines are generally safe because their dose-response curve:",
    options: ["Is linear", "Reaches a plateau", "Always leads to coma", "Is steeper than barbiturates"],
    answer: 1,
    explanation: "Benzodiazepines have a ceiling effect in CNS depression compared with barbiturates."
  },
  {
    question: "Which drug is primarily a hypnotic rather than a daytime anxiolytic sedative?",
    options: ["Diazepam", "Zolpidem", "Phenobarbital", "Alprazolam"],
    answer: 1,
    explanation: "Zolpidem is used mainly for sleep, not routine daytime anxiolysis."
  },
  {
    question: "What should a patient avoid while taking CNS depressants?",
    options: ["High-protein food", "Alcohol", "Exercise", "Vitamin C"],
    answer: 1,
    explanation: "Alcohol has additive CNS and respiratory depressant effects."
  },
  {
    question: "Which drug is used as a pediatric sedative for dental/radiologic procedures in this file?",
    options: ["Thiopental", "Chloral hydrate", "Buspirone", "Ramelteon"],
    answer: 1,
    explanation: "Chloral hydrate is the traditional pediatric sedative/hypnotic in the file."
  },
  {
    question: "Flumazenil may precipitate seizures in:",
    options: ["First-time overdose patients with no dependence", "Patients with chronic benzodiazepine dependence", "Patients taking buspirone", "Children only"],
    answer: 1,
    explanation: "Abrupt antagonism can trigger withdrawal seizures in dependent patients."
  },
  {
    question: "Which drug is a non-benzodiazepine that binds mainly to the BDZ1 receptor subtype?",
    options: ["Eszopiclone", "Diazepam", "Phenobarbital", "Buspirone"],
    answer: 0,
    explanation: "Eszopiclone is one of the Z-drugs."
  },
  {
    question: "The term minor tranquilizer refers to:",
    options: ["Antipsychotics", "Anxiolytics", "General anesthetics", "Antidepressants"],
    answer: 1,
    explanation: "Minor tranquilizer = anxiolytic."
  },
  {
    question: "Which of the following is a symptom of barbiturate withdrawal?",
    options: ["Excessive sleep", "Tremors, anxiety, and hallucinations", "Low body temperature", "Decreased heart rate"],
    answer: 1,
    explanation: "Withdrawal causes CNS overactivity."
  },
  {
    question: "Why is midazolam used for endoscopy?",
    options: ["It lasts for 24 hours", "It provides rapid sedation and anterograde amnesia", "It is a potent analgesic", "It does not cause drowsiness"],
    answer: 1,
    explanation: "Midazolam is excellent for procedures because of amnesia and short action."
  },
  {
    question: "Which drug regulates circadian rhythm?",
    options: ["Zolpidem", "Melatonin", "Diazepam", "Amobarbital"],
    answer: 1,
    explanation: "Melatonin mainly acts via circadian rhythm pathways."
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
